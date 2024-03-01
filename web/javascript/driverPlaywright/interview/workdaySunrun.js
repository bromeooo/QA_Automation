// Import the BasePage class
const BasePage = require("../../driverPlaywright/basePage");

class WorkDay extends BasePage {
  constructor(page) {
    super(page);
    this.applyManual = this.page.locator(
      '[data-automation-id="applyManually"]'
    );
    this.hearAboutUs = this.page.getByLabel("How Did You Hear About Us?*");
    this.selectCareerWeb = this.page.getByText("Careers Website");
    this.selectCareerRadio = this.page
      .locator('[data-automation-id="promptLeafNode"]')
      .locator('[data-automation-id="radioBtn"]');
    this.notPrevWorker = this.page.getByLabel("No");
    this.no = this.page
      .locator('[data-automation-id="previousWorker"]')
      .getByText('No')
      .locator("..")
      .locator('[data-uxi-widget-type="radio"]');

    // name section
    this.firstName = this.page.locator(
      '[data-automation-id="legalNameSection_firstName"]'
    );
    this.middleName = this.page.locator(
      '[data-automation-id="legalNameSection_middleName"]'
    );
    this.lastName = this.page.locator(
      '[data-automation-id="legalNameSection_lastName"]'
    );

    // address section
    this.address = this.page.locator(
      '[data-automation-id="addressSection_addressLine1"]'
    );
    this.city = this.page.locator('[data-automation-id="addressSection_city"]');
    this.state = this.page.locator(
      '[data-automation-id="addressSection_countryRegion"]'
    );
    this.arizona = this.page.getByText("Arizona");
    this.zip = this.page.locator(
      '[data-automation-id="addressSection_postalCode"]'
    );

    // email
    this.email = this.page.locator(
      '[data-automation-id="email"]'
    );

    // phone
    this.phoneType = this.page.locator(
      '[data-automation-id="phone-device-type"]'
    );
    this.mobile = this.page
      .locator('[data-uxi-widget-type="popup"]')
      .getByText("Mobile");
    this.phoneNumber = this.page.locator('[data-automation-id="phone-number"]');

    // go to next
    this.next = this.page.locator(
      '[data-automation-id="bottom-navigation-next-button"]'
    );
    this.workExperience = this.page.locator(
        '[data-automation-id="workExperienceSection"]'
      );
  }

  async applyManually() {
    await this.doClick(this.applyManual);
  }

  async fillMyInfo() {
    // hear about
    await this.doClick(this.hearAboutUs);
    await this.doClick(this.selectCareerWeb);
    await this.doClick(this.selectCareerRadio);
    // prev work
    await this.doClick(this.notPrevWorker);
    await this.doClick(this.no);
    // name
    await this.sendKeys(this.firstName, "Brian");
    await this.sendKeys(this.middleName, "Thomas");
    await this.sendKeys(this.lastName, "Romero");
    // address
    await this.sendKeys(this.address, "999 Not Real Street");
    await this.sendKeys(this.city, "Phoenix");
    await this.doClick(this.state);
    await this.doClick(this.arizona);
    await this.sendKeys(this.zip, "85225");
    // email
    await this.sendKeys(this.email, "not.an.email@example.com");
    // phone
    await this.doClick(this.phoneType);
    await this.doClick(this.mobile);
    await this.sendKeys(this.phoneNumber, "8562309432");

    // go to next
    await this.doClick(this.next);

    // assert next page loaded "Work Experience"
    await this.workExperience.waitFor({ state: "visible" });
    const sectionText = await this.workExperience.textContent();
    if (sectionText.toLowerCase().includes("work experience")) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = WorkDay;
