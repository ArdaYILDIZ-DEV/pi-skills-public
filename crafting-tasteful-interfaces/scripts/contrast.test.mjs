import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { contrastRatio, relativeLuminance } from './contrast.mjs';

const cli = fileURLToPath(new URL('./contrast.mjs', import.meta.url));
const run = (...args) => spawnSync(process.execPath, [cli, ...args], { encoding: 'utf8' });

function close(actual, expected, tolerance = 1e-12) {
  assert.ok(Math.abs(actual - expected) < tolerance, `${actual} != ${expected}`);
}

test('black/white endpoints and symmetry', () => {
  close(relativeLuminance('#000'), 0);
  close(relativeLuminance('#fff'), 1);
  close(contrastRatio('#000', '#fff'), 21);
  close(contrastRatio('#fff', '#000'), 21);
  close(contrastRatio('#123456', '#123456'), 1);
});

test('uses WCAG sRGB transfer curve and channel weights', () => {
  close(relativeLuminance('#ff0000'), 0.2126);
  close(relativeLuminance('#00ff00'), 0.7152);
  close(relativeLuminance('#0000ff'), 0.0722);
  close(relativeLuminance('#0a0a0a'), (10 / 255) / 12.92);
  close(relativeLuminance('#0b0b0b'), ((11 / 255 + 0.055) / 1.055) ** 2.4);
  close(contrastRatio('#777', '#fff'), 4.478089453577214);
});

test('expands shorthand and accepts uppercase hex', () => {
  close(contrastRatio('#AbC', '#FFF'), contrastRatio('#aabbcc', '#ffffff'));
});

test('rejects unsupported spaces, alpha, empty/malformed input and nonstrings', () => {
  for (const value of ['white', 'fff', '#ff', '#abcd', '#ffffff80', 'rgb(0,0,0)',
    'oklch(0.5 0.1 20)', '#gggggg', '', ' #fff', '#fff\n', null, 123]) {
    assert.throws(() => relativeLuminance(value), /opaque sRGB hex/);
  }
});

test('CLI emits measured result and correct passing/failing exit codes', () => {
  const pass = run('#000', '#fff');
  assert.equal(pass.status, 0, pass.stderr);
  assert.match(pass.stdout, /21\.000000:1.*PASS.*4\.5:1/);
  const fail = run('#777', '#fff');
  assert.equal(fail.status, 1, fail.stderr);
  assert.match(fail.stdout, /4\.478089:1.*FAIL/);
  assert.equal(run('#767676', '#fff').status, 0);
  assert.equal(run('#777', '#fff', '3').status, 0);
});

test('threshold decisions use full precision, not display rounding', () => {
  const ratio = contrastRatio('#777', '#fff');
  const below = run('#777', '#fff', String(ratio - 1e-9));
  const above = run('#777', '#fff', String(ratio + 1e-9));
  assert.equal(below.status, 0);
  assert.equal(above.status, 1);
});

test('CLI rejects invalid inputs/thresholds with explicit setup exit', () => {
  for (const args of [[], ['#000'], ['#000', '#fff', '0'], ['#000', '#fff', '22'],
    ['#000', '#fff', 'NaN'], ['#000', '#fff', ''], ['#000', '#fff', '4.5x'],
    ['#000', '#fff', '4.5', 'extra'], ['#00000080', '#fff']]) {
    const result = run(...args);
    assert.equal(result.status, 2, result.stdout);
    assert.match(result.stderr, /ERROR/);
  }
});

test('help describes supported scope without running a calculation', () => {
  const result = run('--help');
  assert.equal(result.status, 0);
  assert.match(result.stdout, /opaque sRGB/);
});
