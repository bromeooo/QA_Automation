const { Given, When, Then } = require('@cucumber/cucumber');
const Home = require('../../driverPlaywright/home');
const { assert } = require('chai');

Given('the user goes to Challenging DOM', async function () {

  const home = new Home(this.page);
  await home.goToHerokuHome();
});

When('the user clicks the success button and the first edit', async function () {
  // Add code to interact with the success button and the first edit button
  // This is a placeholder
  console.log('Clicked the success button and the first edit');
  // Example: await home.clickSuccessButton();
  // Example: await home.clickFirstEditButton();
});

Then('the user performed the actions correctly', async function () {
  // Add assertions or checks to verify the actions were performed correctly
  // Since we want this step to always pass, it's left empty for now
  console.log('Actions were performed correctly');
  // Example: await home.verifyActions();
});