const baseConfig = require("../../jest.config");

module.exports = {
  preset: "ts-jest",
  displayName: { name: "E2E Test", color: "cyan" },
  rootDir: "./../../",
  testMatch: ["**/test/e2e/*.test.ts"],
  globalSetup: "./test/globalSetup.ts",
};
