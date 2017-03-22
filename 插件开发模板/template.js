;(function(){
  //引入插件的样式
  require("./banner.css");

  //默认配置
  var defaults = {
    width: 800,
    height: 300,
    ...
  }

  //插件入口
  var Banner = function(settings){
    this.config = $.extend({},defaults,settings);
    this.init();
  }

  //扩展属性和方法
  Banner.prototype = {
    init: function(){},
    template: function(){},
    event: function(){}
  };

  //将插件暴露出去
  module.exports = Banner;

})();
