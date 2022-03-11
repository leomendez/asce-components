module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: ['**/test/**/*.(ts|tsx)'],
    testPathIgnorePatterns: ['./.next', './node_modules/'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json',
            isolateModules: true
        }
    },
    testEnvironment: "jsdom"
};