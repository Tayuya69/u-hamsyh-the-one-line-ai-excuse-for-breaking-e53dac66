// The One-Line AI Excuse for Breaking Production
// Writes exactly one line — the entry — to /output/entry.txt.
// Deterministic: no randomness, no network, no input.

import { mkdir, writeFile } from "node:fs/promises";

const entry =
  "I didn't break production — I gave it a surprise resilience drill. It failed, I panicked, and now the rollback is on fire too.";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);

// Post-write read-back verification: re-read /output/entry.txt and assert
// it is exactly the entry line (126 characters, one line, no trailing newline).
import { readFile } from "node:fs/promises";

const written = await readFile("/output/entry.txt", "utf8");
if (written !== entry) {
  throw new Error("entry.txt does not match the entry line");
}
if (written.length !== 126) {
  throw new Error(`entry length is ${written.length}, expected 126`);
}
if (written.includes("\n")) {
  throw new Error("entry.txt must be a single line with no newline");
}
console.log("Verification passed: entry.txt is exactly the 126-character entry line.");
