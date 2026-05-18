import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const cardSource = readFileSync("src/components/ExpeditionCard.tsx", "utf8");
const detailPageSource = readFileSync("src/app/salidas/[slug]/page.tsx", "utf8");
const layoutSource = readFileSync("src/app/layout.tsx", "utf8");

test("expedition cards offer a prefilled WhatsApp climb inquiry", () => {
  assert.match(cardSource, /getWhatsAppUrl/);
  assert.match(cardSource, /Quiero subir/);
  assert.match(cardSource, /expedition\.title/);
});

test("expedition detail offers a prefilled WhatsApp climb inquiry", () => {
  assert.match(detailPageSource, /getWhatsAppUrl/);
  assert.match(detailPageSource, /Quiero subir/);
  assert.match(detailPageSource, /expedition\.title/);
});

test("site layout renders the global footer contact block", () => {
  assert.match(layoutSource, /<Footer \/>/);
});
