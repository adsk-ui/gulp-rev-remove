'use strict';
var through = require('through2');
var del = require('del');

module.exports = function(){
  var cache = [];
  return through.obj(function(file, enc, cb){
    if( file.revOrigPath ){
      cache.push(file.revOrigPath);
    }
    cb();
  }, function(cb){
      del(cache, cb);
  });
};
