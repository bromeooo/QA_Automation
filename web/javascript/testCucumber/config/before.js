const { Before, setDefaultTimeout } = require('@cucumber/cucumber');
const playwright = require('playwright');

setDefaultTimeout(120000);

Before({ tags: "@playwright" }, async function () {
  this.browser = await playwright.chromium.launch({ headless: false });
  
  this.context = await this.browser.newContext({
    defaultNavigationTimeout: 30000,
    defaultTimeout: 30000
  });

  this.page = await this.context.newPage();
  console.log('Launching Playwright Chromium Browser');
});
