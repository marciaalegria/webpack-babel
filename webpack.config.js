
const path = require('path');

module.export ={
    entry: '.src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test:/\.js$/, exclude: /node_module/, loader: "babel-loader"}
        ]
    }
};