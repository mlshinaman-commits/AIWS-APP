import { describe, expect, it } from "vitest";
import { buildDemoMailto, validateDemoRequest } from "./demoCapture";
import type { DemoRequest } from "./demoCapture";

const request: DemoRequest = {
  name: "Jordan Rivera",
  email: "jordan@example.com",
  company: "Acme Manufacturing",
  role: "VP Talent",
  hiringChallenge: "Remote technical hiring has proxy-interview risk.",
};

describe("demo capture helpers", () => {
  it("validates complete demo requests", () => {
    expect(validateDemoRequest(request)).toBe(true);
    expect(validateDemoRequest({ ...request, email: "not-an-email" })).toBe(false);
    expect(validateDemoRequest({ ...request, company: " " })).toBe(false);
  });

  it("builds a complete mailto handoff", () => {
    const href = buildDemoMailto(request);

    expect(href).toContain("mailto:hello@intellisource.ai");
    expect(decodeURIComponent(href)).toContain("AIWS strategy briefing request from Acme Manufacturing");
    expect(decodeURIComponent(href)).toContain("Remote technical hiring has proxy-interview risk.");
  });
});
