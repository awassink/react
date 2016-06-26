
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        './src/index.tsx'
    ],

    output: {
        filename: "./dist/bundle.js",
    },


    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loaders: ["source-map-loader", "react-hot"] }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new CopyWebpackPlugin([
            { context: 'src', from: '**/*.*', to: './dist', ignore: ['*.tsx', '*.ts', '*.scss'] },
            { context: 'node_modules', from: 'react/dist/react.min.js', to: './dist/libs'},
            { context: 'node_modules', from: 'react-dom/dist/react-dom.min.js', to: './dist/libs'}
        ]),
        new BrowserSyncPlugin({
            port: 3000,
            server: 'dist',
            ui: false
        })
    ],
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};