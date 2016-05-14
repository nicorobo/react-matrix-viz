const webpack = require('webpack');

var TARGET = process.env.npm_lifecycle_event;

var PATHS = {
	src: __dirname + '/src',
	dist: __dirname + '/dist',
	example: __dirname + '/example',
	root: './' // Really not too necessary, huh?
}
var config = { // It's SO SIMPLE :D!
	entry: {
		'./dist/react-matrix-viz': PATHS.src + '/index', // Outputs to ./lib/matrix.js
	},
	output: {
		path: PATHS.root,
		libraryTarget: 'umd',
		filename: '[name].js' // Uses name loading
	}, 
	externals: {
		react: 'react',
		lodash: {
			root: '_',
			amd: '_',
			commonjs: 'lodash',
			commonjs2: 'lodash',
		}
	},
	module: {
		loaders: [
			{test: /\.jsx?$/, loaders: ['babel?cacheDirectory'], include: [PATHS.src, PATHS.example] }
		]
	}
}

// If using 'npm run dist', minify
if (TARGET === 'dist') {
	config.output.filename = '[name].min.js';
	config.plugins = [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	];
}

// If using 'npm run dist', minify
if (TARGET === 'dev:example') {
	delete config.entry['./dist/react-matrix-viz'];
	config.entry['./example/bundle'] = PATHS.example + '/src/App';
	config.output.filename = '[name].js';
	delete config.externals;
}


module.exports = config;