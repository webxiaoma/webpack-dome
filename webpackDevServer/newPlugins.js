function HelloWorldPlugin(options) {
    // 使用配置（options）设置插件实例
  }
  
  HelloWorldPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function() {
      console.log('Hello World!');
    });
  };
  
  module.exports = HelloWorldPlugin;