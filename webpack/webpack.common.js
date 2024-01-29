// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyPlugin = require('copy-webpack-plugin');
// const { AngularCompilerPlugin } = require('@ngtools/webpack');

// module.exports = {
//   // entry: path.resolve(__dirname, '..', './src/index.tsx'),
//   entryModule: path.resolve(__dirname, '..', './src/App.module#AppModule'),


//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|js)x?$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: 'babel-loader',
//           },
//         ],
//       },
//       {
//         test: /\.ts$/,
//         loader: '@ngtools/webpack'
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
//         type: 'asset/inline',
//       },
//     ],
//   },
//   output: {
//     path: path.resolve(__dirname, '..', './build'),
//     filename: 'bundle.js',
//   },

//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, '..', './src/index.html'),

//     }),
//     new CopyPlugin({
//       patterns: [{
//         from: 'source',
//         to: 'dest',
//       }],
//     }),
//     new AngularCompilerPlugin({
//       tsConfigPath: path.resolve(__dirname, '..', 'tsconfig.json'),
//       entryModule: path.resolve(__dirname, '..', './src/App.module#AppModule')
//     })

//   ],


//   //   stats: 'errors-only',
// }




const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

module.exports = {
  entry: {
    react: path.resolve(__dirname, '..', './src/index.tsx'),
    angular: path.resolve(__dirname, '..', './src/angular/main.ts'), // Adjust the Angular entry point
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      // React configuration
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // Angular configuration
      {
        test: /\.ts$/,
        use: '@ngtools/webpack',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: '[name].bundle.js',
  },
  plugins: [
    // React plugin
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
      chunks: ['react'], // Specify the React chunk
    }),
    // Angular plugins
    new AngularCompilerPlugin({
      tsConfigPath: path.resolve(__dirname, '..', 'tsconfig.json'),
      entryModule: path.resolve(__dirname, '..', './src/App.module#AppModule'),
    }),
    new CopyPlugin({
      patterns: [{
        from: 'source',
        to: 'dest',
      }],
    }),
  ],
};
