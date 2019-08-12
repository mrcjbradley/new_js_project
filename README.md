# New JS Project

This is a new JavaScript Project

## First Steps

1. `git init`
1. add `/node_modules` to `.gitignore`
1. `npm install -yes`
1. `npm install`
1. `npm install webpack babel-core babel-loader babel-preset-env babel-loader@7 node-sass css-loader sass-loader style-loader extract-text-webpack-plugin webpack-dev-server autoprefixer postcss-loader webpack-cli webpack-merge`
1. Set up basic file structure:
1. create `webpack.common.js`

```javascript
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const outputDir = "./dist";

module.exports = {
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.join(__dirname, outputDir),
    filename: "[name].js",
    publicPath: "/dist/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: { presets: ["env", "react"] }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "postcss-loader"],
          fallback: "style-loader"
        })
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader", "postcss-loader"],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("[name].css"), require("autoprefixer")]
};
```

1. create `webpack.dev.js`

```javascript
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./",
    watchContentBase: true,
    open: "Google Chrome"
  }
});
```

1. create `webpack.prod.js`

```javascript
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map"
});
```

1. create `postcss.config.js`

```javascript
module.exports = {
  plugins: {
    // precss: {},
    autoprefixer: {}
  }
};
```

1. add in scripts/browserlist

```javascript
"browserslist": [
    "last 1 version",
    "> 1%",
    "maintained node versions",
    "not dead"
  ],
  "scripts": {
    "start": "webpack-dev-server --config webpack.dev.js",
    "watch": "webpack --watch --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js  --optimize-minimize"
  },
```
