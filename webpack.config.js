const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputDir = './dist';
const cssOutput = 'app.css';
// const extractCSS = new ExtractTextPlugin('styles.min.css');


module.exports =  (env) => {
    return [ {
        entry: path.resolve(__dirname, 'src', 'index.jsx'),
        output: {
            path: path.join(__dirname, outputDir),
            filename: '[name].js',
            publicPath: '/dist/'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: {
                        loader: "babel-loader", 
                        options: { presets: ["env", "react"] }
                    }
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: ['css-loader'],
                        fallback: 'style-loader'
                    })
                },
                {
                    test: /\.scss/,
                    use: ExtractTextPlugin.extract({
                            use: ['css-loader', 'sass-loader'],
                            fallback: 'style-loader'
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin(cssOutput)
        ],
        devServer: {
            contentBase: './',
            watchContentBase: true,
            open: "Google Chrome",
            // hot: true
            // publicPath: './'
            // index: 'index.html'
            // publicPath: path.join(__dirname,'dist'),
            // publicPath: path.join(__dirname,'index.html')
            // openPage: '../index.html'
            // contentBase: [path.join(__dirname, 'src'), './index.html']//, path.join(__dirname, 'index.h')]
    

}}];
};