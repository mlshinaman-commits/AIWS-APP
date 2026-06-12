import { expect, test } from "@playwright/test";

test("homepage renders the core conversion flow", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Hire at AI speed. Verify every human." })).toBeVisible();
  await expect(page.getByText("Design-partner proof")).toBeVisible();
  await expect(page.getByText("50%")).toBeVisible();

  await page.getByRole("link", { name: "Fraud Shield", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Eleven layers between fraud and your payroll." })).toBeVisible();
  await expect(page.getByText("Continuous workforce verification")).toBeVisible();

  await page.getByRole("link", { name: "Demo" }).click();
  await expect(page.getByRole("heading", { name: "See your own hiring funnel through Fraud Shield." })).toBeVisible();
  await expect(page.getByLabel("Work email")).toBeVisible();
});

test("demo form validates and prepares a capture handoff", async ({ page }) => {
  await page.goto("/#demo");

  await page.getByLabel("Name").fill("Jordan Rivera");
  await page.getByLabel("Work email").fill("jordan@example.com");
  await page.getByLabel("Company").fill("Acme Manufacturing");
  await page.getByLabel("Role").fill("VP Talent");
  await page.getByLabel("Highest-risk hiring challenge").fill("Remote technical hiring has proxy-interview risk.");
  await page.getByRole("button", { name: /Request strategy briefing/i }).click();

  await expect(page.getByText("Your briefing request is ready.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open email draft" })).toHaveAttribute(
    "href",
    /mailto:hello@intellisource\.ai/
  );
});

test("static SEO files are served", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  await expect(robots).toBeOK();
  expect(await robots.text()).toContain("Sitemap:");

  const sitemap = await request.get("/sitemap.xml");
  await expect(sitemap).toBeOK();
  expect(await sitemap.text()).toContain("https://aiws.intellisource.ai/");
});
