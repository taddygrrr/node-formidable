var mysql = require('..');
var path = require('path');

var root = path.join(__dirname, '../');
exports.dir = {
  root: root,
  lib: root + '/lib',
  fixture: root + '/test/fixture',
  tmp: root + '/test/tmp',
};

exports.port = 13532;

exports.formidable = require('..');
exports.fastOrSlow = require('fast-or-slow');
