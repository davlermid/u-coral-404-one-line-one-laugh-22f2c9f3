// One Line, One Laugh — u-coral-404-one-line-one-laugh-22f2c9f3
// Deterministic entry writer: no random, no network, no file reads.
// Writes the winning one-liner to entry.txt and hard-fails (exit 1)
// if the entry is outside the 1-200 character gate.

const ENTRY =
  "I told the AI to be more human. It started replying 'per my last email.'";

// Count Unicode code points (matches the UTF-8 character gate).
const len = [...ENTRY].length;

if (len < 1 || len > 200) {
  console.error(`gate failed: entry is ${len} characters, must be 1-200`);
  process.exit(1);
}

await Bun.write("entry.txt", ENTRY);
console.log(`ok: entry.txt written (${len} characters)`);
