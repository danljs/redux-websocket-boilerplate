var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

var ip = '0.0.0.0'
var iplocal = 'localhost'
var port = 9191

new WebpackDevServer(
	webpack(config), 
	{
		publicPath: config.output.publicPath,
		hot: true,
		headers: {"Access-Control-Allow-Origin": "*"},
		stats: {colors: true},
		inline: true
	}
).listen(port, ip, (err, result) => {
	if (err) {console.log(err)}
	console.log('Listening at localhost:' + port)
})
