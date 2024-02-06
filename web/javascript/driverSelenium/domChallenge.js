const { By, until } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class DomChallenge extends BasePage {
  constructor(driver) {
    super(driver);
    this.greenSuccessButtonLocator = By.css('[class="button success"]');
    this.firstEditButtonLocator = By.xpath("//td[contains(text(),'Phaedrum0')]/following-sibling::td/a[contains(text(),'edit')]");
  }

  async getAnswerValue() {
    const scriptContent = await this.driver.executeScript(() => {
      const scripts = Array.from(document.getElementsByTagName("script"));
      const targetScript = scripts.find(s => s.textContent.includes("Answer:"));
      return targetScript ? targetScript.textContent : "";
    });

    const match = scriptContent.match(/Answer:\s*(\d+)/);
    const answer = match ? match[1] : "Answer not found";
    return answer;
  }

  async pressSuccessButton() {
    await this.doClick(this.greenSuccessButtonLocator);
  }

  async pressAndValidateFirstEdit() {
    await this.doClick(this.firstEditButtonLocator);
    await this.waitForUrlToContain("edit");
    const url = await this.driver.getCurrentUrl();
    return url;
  }
}

module.exports = DomChallenge;
