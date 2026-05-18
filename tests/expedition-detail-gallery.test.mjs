import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const pageSource = readFileSync("src/app/salidas/[slug]/page.tsx", "utf8");

test("expedition detail renders its gallery images as a slider", () => {
  assert.match(pageSource, /const images = expedition\.gallery \?\? \[expedition\.thumbnail\]/);
  assert.match(pageSource, /images\.map\(/);
  assert.match(pageSource, /detail-gallery/);
});
