#!/usr/bin/env node
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Relative luminance for an opaque, gamma-encoded sRGB #RGB or #RRGGBB color. */
export function relativeLuminance(hex) {
  if (typeof hex !== 'string' || !/^#(?:[\da-f]{3}|[\da-f]{6})$/i.test(hex)) {
    throw new TypeError('Expected opaque sRGB hex: #RGB or #RRGGBB; alpha and other color spaces are unsupported.');
  }
  const raw = hex.slice(1);
  const expanded = raw.length === 3 ? [...raw].map(channel => channel.repeat(2)).join('') : raw;
  const channels = [0, 2, 4].map(offset => {
    const value = Number.parseInt(expanded.slice(offset, offset + 2), 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

/** WCAG contrast ratio for two opaque sRGB colors; does not round the decision value. */
export function contrastRatio(foreground, background) {
  const first = relativeLuminance(foreground);
  const second = relativeLuminance(background);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

function main(args) {
  if (args.length === 1 && args[0] === '--help') {
    console.log('Usage: node contrast.mjs FOREGROUND BACKGROUND [THRESHOLD=4.5]');
    console.log('Supports opaque sRGB #RGB/#RRGGBB only. Exit: 0 meets threshold, 1 below, 2 invalid input.');
    console.log('A solid-color pair check is not full WCAG compliance; alpha, images and wide gamut are unsupported.');
    return 0;
  }
  if (args.length < 2 || args.length > 3) {
    throw new TypeError('Usage: node contrast.mjs FOREGROUND BACKGROUND [THRESHOLD=4.5]');
  }
  const thresholdText = args[2] ?? '4.5';
  if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(thresholdText)) {
    throw new TypeError('Threshold must be a decimal number between 1 and 21.');
  }
  const threshold = Number(thresholdText);
  if (!Number.isFinite(threshold) || threshold < 1 || threshold > 21) {
    throw new TypeError('Threshold must be a decimal number between 1 and 21.');
  }
  const ratio = contrastRatio(args[0], args[1]);
  const passes = ratio >= threshold;
  console.log(`${ratio.toFixed(6)}:1 ${passes ? 'PASS' : 'FAIL'} threshold ${threshold}:1 (opaque sRGB pair only)`);
  return passes ? 0 : 1;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    process.exitCode = main(process.argv.slice(2));
  } catch (error) {
    if (!(error instanceof TypeError)) throw error;
    console.error(`ERROR ${error.message}`);
    process.exitCode = 2;
  }
}
