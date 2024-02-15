// Import the BasePage class
const BasePage = require("../../driverPlaywright/basePage");
const blankpdf = "../../../../testData/Untitled document.pdf";

class BusinessWire extends BasePage {
  constructor(page) {
    super(page);
    this.BusinessWireUrl = "https://services.businesswire.com/careers";
    this.sdetJob = this.page.locator(
      '[href="https://jobs.lever.co/businesswire/bd0f4ce0-4e42-4a72-9617-e2303a1db775"]'
    ).first();
    this.applyNow = this.page.getByText("Apply for this job").first();
    this.resumeUpload = this.page.locator('[id="resume-upload-input"]');
    this.resumeNoRead = this.page.getByText("auto-read resume");
    this.Name = this.page.locator('[data-qa="name-input"]');
    this.email = this.page.locator('[data-qa="email-input"]');
    this.phone = this.page.locator('[data-qa="phone-input"]');
    this.company = this.page.locator('[data-qa="org-input"]');
    this.linked = this.page.locator('[name="urls[LinkedIn]"]');
    this.git = this.page.locator('[name="urls[GitHub]"]');
    this.additional = this.page.locator('[id="additional-information"]');
    this.gender = this.page.locator('[name="eeo[gender]"]');
    this.race = this.page.locator('[name="eeo[race]"]');
    this.veteran = this.page.locator('[name="eeo[veteran]"]');
  }

  async goToBusinessWire() {
    await this.navigate(this.BusinessWireUrl);
  }

  async goToApplication() {
    await this.dblClick(this.sdetJob); //click the cookies popup
    await this.dblClick(this.applyNow);
    await this.waitForUrlToContain("apply"); // wait application load
  }

  async fillApplication() {
    await this.resumeUpload.setInputFiles(blankpdf);
    await this.sendKeys(this.Name, "Brian Romero");
    await this.sendKeys(this.email, "notmyemail@example.com");
    await this.sendKeys(this.phone, "9998675309");
    await this.sendKeys(this.company, "Not a real Company");
    await this.sendKeys(
      this.linked,
      "https://www.linkedin.com/in/brian-romero-692837209/"
    );
    await this.sendKeys(this.git, "https://github.com/bromeooo/QA_Automation");
    await this.sendKeys(
      this.additional,
      "This automated messaged thinks that Brian Romero will be good for this position"
    );
    await this.gender.selectOption({ value: "Male" });
    await this.race.selectOption({ value: "Hispanic or Latino" });
    await this.veteran.selectOption({ value: "I am a veteran" });
    return true;
  }
}

module.exports = BusinessWire;
