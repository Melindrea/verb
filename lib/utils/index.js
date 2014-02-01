/**
 * phaser <https://github.com/jonschlinkert/phaser>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var fs = require('fs');
var name = require('./name');
var isJavaScript = require('./isJavaScript');

fs.readdirSync(__dirname + '/').forEach(function(filepath) {
  if (isJavaScript(filepath) !== null && filepath !== 'index.js') {
    exports[name(filepath)] = require('./' + filepath);
  }
});