module.exports = {
  default: {
    require: [
      "./testCucumber/featureSteps/*.js", // get all step files
      "./testCucumber/config/*.js", // get all hooks
    ],
    paths: ["./testCucumber/feature/*.feature"],
    format: ['html:./testArtifacts/cucumber_report.html'], // Generate JSON report
  },
};
