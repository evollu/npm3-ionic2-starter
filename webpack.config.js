var path = require('path');
var wwwPath = path.resolve(__dirname, 'app');
var outputPath = path.join(__dirname, 'www');
var appJsPath = path.join(wwwPath, 'app.ts');

module.exports = {
  entry: [
    "es6-shim",
    "zone.js",
    "reflect-metadata",
    "web-animations.min",
    appJsPath
  ],
  output: {
    path: outputPath,
    filename: 'app.bundle.js',
    publicPath: 'www'
    //pathinfo: true // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        // include: /www(\/|\\)app(\/|\\)/,
        include: [wwwPath],
        exclude: /node_modules/
       },
       { test: /\.scss$/,
        loaders: ["style", "css", "sass"],
       include: [wwwPath],
        exclude: /node_modules/ }
        , {
      test: /\.(woff|ttf)(\?v=)?/,
      loaders: ["url"]
    }
    ]
  },
  resolve: {
    modulesDirectories: [
      "node_modules",
      "node_modules/ionic-framework/dist/src/es5/common", // ionic-framework npm package (stable)
      "node_modules/ionic-framework/dist/js", // for web-animations polyfill
    ],
    extensions: ["", ".js", ".ts"]
  },
  sassLoader: {
    includePaths: ["node_modules/ionic-framework/dist/src/scss"]
  },
  devtool: 'source-map',
};

