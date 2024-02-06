const { By } = require('selenium-webdriver');
const BasePage = require('../driverSelenium/basePage');
const constants = require('../../../testData/constants.json');

class Home extends BasePage {

    constructor(driver) {
        super(driver);
        this.challengingDomLocator = By.linkText('Challenging DOM');
    }

    async goToHerokuHome() {
        await this.navigate(constants.baseUrl);
    }

    async goToDomChallenge() {
        await this.doClick(this.challengingDomLocator);
        await this.waitForUrlToContain('challenging_dom');
    }

}

module.exports = Home;
