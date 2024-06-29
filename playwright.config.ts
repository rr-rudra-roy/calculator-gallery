// playwright.config.ts
import { defineConfig, devices } from "@playwright/test"

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
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
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
