module.exports = {
  preset: 'ts-jest',
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/components'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/components/__test__/config/importJestDOM.ts'],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['jest-emotion'],
};
