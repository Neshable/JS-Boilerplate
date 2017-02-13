var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: './bundle.js'
    },
    // Watch for changes and auto run webpack
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("css-loader")
                // Use the line below if you want to use inline css in bundle.js
                // loader: 'style-loader!css-loader'
            }
        ],
    },
    plugins: [
    new ExtractTextPlugin("./css/style.css")
    ]
};
