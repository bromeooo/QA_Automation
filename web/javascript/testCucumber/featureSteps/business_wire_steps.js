const { Given, When, Then } = require("@cucumber/cucumber");
const { assert } = require("chai");
const BusinessWire = require("../../driverPlaywright/interview/businessWire");

let applicationComplete;

Given("I go to the Business Wire careers page", async function () {
  const businessWire = new BusinessWire(this.page);
  await businessWire.goToBusinessWire();
});

When("I apply to the SDET position", async function () {
  const businessWire = new BusinessWire(this.page);
  await businessWire.goToApplication();
  applicationComplete = await businessWire.fillApplication();
});

Then("I get the business wire job", async function () {
  assert.isTrue(applicationComplete, "Application was not filled correctly");
});
