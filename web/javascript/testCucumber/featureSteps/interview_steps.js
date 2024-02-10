const { Given, When, Then } = require("@cucumber/cucumber");
const { assert } = require("chai");
const Sunrun = require("../../driverPlaywright/interview/sunrun");
const WorkDay = require("../../driverPlaywright/interview/workdaySunrun");

let sectionComplete;

Given("I apply to Sunrun", async function () {
  const sunrun = new Sunrun(this.page);
  await sunrun.goToSunrun();
  await sunrun.goToApplication();
});

When("I fill out the workday form", async function () {
  const workday = new WorkDay(this.page);
  await workday.applyManually();
  sectionComplete = await workday.fillMyInfo();
});

Then("I get the job", async function () {
  assert.isTrue(sectionComplete, "Application was not filled correctly");
});
