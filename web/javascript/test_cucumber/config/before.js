const { Before } = require('@cucumber/cucumber');
const playwright = require('playwright');

Before(async function () {
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  this.page = await context.newPage();
  console.log('Launching Chromium browser');


