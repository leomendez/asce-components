// eslint-disable-next-line
const path = require('path');
const docs = path.resolve(__dirname);

const outputConfig = {
    path: `${docs}/styleguide`,
    filename: 'build/bundle.js',
    chunkFilename: 'build/[name].js',
};
const rulesConfig = {
    module: {
        rules: [
            {
                test: /\.([jt])sx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/preset-react', 
                        ['next/babel', { 'preset-env': { modules: 'commonjs' } }],
                        '@babel/preset-typescript',
                    ],
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: { react: path.resolve('../node_modules/react') },
    },
};

module.exports = {
    webpackConfig: rulesConfig,
    dangerouslyUpdateWebpackConfig: (config) => {
        config.output = outputConfig;
        return config;
    },
};