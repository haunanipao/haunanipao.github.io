#!/usr/bin/env node
// ============================================
// scripts/audit-a11y.ts
// CLI accessibility auditor for built HTML
//
// Usage:
//   npx tsx scripts/audit-a11y.ts           # scans dist/index.html
//   npx tsx scripts/audit-a11y.ts path.html # scans a specific file
//
// Exit codes:
//   0  = no violations found
//   1  = violations found (useful for CI gates)
// ============================================

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { JSDOM } from "jsdom";
import axe from "axe-core";

// ─── Config ─────────────────────────────────────────────────────
const DEFAULT_TARGET = resolve(process.cwd(), "dist/index.html");
const TAGS_TO_CHECK = ["wcag2a", "wcag2aa", "best-practice"];

// ─── Colour helpers (ANSI) ──────────────────────────────────────
const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const GREEN = "\x1b[32m";
const CYAN = "\x1b[36m";
const DIM = "\x1b[2m";
const BOLD = "\x1b[1m";
const RESET = "\x1b[0m";

// ─── Severity → icon + colour ───────────────────────────────────
function severityBadge(impact: string | undefined): string {
  switch (impact) {
    case "critical":
      return `${RED}${BOLD}✖ CRITICAL${RESET}`;
    case "serious":
      return `${RED}✖ SERIOUS${RESET}`;
    case "moderate":
      return `${YELLOW}⚠ MODERATE${RESET}`;
    case "minor":
      return `${DIM}ℹ MINOR${RESET}`;
    default:
      return `${DIM}? UNKNOWN${RESET}`;
  }
}

// ─── Main ───────────────────────────────────────────────────────
async function main() {
  const filePath = process.argv[2]
    ? resolve(process.cwd(), process.argv[2])
    : DEFAULT_TARGET;

  if (!existsSync(filePath)) {
    console.error(
      `\n${RED}✖ File not found:${RESET} ${filePath}\n` +
        `  Run ${CYAN}npm run build${RESET} first, or pass a path:\n` +
        `  ${DIM}npx tsx scripts/audit-a11y.ts path/to/file.html${RESET}\n`
    );
    process.exit(1);
  }

  console.log(`\n${CYAN}♿  Accessibility Audit${RESET}`);
  console.log(`${DIM}   Scanning: ${filePath}${RESET}`);
  console.log(`${DIM}   Tags:     ${TAGS_TO_CHECK.join(", ")}${RESET}\n`);

  // Parse HTML with JSDOM (suppress harmless canvas warnings)
  const html = readFileSync(filePath, "utf-8");
  const { VirtualConsole } = await import("jsdom");
  const virtualConsole = new VirtualConsole();
  virtualConsole.on("error", () => {});   // swallow "Not implemented: HTMLCanvasElement"

  const dom = new JSDOM(html, {
    url: "http://localhost",
    pretendToBeVisual: true,
    virtualConsole,
  });

  // Inject axe-core into the JSDOM document
  const document = dom.window.document;

  // axe.run needs a serialised document fragment
  const results = await axe.run(document.documentElement, {
    runOnly: {
      type: "tag",
      values: TAGS_TO_CHECK,
    },
  });

  // ── Report violations ──────────────────────────────────────────
  const { violations, passes, incomplete } = results;

  if (violations.length === 0) {
    console.log(`${GREEN}${BOLD}✓ No violations found!${RESET}`);
    console.log(
      `${DIM}  ${passes.length} checks passed · ${incomplete.length} incomplete (need manual review)${RESET}\n`
    );
    process.exit(0);
  }

  // Group by impact severity
  const sorted = [...violations].sort((a, b) => {
    const order = ["critical", "serious", "moderate", "minor"];
    return (
      order.indexOf(a.impact ?? "minor") - order.indexOf(b.impact ?? "minor")
    );
  });

  console.log(
    `${RED}${BOLD}Found ${violations.length} violation${violations.length > 1 ? "s" : ""}:${RESET}\n`
  );

  for (const v of sorted) {
    console.log(`  ${severityBadge(v.impact)}  ${BOLD}${v.id}${RESET}`);
    console.log(`  ${v.description}`);
    console.log(`  ${DIM}Help: ${v.helpUrl}${RESET}`);

    for (const node of v.nodes) {
      const snippet =
        node.html.length > 120
          ? node.html.slice(0, 120) + "…"
          : node.html;
      console.log(`    ${YELLOW}→${RESET} ${snippet}`);

      // Show target CSS selector(s)
      for (const target of node.target) {
        console.log(`      ${DIM}at: ${target}${RESET}`);
      }

      // Show failure summary
      if (node.failureSummary) {
        const lines = node.failureSummary.split("\n");
        for (const line of lines) {
          console.log(`      ${DIM}${line}${RESET}`);
        }
      }
    }
    console.log();
  }

  // ── Summary ────────────────────────────────────────────────────
  const bySeverity = {
    critical: violations.filter((v) => v.impact === "critical").length,
    serious: violations.filter((v) => v.impact === "serious").length,
    moderate: violations.filter((v) => v.impact === "moderate").length,
    minor: violations.filter((v) => v.impact === "minor").length,
  };

  console.log(`${BOLD}Summary${RESET}`);
  console.log(`  ${passes.length} passed · ${violations.length} violations · ${incomplete.length} incomplete`);
  if (bySeverity.critical)
    console.log(`  ${RED}${bySeverity.critical} critical${RESET}`);
  if (bySeverity.serious)
    console.log(`  ${RED}${bySeverity.serious} serious${RESET}`);
  if (bySeverity.moderate)
    console.log(`  ${YELLOW}${bySeverity.moderate} moderate${RESET}`);
  if (bySeverity.minor)
    console.log(`  ${DIM}${bySeverity.minor} minor${RESET}`);

  console.log();
  process.exit(1); // non-zero for CI gates
}

main().catch((err) => {
  console.error(`${RED}Audit script crashed:${RESET}`, err);
  process.exit(2);
});
