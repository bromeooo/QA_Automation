const { Given, When, Then } = require('@cucumber/cucumber');
const Home = require('../../driverselenium/home');
const DomChallenge = require('../../driverselenium/domChallenge');
const { assert } = require('chai');

let challengeTextInit;
let finalUrl;

Given('the user goes to Challenging DOM with selenium', async function () {
  const home = new Home(this.driver); // Use Selenium WebDriver instance
  await home.goToHerokuHome();
  await home.goToDomChallenge();
});

When('the user clicks the success button and the first edit with selenium', async function () {
  const domChallenge = new DomChallenge(this.driver); // Use Selenium WebDriver instance
  challengeTextInit = await domChallenge.getAnswerValue();
  await domChallenge.pressSuccessButton();
  finalUrl = await domChallenge.pressAndValidateFirstEdit();
});

Then('the user performed the actions correctly with selenium', async function () {
  const domChallenge = new DomChallenge(this.driver); // Use Selenium WebDriver instance
  const challengeTextFinal = await domChallenge.getAnswerValue();

  // Assertion to check that the initial and final challenge texts are different
  assert.notStrictEqual(challengeTextInit, challengeTextFinal, 'The challenge text should change after the actions');

  // Assertion to check that the final URL contains "edit"
  assert.include(finalUrl, 'edit', 'The final URL should contain "edit"');
});
