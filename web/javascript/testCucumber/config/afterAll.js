const { AfterAll } = require('@cucumber/cucumber');
const reporter = require('cucumber-html-reporter');
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);

AfterAll(async function () {
  // Wait for a few seconds to ensure JSON file is completely written
  await setTimeoutPromise(3000); // 3 seconds delay

  // Generate HTML report
  reporter.generate({
    theme: 'bootstrap',
    jsonFile: './testArtifacts/report.json',
    output: './testArtifacts/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
  });
});
