/**
 * phaser <https://github.com/jonschlinkert/phaser>
 * The most deadly markdown documentation generator in the Alpha Quadrant.
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var file = require('fs-utils');
var tmpl = require('repo-templates');

/**
 * CONTRIBUTING.md
 */

module.exports = function(phaser) {
  var options = phaser.options || {};
  var config = phaser.config;

  /**
   * If `CONTRIBUTING.md` does not exist, and
   * `contributing: true` is defined in the options,
   * then add a `CONTRIBUTING.md` file to the root
   * of the project.
   *
   * @title CONTRIBUTING.md
   */

  if (options.contributing && !file.exists(phaser.cwd('contributing.md'))) {
    var contributing = file.match('*CONTRIBUTING.md', tmpl, {matchBase: true})[0];

    // Save the file
    file.writeFileSync('CONTRIBUTING.md', file.readFileSync(contributing));

    // Log a success message
    phaser.log.success('Saved:', 'CONTRIBUTING.md');
  }
};