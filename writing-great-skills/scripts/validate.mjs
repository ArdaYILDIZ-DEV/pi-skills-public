#!/usr/bin/env node
import { existsSync, readFileSync, realpathSync, statSync } from 'node:fs';
import { basename, delimiter, dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

function findPiRoot() {
  for (const entry of (process.env.PATH ?? '').split(delimiter)) {
    const executable = resolve(entry, 'pi');
    if (!existsSync(executable)) continue;
    let dir = dirname(realpathSync(executable));
    while (dirname(dir) !== dir) {
      const manifest = join(dir, 'package.json');
      if (existsSync(manifest)) {
        const { name } = JSON.parse(readFileSync(manifest, 'utf8'));
        if (typeof name === 'string' && /(^|\/)pi-coding-agent$/.test(name)) return dir;
      }
      dir = dirname(dir);
    }
  }
  throw new Error('Cannot locate the installed Pi package. Pass --pi-root DIR.');
}

function checkMarkdown(file, errors, packageRoot = dirname(realpathSync(file)), seen = new Set()) {
  const canonical = realpathSync(file);
  if (seen.has(canonical)) return;
  seen.add(canonical);
  let fence;
  const links = [];
  for (const [index, line] of readFileSync(file, 'utf8').split(/\r?\n/).entries()) {
    const match = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (match) {
      if (!fence) {
        fence = { char: match[1][0], length: match[1].length, line: index + 1 };
      } else if (match[1][0] === fence.char && match[1].length >= fence.length && !match[2].trim()) {
        fence = undefined;
      }
      continue;
    }
    if (fence || /^( {4}|\t)/.test(line)) continue;
    const prose = line.replace(/(`+).*?\1(?!`)/g, '');
    const definition = prose.match(/^ {0,3}\[[^\]]+\]:\s*(?:<([^>]+)>|(\S+))/);
    if (definition) links.push({ target: definition[1] ?? definition[2], line: index + 1 });
    for (const link of prose.matchAll(/!?\[[^\]\n]*\]\(\s*(?:<([^>\n]+)>|([^\s()]+))(?:\s+["'][^\n]*?["'])?\s*\)/g)) {
      links.push({ target: link[1] ?? link[2], line: index + 1 });
    }
  }
  if (fence) errors.push(`${file}:${fence.line}: unclosed Markdown fence`);
  for (const { target, line } of links) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(target)) continue;
    let local;
    try {
      local = resolve(dirname(file), decodeURIComponent(target.split(/[?#]/)[0]));
    } catch (error) {
      if (!(error instanceof URIError)) throw error;
      errors.push(`${file}:${line}: invalid URL encoding in local resource`);
      continue;
    }
    if (!existsSync(local)) {
      errors.push(`${file}:${line}: missing local resource ${local}`);
      continue;
    }
    const location = relative(packageRoot, realpathSync(local));
    if (location === '..' || location.startsWith(`..${sep}`) || isAbsolute(location)) {
      errors.push(`${file}:${line}: resource escapes the skill directory: ${local}`);
      continue;
    }
    if (!statSync(local).isFile()) continue;
    if (local.endsWith('.md')) checkMarkdown(local, errors, packageRoot, seen);
    if (local.endsWith('.json')) {
      try {
        JSON.parse(readFileSync(local, 'utf8'));
      } catch (error) {
        if (!(error instanceof SyntaxError)) throw error;
        errors.push(`${local}: invalid JSON: ${error.message}`);
      }
    }
  }
}

async function main() {
  const targets = [];
  let piRoot;
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0] === '--help') {
    console.log('Usage: node validate.mjs [--pi-root DIR] [SKILL_PATH ...]');
    console.log('Defaults to this skill. Exit codes: 0 valid, 1 invalid, 2 setup/usage error.');
    return 0;
  }
  for (let index = 0; index < args.length; index++) {
    if (args[index] === '--pi-root') {
      piRoot = args[++index];
      if (!piRoot || piRoot.startsWith('--')) throw new Error('--pi-root requires a directory.');
    } else if (args[index].startsWith('--')) {
      throw new Error(`Unknown option: ${args[index]}`);
    } else {
      targets.push(resolve(args[index]));
    }
  }
  if (!targets.length) targets.push(fileURLToPath(new URL('../', import.meta.url)));
  const root = resolve(piRoot ?? findPiRoot());
  const { loadSkills } = await import(pathToFileURL(join(root, 'dist/core/skills.js')).href);
  const { parseFrontmatter } = await import(pathToFileURL(join(root, 'dist/utils/frontmatter.js')).href);
  const files = [];
  const errors = [];
  for (const target of targets) {
    const file = existsSync(target) && statSync(target).isDirectory() ? join(target, 'SKILL.md') : target;
    if (!existsSync(file) || !statSync(file).isFile() || !file.endsWith('.md')) {
      errors.push(`${file}: expected a Markdown skill file or directory containing SKILL.md`);
    } else {
      files.push(file);
    }
  }
  const result = loadSkills({ cwd: process.cwd(), skillPaths: files, includeDefaults: false });
  for (const diagnostic of result.diagnostics) errors.push(`${diagnostic.path}: ${diagnostic.message}`);
  for (const file of files) {
    checkMarkdown(file, errors);
    let frontmatter;
    try {
      ({ frontmatter } = parseFrontmatter(readFileSync(file, 'utf8')));
    } catch (error) {
      if (error.name !== 'YAMLParseError') throw error;
      errors.push(`${file}: invalid YAML: ${error.message}`);
      continue;
    }
    if (typeof frontmatter.name !== 'string' || !frontmatter.name.trim()) {
      errors.push(`${file}: name must be explicit`);
    } else {
      const expected = basename(file) === 'SKILL.md' ? basename(dirname(file)) : basename(file, '.md');
      if (frontmatter.name !== expected) errors.push(`${file}: name must match ${expected}`);
    }
    const manual = frontmatter['disable-model-invocation'];
    if (manual !== undefined && typeof manual !== 'boolean') {
      errors.push(`${file}: disable-model-invocation must be a boolean`);
    }
    if (!result.skills.some(skill => realpathSync(skill.filePath) === realpathSync(file))) {
      errors.push(`${file}: not loaded as a unique skill`);
    }
  }
  if (errors.length) {
    for (const error of errors) console.error(`FAIL ${error}`);
    return 1;
  }
  for (const skill of result.skills) {
    console.log(`PASS ${skill.name} (${skill.disableModelInvocation ? 'manual-only' : 'automatic'})`);
  }
  return 0;
}

try {
  process.exitCode = await main();
} catch (error) {
  console.error(`ERROR ${error.message}`);
  process.exitCode = 2;
}
