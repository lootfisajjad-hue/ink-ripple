import { defineConfig, devices } from '@playwright/test';

/**
 * E2E config. Builds and serves the app, then runs specs against a mobile
 * viewport. Uses the pre-installed Chromium in this environment when present.
 */
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined;

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  fullyParallel: false,
  retries: 0,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:4188',
    trace: 'on-first-retry',
    launchOptions: executablePath ? { executablePath } : {},
  },
  projects: [
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 7'] },
    },
  ],
  webServer: {
    command: 'npm run build && npm run preview -- --port 4188',
    url: 'http://localhost:4188',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
