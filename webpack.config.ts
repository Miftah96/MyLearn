const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env = {}) => ({
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue': '@vue/runtime-dom'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: 80,
    // inline: true,
    // hot: true,
    // stats: 'minimal',
    // contentBase: __dirname,
    // overlay: true
  }
})