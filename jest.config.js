module.exports = {
    preset: 'ts-jest',
    testTimeout: 30000,
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.test.ts'],
    "roots": [
        "<rootDir>"
      ],
      "modulePaths": [
        "<rootDir>"
      ],
    "moduleDirectories": [
        "node_modules",
        "src"
    ],
}