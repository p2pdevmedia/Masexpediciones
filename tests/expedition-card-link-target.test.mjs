import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const cardSource = readFileSync("src/components/ExpeditionCard.tsx", "utf8");

test("expedition cards make the main card content clickable", () => {
  assert.match(cardSource, /className="expedition-card__main"/);
  assert.match(
    cardSource,
    /<Link[\s\S]*className="expedition-card__main"[\s\S]*<div className="expedition-card__body">/,
  );
});
