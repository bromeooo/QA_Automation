const { Given, When, Then } = require("@cucumber/cucumber");
const { assert } = require("chai");
const Tapcheck = require("../../driverPlaywright/interview/tapCheck");

let applicationComplete;

Given("I apply to tapcheck", async function () {
const tapcheck = new Tapcheck(this.page);
  await tapcheck.goToTapcheck();
  await tapcheck.goToApplication();
});

When("I fill out the tapcheck application", async function () {
const tapcheck = new Tapcheck(this.page);
  applicationComplete = await tapcheck.fillApplication();
});

Then("I get the job at tapcheck", async function () {
  assert.isTrue(applicationComplete, "Application was not filled correctly");
});
