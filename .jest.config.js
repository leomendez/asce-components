module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testmatch: ['**/test/**/*.(ts|tsx)'],
    testPathIgnorePattern: ['./.next', './node_modules/'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json'
        }
    }
};