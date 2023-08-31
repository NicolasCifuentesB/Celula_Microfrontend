module.exports = {
  rootDir: 'src',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    'single-spa-react/parcel': 'single-spa-react/lib/cjs/parcel.cjs',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', '../jest.setup.js'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '\\.d.ts$'],
  clearMocks: true,
  cacheDirectory: '.jest/cache',
  coverageDirectory: '../coverage',
  collectCoverageFrom: [
    '**/*.{tsx,ts}',
    '!**/index.ts',
    '!**/types.ts',
    '!**/*.d.ts',
  ],
  clearMocks: true,
  coverageReporters: ['clover', 'json', 'lcov', 'text'],
}
