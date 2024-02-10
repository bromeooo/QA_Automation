// Import the BasePage class
const BasePage = require('../../driverPlaywright/basePage');

class Sunrun extends BasePage {

    constructor(page) {
        super(page);
        this.sunrunUrl = "https://careers.sunrun.com/job/california/sr-software-qa-engineer-mobile-automation/21632/54998534288"
        this.acceptPopUp = this.page.locator('[id="system-ialert-button"]');
        this.applyNow = this.page.locator('[data-selector-name="job-apply-link"]').first();
    }

    async goToSunrun(){
        await this.navigate(this.sunrunUrl)
    }

    async goToApplication() {
        await this.dblClick(this.acceptPopUp) //click the cookies popup
        await this.dblClick(this.applyNow)
        await this.waitForUrlToContain('myworkday') // wait for workday load
    }

}

module.exports = Sunrun;
