// Import the BasePage class
const BasePage = require('../../driverPlaywright/basePage');

class WorkDay extends BasePage {

    constructor(page) {
        super(page);
        this.sunrunUrl = "https://careers.sunrun.com/job/california/sr-software-qa-engineer-mobile-automation/21632/54998534288"
        this.challengingDom = this.page.getByText('Challenging DOM');
    }

    async goToSunrun(){
        await this.navigate(this.sunrunUrl)
    }

    async goToApplication() {

    }

}

module.exports = WorkDay;
