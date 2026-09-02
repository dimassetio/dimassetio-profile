import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("homepage exposes the full portfolio journey", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("I turn ideas into useful products.");
  await expect(page.getByRole("heading", { name: "Products built for real workflows." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "From first interface to production delivery." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Building products that have to work." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Practical technology, built around real needs." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Have a role or product in mind? Let's talk." })).toBeVisible();

  await expect(page.getByRole("link", { name: "View résumé" })).toHaveAttribute("href", /drive\.google\.com/);
  await expect(page.getByRole("link", { name: /Live demo/ })).toHaveCount(0);
  await expect(page.getByRole("link", { name: /Source code/ })).toHaveCount(0);
});

test("project tabs support keyboard selection", async ({ page }) => {
  await page.goto("/#work");
  await expect(page.getByRole("tab", { name: /More completed projects/ })).toBeDisabled();
  const aether = page.getByRole("tab", { name: /Aether/ });
  await aether.focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("tab", { name: /SirkelBus/ })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel")).toContainText("transport booking product");
});

test("projects with multiple gallery images expose carousel controls", async ({ page }) => {
  await page.goto("/#work");
  await page.getByRole("tab", { name: /SirkelBus/ }).click();
  const gallery = page.getByRole("region", { name: "SirkelBus project gallery" });
  const image = gallery.getByRole("img");
  const initialSrc = await image.getAttribute("src");
  const imageCount = await gallery.getByRole("button", { name: /Show image/ }).count();

  expect(imageCount).toBeGreaterThan(1);
  await page.getByRole("button", { name: "Next image for SirkelBus" }).click();
  await expect.poll(() => image.getAttribute("src")).not.toBe(initialSrc);
  await expect(page.getByText(`Transport booking · 2/${imageCount}`)).toBeVisible();
});

test("case study routes are navigable and unknown routes are branded", async ({ page }) => {
  await page.goto("/work/aether");
  await expect(page.getByRole("heading", { level: 1, name: "Aether" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Important decisions" })).toBeVisible();

  await page.goto("/work/not-published");
  await expect(page.getByRole("heading", { name: "This route took a wrong turn." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Return home" })).toBeVisible();
});

test("homepage has no automatically detectable accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("theme toggle switches and persists dark mode", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Toggle color theme" });

  await toggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect.poll(() => page.evaluate(() => localStorage.getItem("theme"))).toBe("dark");

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test.describe("mobile navigation", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("opens, moves focus, and restores focus after Escape", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Open navigation menu" });
    await trigger.click();
    await expect(page.getByRole("link", { name: "Work", exact: true })).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Open navigation menu" })).toBeFocused();
  });
});
