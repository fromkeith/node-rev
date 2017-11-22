#!/usr/bin/env node
'use strict';

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = _yargs2.default.usage('Usage: $0 [glob] -o [dir]').demand(['o']).demand(1).argv;

var manifest = (0, _index2.default)({
  files: argv._[0],
  outputDir: argv.o,
  file: argv.file,
  hash: argv.hash
});

process.exit();
//# sourceMappingURL=cli.js.map