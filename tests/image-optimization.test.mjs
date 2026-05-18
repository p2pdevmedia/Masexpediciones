import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const homeSource = readFileSync("src/app/page.tsx", "utf8");
const cardSource = readFileSync("src/components/ExpeditionCard.tsx", "utf8");
const guidesSource = readFileSync("src/app/guias/page.tsx", "utf8");
const detailSource = readFileSync("src/app/salidas/[slug]/page.tsx", "utf8");

test("home hero guide images use next/image with responsive sizes and a priority LCP image", () => {
  assert.match(homeSource, /import Image from "next\/image"/);
  assert.match(homeSource, /<Image[\s\S]*src=\{guide\.image\}[\s\S]*sizes=/);
  assert.match(homeSource, /priority=\{index === 0\}/);
  assert.match(homeSource, /fetchPriority=\{index === 0 \? "high" : undefined\}/);
});

test("expedition card gallery images use next/image with responsive sizes", () => {
  assert.match(cardSource, /import Image from "next\/image"/);
  assert.match(cardSource, /<Image[\s\S]*src=\{image\}[\s\S]*sizes=/);
});

test("guide profile images use next/image and stay lazy loaded", () => {
  assert.match(guidesSource, /import Image from "next\/image"/);
  assert.match(guidesSource, /<Image[\s\S]*src=\{guide\.image\}[\s\S]*loading="lazy"/);
  assert.match(guidesSource, /sizes=/);
});

test("expedition detail gallery images use next/image with a priority first image", () => {
  assert.match(detailSource, /import Image from "next\/image"/);
  assert.match(detailSource, /<Image[\s\S]*src=\{image\}[\s\S]*sizes=/);
  assert.match(detailSource, /priority=\{index === 0\}/);
});
