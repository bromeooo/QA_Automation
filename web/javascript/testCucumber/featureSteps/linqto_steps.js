const { Given, When, Then } = require("@cucumber/cucumber");
const { assert } = require("chai");
const Linqto = require("../../driverPlaywright/interview/Linqto");

let applicationComplete;

Given("I apply to linqto", async function () {
  const linqto = new Linqto(this.page);
  await linqto.goToLinqto();
  await linqto.goToApplication();
});

When("I fill out the linqto application", async function () {
  const linqto = new Linqto(this.page);
  applicationComplete = await linqto.fillApplication();
});

Then("I get the job at linqto", async function () {
  assert.isTrue(applicationComplete, "Application was not filled correctly");
});
