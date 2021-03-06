/**
 * Verb <https://github.com/assemble/verb>
 * Generate markdown documentation for GitHub projects.
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

const path = require('path');
const file = require('fs-utils');
const parseAuthors = require('parse-authors');
const verb = require('../../');

/**
 * Parse the AUTHORS file into an array of `author` objects.
 *
 * @param  {String} filepath  Alternate filepath.
 * @return  {Array} array of author objects
 *     @param {Object}
 *     => {name: '', email: '', url: ''}
 */

module.exports = function (filepath) {
  filepath = verb.cwd(filepath || 'AUTHORS');

  // Read the AUTHORS file
  var authorsFile = path.resolve(filepath);
  var content = file.readFileSync(authorsFile);
  return parseAuthors(content);
};