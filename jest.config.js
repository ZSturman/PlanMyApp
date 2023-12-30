module.exports = {
    testEnvironment: "jsdom",
    globals: {
        'ts-jest': {
          tsconfig: 'tsconfig.jest.json'  // pointing to your tsconfig for Jest
        }
      },
      transform: {
        '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files with ts-jest
      },
    moduleNameMapper: {
        ".(css|scss)$": "identity-obj-proxy"
    }
}