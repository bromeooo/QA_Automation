module.exports = {
  default: {
    require: [
      "./testCucumber/featureSteps/*.js", // get all step files
      "./testCucumber/config/*.js", // get all hooks
    ],
    paths: ["./testCucumber/feature/*.feature"],
    format: ['json:./testArtifacts/cucumber_report.json'], // Generate JSON report
  },
};
