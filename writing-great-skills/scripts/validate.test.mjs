import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const validator = fileURLToPath(new URL('./validate.mjs', import.meta.url));

function fixture(t, body = '# Example\n', extra = '') {
  const root = mkdtempSync(join(tmpdir(), 'skill-validator-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const dir = join(root, 'example-skill');
  mkdirSync(dir);
  const file = join(dir, 'SKILL.md');
  writeFileSync(file, `---\nname: example-skill\ndescription: Extract example data when requested.\n${extra}---\n\n${body}`);
  return { root, dir, file };
}

function run(...args) {
  const result = spawnSync(process.execPath, [validator, ...args], { encoding: 'utf8' });
  assert.ifError(result.error);
  return result;
}

function addFile(dir, path, content) {
  const file = join(dir, path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
  return file;
}

test('prints usage without requiring Pi discovery', () => {
  const result = spawnSync(process.execPath, [validator, '--help'], {
    encoding: 'utf8', env: { ...process.env, PATH: '' },
  });
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Usage:.*--pi-root/);
});

test('loads a directory skill through Pi from an explicit path', t => {
  const { dir } = fixture(t);
  const result = run(dir);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /PASS example-skill \(automatic\)/);
});

test('rejects a string where invocation metadata requires a boolean', t => {
  const { dir } = fixture(t, '# Example\n', 'disable-model-invocation: "true"\n');
  const result = run(dir);
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /disable-model-invocation must be a boolean/);
});

test('rejects an unclosed Markdown code fence', t => {
  const { dir } = fixture(t, '# Example\n\n```text\nunfinished\n');
  const result = run(dir);
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /unclosed Markdown fence/);
});

test('accepts longer outer fences containing shorter examples', t => {
  const { dir } = fixture(t, '````markdown\n```sh\necho example\n```\n````\n\n~~~text\nexample\n~~~\n');
  assert.equal(run(dir).status, 0);
});

test('rejects a missing local resource linked from the entry point', t => {
  const { dir } = fixture(t, '[Guide](references/missing.md)\n');
  const result = run(dir);
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /missing local resource/);
});

test('checks Markdown resources relative to their own directory', t => {
  const { dir } = fixture(t, '[Guide](references/guide.md)\n');
  addFile(dir, 'references/guide.md', '[Missing](details.md)\n');
  const result = run(dir);
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /references\/details\.md/);
});

test('accepts linked resources without treating examples as dependencies', t => {
  const { dir } = fixture(t, '[Guide](<references/guide notes.md>)\n');
  addFile(dir, 'references/guide notes.md', [
    '[Back](../SKILL.md#example)',
    '[Online](https://example.invalid/never-fetch)',
    '`[Literal](missing.md)`',
    '```markdown',
    '[Template](also-missing.md)',
    '```',
    '',
  ].join('\n'));
  const result = run(dir);
  assert.equal(result.status, 0, result.stderr);
});

test('rejects resource links escaping the package', t => {
  const { root, dir } = fixture(t, '[Outside](../outside.md)\n');
  addFile(root, 'outside.md', '# Outside\n');
  const result = run(dir);
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /resource escapes the skill directory/);
});

test('rejects an unclosed fence in a linked reference', t => {
  const { dir } = fixture(t, '[Guide](references/guide.md)\n');
  addFile(dir, 'references/guide.md', '```text\nunfinished\n');
  const result = run(dir);
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /guide\.md:1: unclosed Markdown fence/);
});

test('checks local reference-style link definitions', t => {
  const { dir } = fixture(t, '[Guide][guide]\n\n[guide]: references/missing.md\n');
  const result = run(dir);
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /missing local resource/);
});

test('rejects malformed JSON resources', t => {
  const { dir } = fixture(t, '[Cases](assets/cases.json)\n');
  addFile(dir, 'assets/cases.json', '{"cases": [}\n');
  const result = run(dir);
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /invalid JSON/);
});

test('rejects invalid frontmatter rather than relying on Pi fallbacks', async t => {
  const cases = [
    ['missing name', 'description: Useful task.\n', /name must be explicit/],
    ['mismatched name', 'name: other-skill\ndescription: Useful task.\n', /name must match/],
    ['invalid YAML', 'name: [\ndescription: Useful task.\n', /YAML/],
    ['missing description', 'name: example-skill\n', /description/],
    ['invalid name', 'name: Example\ndescription: Useful task.\n', /name/],
    ['oversized description', `name: example-skill\ndescription: ${'a'.repeat(1025)}\n`, /1024/],
  ];
  for (const [name, metadata, expected] of cases) {
    await t.test(name, t => {
      const { dir, file } = fixture(t);
      writeFileSync(file, `---\n${metadata}---\n# Example\n`);
      const result = run(dir);
      assert.equal(result.status, 1, result.stderr);
      assert.match(result.stderr, expected);
    });
  }
});
