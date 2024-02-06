const { Given, When, Then } = require('@cucumber/cucumber');
const Home = require('../../driverPlaywright/home');
const DomChallenge = require('../../driverPlaywright/domChallenge');
const { assert } = require('chai');

let challengeTextInit;
let finalUrl;

Given('the user goes to Challenging DOM with playwright', async function () {
  const home = new Home(this.page);
  await home.goToHerokuHome();
  await home.goToDomChallenge();
});

When('the user clicks the success button and the first edit with playwright', async function () {
  const domChallenge = new DomChallenge(this.page);
  challengeTextInit = await domChallenge.getAnswerValue();
  await domChallenge.pressSuccessButton(); // Ensure this is awaited and called as a function
  finalUrl = await domChallenge.pressAndValidateFirstEdit();
});

Then('the user performed the actions correctly with playwright', async function () {
  const domChallenge = new DomChallenge(this.page);
  const challengeTextFinal = await domChallenge.getAnswerValue(); // Ensure this is awaited

  // Assertion to check that the initial and final challenge texts are different
  assert.notStrictEqual(challengeTextInit, challengeTextFinal, 'The challenge text should change after the actions');

  // Assertion to check that the final URL contains "edit"
  assert.include(finalUrl, 'edit', 'The final URL should contain "edit"');
});
