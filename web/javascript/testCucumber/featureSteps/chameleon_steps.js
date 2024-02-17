const { Given, When, Then } = require("@cucumber/cucumber");
const { assert } = require("chai");
const Chameleon = require("../../driverPlaywright/interview/chameleon");

let sectionComplete;

Given("I apply to Chameleon", async function () {
  const chameleon = new Chameleon(this.page);
  await chameleon.goToChameleon();
  await chameleon.goToApplication();
});

When("I fill the application to Chameleon", async function () {
  const chameleon = new Chameleon(this.page);
  await chameleon.fillApplication();
  sectionComplete = await Chameleon.fillMyInfo();

});

Then("I get the job at Chameleon", async function () {
  assert.isTrue(sectionComplete, "Application was not filled correctly");
});
