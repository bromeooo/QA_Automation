const { Given, When, Then } = require("@cucumber/cucumber");
const { assert } = require("chai");
const Flex = require("../../driverPlaywright/interview/flex");

let applicationComplete;

Given("I apply to flex", async function () {
  const flex = new Flex(this.page);
  await flex.goToFlex();
  await flex.goToApplication();
});

When("I fill out the flex application", async function () {
  const flex = new Flex(this.page);
  applicationComplete = await flex.fillApplication();
});

Then("I get the job at flex", async function () {
  assert.isTrue(applicationComplete, "Application was not filled correctly");
});
