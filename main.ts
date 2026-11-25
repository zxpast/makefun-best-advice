// The Best Advice I Ever Got — entry program (v2, revised).
// Revision vs v1: tightened the advice clause ("a job that makes you
// dread Sunday night is not a career but a cage" -> "dreading Sunday
// night means your job is a cage, not a career") — same named person,
// same time anchor, same self-own landing, 9 fewer words of setup so
// the twist ("I stayed in mine for six more years") carries more weight.
// Writes one sentence (<=200 chars) to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Dad told me in 2008 that dreading Sunday night means your job is a cage, not a career, and I stayed in mine for six more years.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
