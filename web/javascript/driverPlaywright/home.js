// Import the BasePage class
const BasePage = require('./BasePage');
const constants = require('../../../testData/constants.json');

class Home extends BasePage {

    constructor(page) {
        super(page);
        this.challengingDom = this.page.getByText('Challenging DOM');
    }

    async goToHerokuHome(){
        await this.navigate(constants.baseUrl)
    }

    async goToDOMChallenge() {
        await this.doClick(this.challengingDom);
    }

}

module.exports = Home;
