const path = require('path');

module.exports = {
  name: 'react-custom',
  mode: 'development',
  devtool: 'eval', // hidden-source-map
  resolve: {
      extensions: ['.js', '.jsx'],
  },

  entry: {
      app:  ['./client'],
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      options: {
        presets: [ //preset 은 plugin 모음?
          ['@babel/preset-env', {
            targets: {
              browsers: ['last 2 chrome versions'], 
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
      },
    }],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  }
};