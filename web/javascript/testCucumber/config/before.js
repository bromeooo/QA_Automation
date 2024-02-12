const { Before, setDefaultTimeout } = require("@cucumber/cucumber");
const playwright = require("playwright");
const selenium = require("selenium-webdriver");
const fs = require("fs").promises;
const path = require("path");

setDefaultTimeout(120000);

Before({ tags: "@playwright" }, async function (scenario) {
  // Clear old traces
  await manageDirectory();

  this.browser = await playwright.chromium.launch({
    headless: false,
    slowMo: 500,
  });
  this.context = await this.browser.newContext({
    defaultNavigationTimeout: 30000,
    defaultTimeout: 30000,
  });
  this.page = await this.context.newPage();
  await this.context.tracing.start({ screenshots: true, snapshots: true });

  console.log("Launching Playwright Chromium Browser");
});

// Selenium hook
Before({ tags: "@selenium" }, async function () {
  // Define your Selenium WebDriver settings here
  this.driver = new selenium.Builder()
    .forBrowser("chrome") // or 'firefox', 'edge', etc.
    .build();

  console.log("Launching Selenium WebDriver");
});

async function manageDirectory() {
  const directory = '.testArtifacts/trace';

  try {
      // Check if the directory exists
      try {
          await fs.access(directory);
          // If this succeeds, the directory exists - clear its contents
          const files = await fs.readdir(directory);
          for (const file of files) {
              await fs.unlink(path.join(directory, file));
          }
      } catch {
          // If an error is thrown, the directory does not exist - create it
          await fs.mkdir(directory, { recursive: true });
      }
  } catch (err) {
      console.error(`An error occurred: ${err}`);
  }
}
