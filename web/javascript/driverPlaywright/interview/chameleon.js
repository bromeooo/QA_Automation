// Import the BasePage class
const BasePage = require("../basePage");
const blankpdf = "../../../../testData/Untitled document.pdf";

class Chameleon extends BasePage {
  constructor(page) {
    super(page);
    this.ChameleonUrl =
      "https://boards.greenhouse.io/chameleonconsultinggroup/jobs/4078673007";
    this.applyNow = this.page.locator('[id="apply_button"]').first();
    this.firstName = this.page.locator('[id="first_name"]');
    this.lastName = this.page.locator('[id="email"]');
    this.phone = this.page.locator('[id="phone"]');
    this.resume = this.page
      .locator('[id="resume_chose"]')
      .locator('[name="button"]');
    this.mail = this.page.locator('[id="job_application_answers_attributes_0_text_value"]');
    this.linked = this.page.locator('[id="job_application_answers_attributes_1_text_value"]')
    this.citizen = this.page.locator('[id="select2-results"]');
    this.citizenYes = this.citizen.getByText("Yes");
  }

  async goToChameleon() {
    await this.navigate(this.ChameleonUrl);
  }

  async goToApplication() {
    await this.dblClick(this.applyNow);
    await this.waitForUrlToContain("#app"); // wait for workday load
  }

  async fillApplication() {
    await this.doClick(this.applyNow);
    await this.doClick(this.firstName)
    await this.doClick(this.ChameleonUrl)
    await this.resume.setInputFiles(blankpdf);
  }
}

module.exports = Chameleon;
