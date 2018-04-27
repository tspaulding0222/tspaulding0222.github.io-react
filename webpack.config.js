var path = require('path');

module.exports = {
    entry: './src/main.js',
    mode: "development",
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}