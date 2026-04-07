import puppeteer from "puppeteer";
import { readFile, stat } from "fs/promises";

const [, , input, output, formatArg] = process.argv;
if (!input || !output) {
  console.error("Usage: node generate-pdf.mjs <input.html> <output.pdf> [--format=letter|a4]");
  process.exit(1);
}

const format = formatArg?.includes("a4") ? "A4" : "Letter";
const html = await readFile(input, "utf-8");
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle0" });
await page.pdf({
  path: output,
  format,
  margin: { top: "0.5in", right: "0.5in", bottom: "0.5in", left: "0.5in" },
  printBackground: true,
});
await browser.close();

const { size } = await stat(output);
console.log(`PDF: ${output} (${(size / 1024).toFixed(0)} KB, ${format})`);
