const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');

const development = require('./dev.config.js');
const production = require('./prod.config.js');

require('babel-polyfill');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, '../src'),
    build: path.join(__dirname, '../dist')
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: [
        'babel-polyfill',
        PATHS.app
    ],

    output: {
        path: PATHS.build,
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.jsx', '.js', '.json', '.scss'],
        modules: ['node_modules', PATHS.app]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'es2017', 'react'],
                            plugins: [
                                'transform-class-properties',
                                'babel-plugin-transform-object-rest-spread'
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.otf$|\.wav$|\.mp3$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [
                    autoprefixer()
                ]
            }
        })
    ]
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(development, common);
}

if (TARGET === 'build' || !TARGET) {
    module.exports = merge(production, common);
}
