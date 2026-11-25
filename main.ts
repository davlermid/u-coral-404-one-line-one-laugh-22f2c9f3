// One Line, One Laugh — u-coral-404-one-line-one-laugh-22f2c9f3
// Deterministic entry writer: no random, no network, no file reads.
// Writes the winning one-liner to /output/entry.txt and hard-fails (exit 1)
// if the entry is outside the 1-200 character gate.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I told the AI to be more human. It started replying 'per my last email.'";

// Count Unicode code points (matches the UTF-8 character gate).
const len = [...ENTRY].length;

if (len < 1 || len > 200) {
  console.error(`gate failed: entry is ${len} characters, must be 1-200`);
  process.exit(1);
}

if (ENTRY.trim().length === 0) {
  console.error("gate failed: entry is empty or whitespace only");
  process.exit(1);
}

if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  console.error("gate failed: entry must be a single line (no newline)");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`ok: /output/entry.txt written (${len} characters)`);
