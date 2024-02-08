const { Page } = require('playwright');

class BasePage {
    /**
     * Constructor for BasePage.
     * @param {Page} page - The Playwright page object.
     */
    constructor(page) {
        this.page = page;
        this.defaultTimeout = 30000; // Default timeout in milliseconds
    }

    /**
     * Clicks on an element.
     * @param {ElementHandle} element - The element to click.
     * @param {number} [timeout=this.defaultTimeout] - Optional timeout for waiting.
     */
    async doClick(element, timeout = this.defaultTimeout) {
        await element.waitFor({ state: "visible", timeout });
        await element.hover()
        await element.click();
    }

        /**
     * Clicks on an element.
     * @param {ElementHandle} element - The element to click.
     * @param {number} [timeout=this.defaultTimeout] - Optional timeout for waiting.
     */
        async dblClick(element, timeout = this.defaultTimeout) {
            await element.waitFor({ state: "visible", timeout });
            await element.hover()
            await element.dblclick();
        }    

    /**
     * Sends keystrokes to an element.
     * @param {ElementHandle} element - The element.
     * @param {string} text - The text to type.
     * @param {number} [timeout=this.defaultTimeout] - Optional timeout for waiting.
     */
    async sendKeys(element, text, timeout = this.defaultTimeout) {
        await element.waitFor({ state: "visible", timeout });
        await element.fill(text);
    }

    /**
     * Navigates to a specified URL.
     * @param {string} url - The URL to navigate to.
     */
    async navigate(url) {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }

     /**
     * Wait for URL to contain
     * @param {string} text - The URL to contain this text.
     */
    async waitForUrlToContain(text) {
        const regex = new RegExp(text);
        await this.page.waitForURL(regex, { waitUntil: 'domcontentloaded' });
    }    
}

module.exports = BasePage;
