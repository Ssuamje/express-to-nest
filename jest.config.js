module.exports = {
    preset: 'ts-jest',
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