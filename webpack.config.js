const debug = process.env.NODE_ENV !== "production",
    webpack = require('webpack'),
    path = require('path');

const srcPath = path.join(__dirname, 'src');

module.exports = {
    context: srcPath,
    devtool: debug ? "inline-sourcemap" : "",
    entry: {
        app: "./js/client.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                },
            },
            { test: /\.(scss|sass)$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.html$/, loader: 'html-loader' }
        ]
    },
    node: {
        crypto: 'empty',
        net: 'empty',
        dns: 'empty'
    },
    resolve: {
        extensions: ['.json', '.js', '.scss'],
        alias: {
            joi: 'joi-browser'
        },
        modules: ['node_modules']
    },
    devServer: {
        publicPath: 'http://127.0.0.1:8083/',
        contentBase: "./src/",
        hot: true,
        inline: true,
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
    output: {
        path: srcPath,
        filename: "client.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    externals:[{
        xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    }]

};
