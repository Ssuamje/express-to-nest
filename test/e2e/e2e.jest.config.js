const baseConfig = require("../../jest.config");

module.exports = {
  preset: "ts-jest",
  displayName: "E2E Test",
  rootDir: "./../../",
  testMatch: ["**/test/e2e/*.test.ts"],
  globalSetup: "./test/globalSetup.ts",
};
