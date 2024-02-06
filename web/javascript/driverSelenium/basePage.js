const { By, until } = require('selenium-webdriver');

class BasePage {
    /**
     * Constructor for BasePage.
     * @param {WebDriver} driver - The Selenium WebDriver object.
     */
    constructor(driver) {
        this.driver = driver;
        this.defaultTimeout = 30000; // Default timeout in milliseconds
    }

    /**
     * Clicks on an element.
     * @param {By} locator - The Selenium By locator for the element.
     */
    async doClick(locator) {
        const element = await this.driver.wait(until.elementLocated(locator), this.defaultTimeout);
        await this.driver.wait(until.elementIsVisible(element), this.defaultTimeout);
        await element.click();
    }

    /**
     * Sends keystrokes to an element.
     * @param {By} locator - The Selenium By locator for the element.
     * @param {string} text - The text to type.
     */
    async sendKeys(locator, text) {
        const element = await this.driver.wait(until.elementLocated(locator), this.defaultTimeout);
        await element.sendKeys(text);
    }

    /**
     * Navigates to a specified URL.
     * @param {string} url - The URL to navigate to.
     */
    async navigate(url) {
        await this.driver.get(url);
    }

    /**
     * Wait for URL to contain.
     * @param {string} text - The URL to contain this text.
     */
    async waitForUrlToContain(text) {
        await this.driver.wait(until.urlContains(text), this.defaultTimeout);
    }
}

module.exports = BasePage;
