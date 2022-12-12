const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle[hash].js",
        chunkFilename: "[id].js",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Assets: path.resolve(__dirname, 'src/assets/'),
            Components: path.resolve(__dirname, 'src/components/'),
            Constants: path.resolve(__dirname, 'src/constants/'),
            Store: path.resolve(__dirname, 'src/store/'),
        },
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html',
            filename: "index.html",
            inject: 'body',
        })
    ]
}
