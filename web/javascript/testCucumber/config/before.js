const { Before, setDefaultTimeout } = require('@cucumber/cucumber');
const playwright = require('playwright');
const fs = require('fs');
const path = require('path');

setDefaultTimeout(120000);

Before({ tags: "@playwright" }, async function (scenario) {
  // Clear old traces
  const traceDir = './testArtifacts/trace';
  fs.readdir(traceDir, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      fs.rm(path.join(traceDir, file), { recursive: true, force: true }, err => {
        if (err) throw err;
      });
    }
  });

  this.browser = await playwright.chromium.launch({ headless: false });
  this.context = await this.browser.newContext({
    defaultNavigationTimeout: 30000,
    defaultTimeout: 30000
  });
  this.page = await this.context.newPage();
  await this.context.tracing.start({ screenshots: true, snapshots: true });

  console.log('Launching Playwright Chromium Browser');
});
