// Import the BasePage class
const BasePage = require("../../driverPlaywright/basePage");

class Emergent extends BasePage {
  constructor(page) {
    super(page);
    this.emergentHome = "https://excellentscales.emergentsoftware.io/";
    this.contactUsLink = this.page.locator('a[href="/contact-us/#"]');

    //contact form
    this.firstName = this.page.locator('[id="FirstName"]')
    this.lastName = this.page.locator('[id="LastName"]')
    this.company = this.page.locator('[id="Company"]')
    this.city = this.page.locator('[id="City"]')
    this.zip = this.page.locator('[id="PostalCode"]')
    this.phone = this.page.locator('[id="Phone"]')
    this.email = this.page.locator('[id="Email"]')
    this.message = this.page.locator('[id="Message"]')
    this.agree = this.page.locator('[id="AgreeToTerms"]') // click box
    this.submit = this.page.locator('[id="contact-form-submit"]')
    this.validate = this.page.getByText("contact form has been submitted")
  }

  async goToEmergentTest() {
    await this.navigate(this.emergentHome);
  }

  async goToContact() {
    await this.doClick(this.contactUsLink);
    await this.waitForUrlToContain("contact-us");
  }

  async fillContact() {
    // Hardcoded test data
    const testData = {
      firstName: 'John',
      lastName: 'Doe',
      company: 'Acme Inc.',
      city: 'Metropolis',
      zip: '12345',
      phone: '123-456-7890',
      email: 'johndoe@example.com',
      message: 'This is a test message for the contact form.',
      agreeToTerms: true // Set this to false if you do not want to click the 'Agree to Terms' checkbox
    };
  
    await this.sendKeys(this.firstName, testData.firstName);
    await this.sendKeys(this.lastName, testData.lastName);
    await this.sendKeys(this.company, testData.company);
    await this.sendKeys(this.city, testData.city);
    await this.sendKeys(this.zip, testData.zip);
    await this.sendKeys(this.phone, testData.phone);
    await this.sendKeys(this.email, testData.email);
    await this.sendKeys(this.message, testData.message);
  
    if (testData.agreeToTerms) {
      await this.doClick(this.agree); // Click on the agree checkbox
    }
  
    await this.doClick(this.submit); // Submit the form
  }

  async validateContact(){
    await this.validate.waitFor({state: "visible"})
    return true
  }
}

module.exports = Emergent;
