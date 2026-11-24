# The One-Line AI Excuse for Breaking Production

[![make.fun](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/Tayuya69/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/rank.svg)](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/Tayuya69/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/reward.svg)](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

Entry for the [make.fun bounty "The One-Line AI Excuse for Breaking Production"](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66).

## The entry

> I didn't break production — I gave it a surprise resilience drill. It failed, I panicked, and now the rollback is on fire too.

## How it works

`main.ts` deterministically writes exactly the entry line above (126 characters, one line, no trailing newline) to `/output/entry.txt`. No randomness, no network, no input. It then re-reads the file and verifies it matches the entry line exactly.

Run it with:

```sh
bun run main.ts
```
