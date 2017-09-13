module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
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
			    loader: 'style-loader!css-loader'
			},
			{
			    test: /\.scss$/,
			    exclude: /node_modules/,
			    loader: 'style-loader!css-loader!sass-loader'
			}
        ],
    }
};