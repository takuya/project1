#!/usr/bin/env node
/***
 * author takuya_1st
 * Released under  GPL Licenses.
 * Date: 2013-11-21 2:06
 */
var fs   = require('fs')
var path = require('path');
var name = process.argv[1];
var str  = process.argv[2];

//require(process.argv[2]);
str = fs.readFileSync(process.argv[2]);

eval( "(function(){ "+str+" })" );

////モジュールの処理
//if( name.match(/\./) ){
//	module_name = path.basename( name.split(/\./).shift()) ;
//	name = name.split(/\./).pop();
//	if( global[module_name] ){
//	  module = global[module_name];
//	}else{
//	  module = require(module_name);
//	}
//}else {
//	name =  path.basename(name);
//	module = global;
//}
////コマンドシェルで実行したい関数
//var func = module[name];
//
//
//
//if(str) {
//    if(fs.existsSync(str)){
//		str = fs.readFileSync(str);
//	}
//	str  = func(str);
//	console.log(str);
//}else{
//	process.stdin.resume();
//	process.stdin.setEncoding('utf8');
//
//	var lines = []
//		// 標準入力がくると発生するイベント
//		process.stdin.on('data', function (chunk) {
//
//				lines.push(chunk.trim())
//				});
//	// EOFがくると発生するイベント
//	process.stdin.on('end', function () {
//			lines = lines.join("\n")
//			console.log( func(lines)  )
//			});
//
//}
//


