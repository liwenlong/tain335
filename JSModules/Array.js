// Generated by CoffeeScript 1.6.3
(function() {
  define(function(require) {
    return {
      isArray: function(obj) {
        return Array.isArray || function(obj) {
          return Object.prototype.toString.call(obj === '[object Array]');
        };
      },
      getArray: function(arr) {
        return Array.prototype.slice.call(arr);
      }
    };
  });

}).call(this);
