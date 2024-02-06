// Import AfterAll from Cucumber
const { AfterAll } = require('@cucumber/cucumber');
const reporter = require('cucumber-html-reporter');
const util = require('util');
const fs = require('fs');
const setTimeoutPromise = util.promisify(setTimeout);

AfterAll(async function () {
  // Optionally, wait for a few seconds to ensure JSON file is completely written
  await setTimeoutPromise(3000); // 3 seconds delay

  // Check if the JSON report exists
  if (fs.existsSync('./testArtifacts/cucumber_report.json')) {
    // Generate HTML report
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: './testArtifacts/cucumber_report.json',
      output: './testArtifacts/cucumber_report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
    });
  } else {
    console.error('JSON report not found. Cannot generate HTML report.');
  }
});
