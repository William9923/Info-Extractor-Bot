module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js'],
  transformIgnorePatterns: ['/node_modules/'],
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  testMatch: [
    '<rootDir>/**/__tests__/**/*.js',
    '<rootDir>/**/*.{spec,test}.js',
  ],
};
