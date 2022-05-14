# Package / UI

## Set up

### Jest

#### Install modules

```shell
# react version 이면, @testing-library/react 12.1.5

yarn add --dev \
  ts-node @types/node \
  jest jest-environment-jsdom ts-jest @types/jest \
  @testing-library/react@^12.1.5 @testing-library/jest-dom
```

#### Create jest.setup.ts file

```ts
import '@testing-library/jest-dom';
```

#### Create jest.config.ts file

```ts
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: "jsdom",
};

export default config;
```
