const webpack = require('webpack');
const ReactRefreshwebpackplugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('KISHORE'),

        }),
        new ReactRefreshwebpackplugin(),
    ],

}