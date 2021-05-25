const path = require('path');

module.exports = {
    mode: "development",
    entry: [
        "./src/index.ts"
    ],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    performance: {
        hints: false,
        maxAssetSize: 100000,
        maxEntrypointSize: 1000000,
    },
    devtool: "source-map",
    resolve: {
        modules: ["node_modules"],
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        library: "doom",
    },
}