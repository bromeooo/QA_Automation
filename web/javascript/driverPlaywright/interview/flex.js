// Import the BasePage class
const BasePage = require("../basePage");

class Flex extends BasePage {
  constructor(page) {
    super(page);
    this.FlexUrl = "https://job-boards.greenhouse.io/flex/jobs/4490774005";
    this.applyNow = this.page
      .locator('[class="job__header"]')
      .getByText("Apply")
      .first();
    this.firstName = this.page.locator('[id="first_name"]');
    this.lastName = this.page.locator('[id="last_name"]');
    this.email = this.page.locator('[id="email"]');
    this.phone = this.page.locator('[id="phone"]');
    this.resume = this.page.locator('[data-testid="resume-text"]');
    this.manualResumeBox = this.page
      .locator('[class="text-input-wrapper"]')
      .locator('[id="resume_text"]');
    this.linked = this.page.locator('[aria-label="LinkedIn Profile"]');
    this.country = this.page.locator(
      '[aria-label="Where are you currently based? (City, Country)"]'
    );
  }

  async goToFlex() {
    await this.navigate(this.FlexUrl);
  }

  async goToApplication() {
    await this.dblClick(this.applyNow);
  }

  async fillApplication() {
    await this.sendKeys(this.firstName, "Brian");
    await this.sendKeys(this.lastName, "Romero");
    await this.sendKeys(this.email, "fake@example.com");
    await this.sendKeys(this.phone, "111111111111");
    await this.doClick(this.resume);
    await this.sendKeys(this.manualResumeBox, "This is my resume for flex");
    await this.sendKeys(
      this.linked,
      "https://www.linkedin.com/in/brian-romero-692837209/"
    );
    await this.sendKeys(
      this.country,
      "United States"
    );
    return true;
  }
}

module.exports = Flex;
