const webpack = require('webpack')
const BundlerAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('OnlineMovieTicketBooking'),
            'process.env.REACT_APP_API_KEY': JSON.stringify('c8d4e77636ece987a6ca6429a2faed35')
        }),
        new BundlerAnalyzerPlugin()
    ],
}