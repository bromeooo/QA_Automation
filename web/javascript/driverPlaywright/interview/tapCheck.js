// Import the BasePage class
const BasePage = require("../basePage");
const blankpdf = "../../../../testData/Untitled document.pdf";

class Tapcheck extends BasePage {
  constructor(page) {
    super(page);
    this.tapcheckUrl = "https://apply.workable.com/tapcheck/j/603E395632/";
    this.applyNow = this.page.locator('[data-ui="apply-button"]');
    this.firstName = this.page.locator('[id="firstname"]');
    this.lastName = this.page.locator('[id="lastname"]');
    this.email = this.page.locator('[id="email"]');
    this.phone = this.page.locator('[name="phone"]');
    this.resume = this.page.locator('[data-role="dropzone"]').locator("[for*='input_files_input']").last();
    this.salary = this.page.locator('[id="CA_22250"]');
    this.legal = this.page.locator('[data-ui="QA_7493844"]').locator('[value="true"]');
    this.sponsor = this.page.locator('[data-ui="QA_7493845"]').locator('[value="false"]');
    this.citizen = this.page.locator('[data-ui="QA_7493846"]').locator('[value="true"]');
    this.loadTest = this.page
      .locator('[data-ui="QA_7493861"]')
      .locator('[value="true"]');
    this.apiTest = this.page.locator('[data-ui="QA_7493861"]').locator('[value="true"]');
  }

  async goToTapcheck() {
    await this.navigate(this.tapcheckUrl);
  }

  async goToApplication() {
    await this.dblClick(this.applyNow);
    await this.waitForUrlToContain("apply"); // wait for workday load
  }

  async fillApplication() {
    await this.sendKeys(this.firstName, "Brian");
    await this.sendKeys(this.lastName, "Romero");
    await this.sendKeys(this.email, "notrealemail@example.com");
    await this.sendKeys(this.phone, "999-999-9999");
    await this.resume.setInputFiles(blankpdf);
    await this.sendKeys(this.salary, "$99999999999999999");
    await this.doClick(this.legal);
    await this.doClick(this.citizen);
    await this.doClick(this.sponsor);
    await this.doClick(this.loadTest);
    await this.doClick(this.apiTest);
    return true;
  }
}

module.exports = Tapcheck;
