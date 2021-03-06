var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './js/main.js',
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
                test: /\.scss$/,
                exclude: /node_modules/,
                // url=false to avoid errors due to image urls in the css
                loader: ExtractTextPlugin.extract("css-loader?url=false!sass-loader")
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("css-loader?url=false")
                // Use the line below if you want to use inline the css in bundle.js
                // loader: 'style-loader!css-loader'
            }
        ],
    },
    plugins: [
    new ExtractTextPlugin("./css/main.css")
    ]
};
