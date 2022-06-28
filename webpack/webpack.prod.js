const webpack = require('webpack')
const BundlerAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('OnlineMovieTicketBooking'),
        }),
        new BundlerAnalyzerPlugin()
    ],
}