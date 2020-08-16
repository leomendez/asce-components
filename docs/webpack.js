// eslint-disable-next-line
const path = require('path');
const docs = path.resolve(__dirname);

// eslint-disable-next-line
const aliases = require('../aliases');

const outputConfig = {
    path: `${docs}/styleguide`,
    filename: 'build/bundle.js',
    chunkFilename: 'build/[name].js',
};
const rulesConfig = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', ['next/babel', { 'preset-env': { modules: 'commonjs' } }]],
                },
            },
        ],
    },
    resolve: {
        alias: aliases,
    },
};

module.exports = {
    webpackConfig: rulesConfig,
    dangerouslyUpdateWebpackConfig: (config) => {
        config.output = outputConfig;
        return config;
    },
};