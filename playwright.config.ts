// playwright.config.ts
import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "./src", // Set the directory to look for tests
  timeout: 30000, // Maximum time one test can run for
  expect: {
    timeout: 5000, // Timeout for expect assertions
  },
  use: {
    headless: true, // Run tests in headless mode by default
    viewport: { width: 1920, height: 963 }, // Default viewport size
    actionTimeout: 0, // No limit on action timeouts
    ignoreHTTPSErrors: true, // Ignore HTTPS errors by default
    video: "on-first-retry", // Record video for the first retry only
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "webkit",
      use: { browserName: "webkit" },
    },
  ],
  outputDir: "test-results/", // Directory for test results
  webServer: {
    command: "npm run dev",
    port: 3000,
    reuseExistingServer: !process.env.CI, // Only start a new server if not running in CI
  },
  testMatch: "**/*.spec.ts", // Match files with .spec.ts extension
  testIgnore: "**/utils/**/*", // Ignore all files in the /src/utils/ folder
})
