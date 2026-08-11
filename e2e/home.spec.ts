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

test("primary audit CTA reaches the contact section", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /request a lifecycle audit/i }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.getByRole("heading", { name: /make your customer engagement stack work/i })).toBeInViewport();
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
