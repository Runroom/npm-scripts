module.exports = {
  verbose: false,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/cypress'],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@@/(?!node_modules)(.*)$': '<rootDir>/$1',
    '^@@/node_modules(.*)$': '<rootDir>/node_modules/$1'
  },
  moduleDirectories: ['node_modules', '<rootDir>/src', '<rootDir>/test'],
  setupFilesAfterEnv: ['@runroom/npm-scripts/jest/jest.setup.js'],
  resetMocks: true
};
