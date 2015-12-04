// 所有模块都通过 define 来定义
define(function(require, exports, module) {

  // 通过 require 引入依赖
  var $ = require('jquery');
  console.log(111);
  var index = require.async('index', function(index_callback){
    console.log(index_callback.doSomething());
  });
  
});