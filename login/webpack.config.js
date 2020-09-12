const HtmlWebpackPlugin = require("html-webpack-plugin")
const 
VueLoaderPlugin  = require("vue-loader/lib/plugin")
module.exports = {
  entry:"./main.js",
  output:{
    //path要使用绝对路径
    path : __dirname,
    filename:'bundle.js',
    // publicPath:'dist/',//url中路径会自动加上dist/,
  },
  resolve: {
    alias:{
      'vue':'vue/dist/vue.js'
    },
  },
  devServer:{
    historyApiFallback:true  //开启服务器对history模式支持
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        //css-loader将引用的css文件编译，style-loader编译的css文件加载到DOM中，但是webpack中loader是从后往前找的，所以要将css-loader写在style-loader的后面
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|bmp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //小于8192时使用url-loader,大于8192时使用file-loader
              limit: 8192,
              name:'./img/[name].[hash:8].[ext]',
            }
          }
        ]
      },
      {
          test:/\.(ttf|eot|svg|woff|woff2)$/,
          use:'url-loader'
      },
      {
        test: /\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html'
    }),
    new VueLoaderPlugin()
  ]
}
