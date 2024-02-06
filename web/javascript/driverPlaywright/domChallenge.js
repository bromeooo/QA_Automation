// Import the BasePage class
const BasePage = require("./BasePage");

class DomChallenge extends BasePage {
  constructor(page) {
    super(page);
    this.greenSuccessButton = this.page.locator('[class="button success"]');
    this.firstEditButton = this.page
      .getByText("Phaedrum0")
      .locator("..")
      .getByText("edit");
  }

  // answer is not part of the DOM. Answer: is hardcoded in javascript
  // answer will be scraped since there isn't a valid locator
  async getAnswerValue() {
    const scriptContent = await this.page.evaluate(() => {
      const scripts = Array.from(document.getElementsByTagName("script"));
      const targetScript = scripts.find((s) =>
        s.textContent.includes("Answer:")
      );
      return targetScript ? targetScript.textContent : "";
    });
    // Extract the answer using a regular expression
    const match = scriptContent.match(/Answer:\s*(\d+)/);
    const answer = match ? match[1] : "Answer not found";
    return answer;
  }

  async pressSuccessButton() {
    await this.doClick(this.greenSuccessButton);
  }

  async pressAndValidateFirstEdit() {
    await this.doClick(this.firstEditButton);
    await this.waitForUrlToContain("edit");
    const url = await this.page.url();
    return url;
  }
}

module.exports = DomChallenge;
