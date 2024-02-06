module.exports = {
  default: {
    require: [
      "./test_cucumber/feature_steps/*.js", // get all step files
      "./test_cucumber/config/*.js", // get all hooks
    ],
    paths: ["./test_cucumber/feature/*.feature"],
  },
};
