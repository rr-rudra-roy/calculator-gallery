import { test, expect } from "@playwright/test"
import { SEO } from "@/data/seo"

// Basic calculator page url
const basicCalculatorPageUrl = "http://localhost:3000/calculators/basic"

// Test suite for checking if the document loads correctly
test.describe("Is Document Loading", () => {
  // Test to check if the basic calculator page loads and the document title is correct
  test("should load the basic calculator page and have a valid title", async ({ page }) => {
    await page.goto(basicCalculatorPageUrl)

    // Check if the page loaded by verifying the title contains "Basic Calculator"
    await expect(page).toHaveTitle(SEO.basicCalculatorTitle)
  })
})
