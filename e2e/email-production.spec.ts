import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const route = "/email-production";

test("email-production landing presents the complete product offer without detectable accessibility violations", async ({ page }) => {
  await page.goto(route);
  await expect(page.getByRole("heading", { level: 1, name: /from email brief to brand-ready html/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /your brand becomes a reusable email-production system/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /the setup turns brand materials into a working production system/i })).toBeVisible();
  await expect(page.getByText(/does it work with outlook and mobile clients/i)).toBeVisible();
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("email-production CTA opens Telegram", async ({ page }) => {
  await page.goto(route);
  const links = page.getByRole("link", { name: /discuss implementation/i });
  await expect(links.first()).toHaveAttribute("href", "https://t.me/starcv");
  await expect(links.first()).toHaveAttribute("target", "_blank");
});

test("email-production calculator updates from user inputs", async ({ page }) => {
  await page.goto(route);
  await page.getByLabel(/emails per month/i).fill("5");
  await expect(page.getByText("$2,370")).toBeVisible();
  await expect(page.getByText("$1,040")).toBeVisible();
});

test("email-production does not overflow on a narrow mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto(route);
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});
