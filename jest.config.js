module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testEnvironment: 'jest-environment-jsdom-global',
  transformIgnorePatterns: [
    '/node_modules/(?!(lodash|debug)).+\\.js$' // transpile imported es6 modules
  ],
  coverageDirectory: './coverage/',
  globals: {},
  setupFilesAfterEnv: [
    '<rootDir>/test-setup.js'
  ]
}
