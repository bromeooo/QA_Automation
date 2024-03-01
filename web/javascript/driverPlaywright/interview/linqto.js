// Import the BasePage class
const BasePage = require("../basePage");
const blankpdf = "../../../../testData/Untitled document.pdf";

class Linqto extends BasePage {
  constructor(page) {
    super(page);
    this.linqtokUrl = "https://recruiting.paylocity.com/recruiting/jobs/Details/2266205/LINQTO-INC/Software-Developer-Engineer-in-Test-SDET";
    this.applyNow = this.page.locator('[data-automation-id="btnPublicApply"]');
    this.firstName = this.page.locator('[data-automation-id="infoFirstName"]');
    this.lastName = this.page.locator('[data-automation-id="infoLastName"]');
    this.email = this.page.locator('[data-automation-id="infoEmail"]');
    this.phone = this.page.locator('[data-automation-id="infoCellPhone"]');
    this.workBefore = this.page.locator('[class="rw-input"]');
    this.workNo =  this.page.locator('[class="rw-popup-container"]').getByText("No");
    this.street = this.page.locator('[data-automation-id="public-site-address-address-1"]');
    this.city = this.page.locator('[data-automation-id="public-site-address-city"]');
    this.county = this.page.locator('[data-automation-id="public-site-address-county"]');
    this.state = this.page.locator('[id="public-site-address-us-state"]');
    this.zip = this.page.locator('[data-automation-id="public-site-address-zip"]');
    this.start = this.page.locator('[id="info.dateAvailableToStart-button"]');
    this.date = this.page.getByRole('button', { name: '2', exact: true }).first()
    this.salary = this.page.locator('[data-automation-id="infoDesiredSalaryDescription"]');
    this.hearAbout = this.page.locator('[id="howDidYouHearAboutUs-1"]').locator('[type="radio"]');
    this.apiTest = this.page.locator('[data-ui="QA_7493861"]').locator('[value="true"]');
  }

  async goToLinqto() {
    await this.navigate(this.linqtokUrl);
  }

  async goToApplication() {
    await this.dblClick(this.applyNow);
    await this.waitForUrlToContain("Apply"); // wait for workday load
  }

  async fillApplication() {
    await this.sendKeys(this.firstName, "Brian");
    await this.sendKeys(this.lastName, "Romero");
    await this.sendKeys(this.email, "notrealemail@example.com");
    await this.sendKeys(this.phone, "999-999-9999");
    await this.doClick(this.workBefore);
    await this.doClick(this.workNo);
    await this.sendKeys(this.street, "999 not real street")
    await this.sendKeys(this.city, "Chandler")
    await this.sendKeys(this.county, "Maricopa");
    await this.sendKeys(this.state, "AZ")
    
    await this.sendKeys(this.zip, "85225");
    await this.doClick(this.start);
    await this.doClick(this.date);
    await this.doType(this.salary, "$99999999999999999");
    await this.doClick(this.hearAbout)
    return true;
  }
}

module.exports = Linqto;
