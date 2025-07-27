import { test, expect } from "@playwright/test";
import { AutomateItControllerApiFactory } from "automateITApi";

const automateITFactory = AutomateItControllerApiFactory(
  undefined,
  "http://localhost:8080"
);

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  //const response = await automateITFactory.getAutomateITPhrase("123");
  //console.log(response.data);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
