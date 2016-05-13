var PATHS = {
	src: __dirname + '/src',
	lib: __dirname + '/lib',
	example: __dirname + '/example',
	root: './' // Really not too necessary, huh?
}
var TARGET = process.env.npm_lifecycle_event;

var config = { // It's SO SIMPLE :D!
	entry: {
		'./lib/lib': PATHS.src + '/index', // Outputs to ./lib/matrix.js
	},
	output: {
		path: PATHS.root,
		libraryTarget: 'umd',
		filename: '[name].js' // Uses name loading
	}, 
	module: {
		loaders: [
			{test: /\.jsx?$/, loaders: ['babel?cacheDirectory'], include: [PATHS.src, PATHS.example] }
		]
	}
}

// If using 'npm run build:example', build the example app along with the component
if (TARGET === 'build:example') {
	config.entry['./example/bundle'] = PATHS.example + '/src/App';
}

module.exports = config;