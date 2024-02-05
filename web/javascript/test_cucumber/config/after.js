{ after } = require('@cucumber/cucumber');

const { after } = require('@cucumber/cucumber');

after(async () => {
  if (browser) {
    await browser.close();
  }
});
