import { describe, expect, it } from "vitest";
import { navItems, primaryCta, products, verificationLayers } from "./site";

describe("AIWS marketing content", () => {
  it("keeps the landing page focused on one primary conversion action", () => {
    expect(primaryCta.label).toBe("Book a strategy briefing");
    expect(primaryCta.href).toMatch(/^mailto:/);
  });

  it("covers the four AIWS product pillars", () => {
    expect(products.map((product) => product.title)).toEqual([
      "AI-Powered RPO",
      "AI Workforce Intelligence",
      "AI Talent Communities",
      "AI Fraud Shield",
    ]);
  });

  it("preserves the eleven-layer Fraud Shield story", () => {
    expect(verificationLayers).toHaveLength(11);
    expect(verificationLayers.join(" ")).toContain("Continuous workforce verification");
  });

  it("uses hash anchors for crawlable in-page navigation", () => {
    expect(navItems.every((item) => item.href.startsWith("#"))).toBe(true);
  });
});
