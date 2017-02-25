'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(){
	return{
		entry:{
			index:'./src/index.js',
			vendor:['vue','vue-router']
		},
		output:{
			path: path.join(__dirname, './dist'),
			filename: '[name].[hash].min.js',	
		},

		module:{
			rules:[
			{
				test:/\.vue$/,
				exclude:/node_modules/,
				use:['vue-loader']
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:['babel-loader']
			},
			{
				test: /\.(css|scss)$/,
				use:[
				'style-loader', 
				'css-loader',
				'postcss-loader',  
				'sass-loader'   
				]
			},
            {
                test: /\.(jpg|png|gif|woff|woff2|eot|ttf|otf|svg)$/,
                use: [
            			{
              				loader: 'url-loader',
             				options: {
                				limit: 10000
              				}
            			}
          			]
            }

			]
		},
	
		plugins:[

		new webpack.HotModuleReplacementPlugin(),
	 	 new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor','manifest']
        }),
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:'./src/index.html',
			inject:'body'
		})

		],
		resolve:{
			extensions:['.js','.vue'],
			alias:{
				'vue':'vue/dist/vue.js'
			}
		},

	}
	
}