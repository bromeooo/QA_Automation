// Import the BasePage class
const BasePage = require('./BasePage');
const constants = require('../../../testData/constants.json');

class Home extends BasePage {

    constructor(page) {
        super(page);
        // Define selectors or elements specific to the Home page
        this.challengingDom = this.page.getByText('Challenging DOM');
    }

    async goToHerokuHome(){
        await this.navigate(constants.baseUrl)
    }


    async performSomeUniqueAction() {
        const element = await this.page.$(this.someUniqueElementSelector);
        await this.doClick(element);
        // Other actions can be added here
    }

}

module.exports = Home;
