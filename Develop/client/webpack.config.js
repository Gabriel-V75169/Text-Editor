const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    new WebpackPwaManifest({
      short_name: 'JATE',
      description: 'Text-Editor',
      background_color: '#ffffff',
      theme_color: '#000000',
      start_url: '/',
      publicPath: '/',
      icons: [
        {
          src: path.resolve('src/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ]
    }),

    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),

    new InjectManifest({
      swSrc: './src-sw.js',
      swDest: 'src-sw.js',
    }),
    
    ],

    module: {
      rules: [
        {
        test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        }
      ],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
        }
    }]}
  };
};
