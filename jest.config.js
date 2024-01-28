module.exports = {
  preset: "ts-jest",
  testTimeout: 30000,
  projects: ["test/e2e/e2e.jest.config.js"],
  testEnvironment: "node",
  testMatch: ["**/test/**/*.test.ts"],
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
};
