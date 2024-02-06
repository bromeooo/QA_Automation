const { After } = require('@cucumber/cucumber');

After(async function (scenario) {
  if (this.context) {
    const scenarioName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_'); // Sanitize scenario name to use in directory name
    await this.context.tracing.stop({ path: `./testArtifacts/trace/${scenarioName}` });
  }
  if (this.browser) {
    await this.browser.close();
  }
});
