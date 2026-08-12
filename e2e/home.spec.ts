import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

for (const route of ["/"]) {
  test(`${route} loads the complete home page with no detectable accessibility violations`, async ({ page }) => {
    await page.goto(route);

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /turn customer data into journeys that keep people moving/i,
      }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: /selected experience of the team/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /make your customer engagement stack work/i })).toBeVisible();
    await expect(page.getByText(/not current partner status/i)).toBeVisible();

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}

test("primary audit CTA opens Alexander's Telegram", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: /request a lifecycle audit/i }),
  ).toHaveAttribute("href", "https://t.me/starcv");
  await expect(
    page.getByRole("link", { name: /request a lifecycle audit/i }),
  ).toHaveAttribute("target", "_blank");
});

test("contact section and footer expose the three contact channels", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /telegram/i })).toHaveCount(2);
  await expect(page.getByRole("link", { name: /email.*demo/i })).toHaveCount(2);
  await expect(page.getByRole("link", { name: /whatsapp.*demo/i })).toHaveCount(2);
});

test("homepage does not overflow on a narrow mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/");
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});
