const { NxWebpackPlugin } = require('@nx/webpack');
const { NxReactWebpackPlugin } = require('@nx/react');
const path = require('path');
const appDirectory = path.resolve(__dirname, '../../');

module.exports = {
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        // Add every directory that needs to be compiled by Babel during the build.
        include: [
          path.resolve(appDirectory, 'node_modules/react-native-progress'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              [
                'module:@react-native/babel-preset',
                { useTransformReactJSX: true },
              ],
              'nativewind/babel',
            ],
            // Re-write paths to import only the modules needed by the app
            plugins: ['react-native-web'],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js'],
  },
  devServer: {
    port: 4200,
  },
  plugins: [
    new NxWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/main-web.tsx',
      index: './src/index.html',
      outputPath: 'dist/apps/board-game-app',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: [],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
  ],
};
