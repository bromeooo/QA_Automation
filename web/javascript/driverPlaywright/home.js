// Import the BasePage class
const BasePage = require('../driverPlaywright/basePage');
const constants = require('../../../testData/constants.json');

class Home extends BasePage {

    constructor(page) {
        super(page);
        this.challengingDom = this.page.getByText('Challenging DOM');
    }

    async goToHerokuHome(){
        await this.navigate(constants.baseUrl)
    }

    async goToDomChallenge() {
        await this.doClick(this.challengingDom);
        await this.waitForUrlToContain('challenging_dom')
    }

}

module.exports = Home;
