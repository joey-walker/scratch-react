const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const YarnAddWebpackPlugin = require('yarn-add-webpack-plugin');
const SRC_DIR = path.resolve(__dirname, 'src');


module.exports = {
    entry: {
        app: SRC_DIR + '/index.jsx'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new YarnAddWebpackPlugin({
            dev: false
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: SRC_DIR,
            loader: 'babel-loader'
        }]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};