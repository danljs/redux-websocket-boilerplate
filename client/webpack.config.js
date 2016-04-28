var webpack = require('webpack')
var path = require('path')

var definePlugin = new webpack.DefinePlugin({__HOT__: 'true'})

module.exports = {
    module: {loaders: []},
    plugins: [definePlugin],
    resolve:{extensions :['', '.js', '.jsx']}
}

module.exports.devtool = 'eval'
module.exports.entry = [
    'webpack-dev-server/client?http://localhost:9191', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/app.js'
]

module.exports.module.loaders.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['react-hot', 'babel-loader?stage=0&optional=runtime&cacheDirectory'],
    include: path.join(__dirname, 'src') 
})

module.exports.output = {
    path: path.resolve("./build/js"),
    filename: 'app.js',
    publicPath: '/build/js/'
}

module.exports.plugins.push(new webpack.HotModuleReplacementPlugin())
