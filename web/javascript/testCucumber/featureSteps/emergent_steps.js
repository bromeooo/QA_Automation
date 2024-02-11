const { Given, When, Then } = require("@cucumber/cucumber");
const Emergent = require("../../driverPlaywright/emergent/emergent");

const { assert } = require("chai");

Given("I go to the qa challenge", async function () {
  // Create a new HomePage instance and navigate to the QA challenge page
  const emergent = new Emergent(this.page);
  await emergent.goToEmergentTest();
  await emergent.goToContact();
});

When("I fill out the contact form", async function () {
  const emergent = new Emergent(this.page);
  await emergent.fillContact(this.page);
});

Then("the contact form is submitted", async function () {
  const emergent = new Emergent(this.page);
  const contactFinished = await emergent.validateContact(this.page);
  assert.isTrue(
    contactFinished,
    "The contact form should be submitted successfully"
  );
});
