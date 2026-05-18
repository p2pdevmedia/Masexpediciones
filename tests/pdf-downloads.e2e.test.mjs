import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const expeditionsSource = readFileSync("src/lib/expeditions.ts", "utf8");
const detailPageSource = readFileSync("src/app/salidas/[slug]/page.tsx", "utf8");
const vercelIgnoreSource = readFileSync(".vercelignore", "utf8");

const expeditionPdfHrefs = [...expeditionsSource.matchAll(/pdf:\s*"([^"]+)"/g)].map(
  ([, href]) => href,
);
const equipmentPdfHref = detailPageSource.match(/const equipmentPdf = "([^"]+)"/)?.[1];
const linkedPdfHrefs = [...new Set([...expeditionPdfHrefs, equipmentPdfHref].filter(Boolean))];

test("download links resolve to real PDF files in public", () => {
  assert.ok(linkedPdfHrefs.length > 0, "expected at least one linked PDF");

  for (const href of linkedPdfHrefs) {
    assert.match(href, /^\/pdfs\/.+\.pdf$/);

    const publicPath = `public${href}`;
    assert.ok(existsSync(publicPath), `${href} should exist at ${publicPath}`);
    assert.equal(readFileSync(publicPath, "utf8").slice(0, 4), "%PDF");
  }
});

test("deployment package includes every linked PDF download", () => {
  const ignoreLines = vercelIgnoreSource
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));

  const ignoresAllPublicPdfs = ignoreLines.includes("public/pdfs/*");
  assert.equal(ignoresAllPublicPdfs, true, "this test expects public PDFs to be allowlisted");

  for (const href of linkedPdfHrefs) {
    const publicPath = `public${href}`;
    assert.ok(
      ignoreLines.includes(`!${publicPath}`),
      `${publicPath} must be allowlisted in .vercelignore`,
    );
  }
});
