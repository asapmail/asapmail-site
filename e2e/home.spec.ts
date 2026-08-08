import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("homepage presents the complete lifecycle agency story", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /turn customer data into journeys that retain/i,
    }),
  ).toBeVisible();
  await expect(page.getByRole("banner")).toBeAttached();
  await expect(page.getByRole("link", { name: /request an audit/i }).first()).toBeAttached();
  await expect(page.getByRole("heading", { name: /every message starts upstream/i })).toBeAttached();
  await expect(page.getByRole("heading", { name: /a clear route to production/i })).toBeAttached();
  await expect(page.getByRole("heading", { name: /platform-flexible. system-minded/i })).toBeAttached();

  const auditLink = page.getByRole("link", { name: /request an audit/i }).first();
  await expect(auditLink).toHaveAttribute("href", "#contact");
  await auditLink.click();
  await expect(page.locator("#contact")).toBeInViewport();
});

test("homepage supports keyboard navigation and has no detectable accessibility violations", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: /skip to main content/i });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();

  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("homepage does not overflow the viewport", async ({ page }) => {
  await page.goto("/");
  const dimensions = await page.evaluate(() => ({
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
  }));

  expect(dimensions.documentWidth).toBeLessThanOrEqual(dimensions.viewportWidth + 1);
});
