'use strict';

var configs = require('./configs.js');
require('./utils.js');
require('eslint-visitor-keys');
require('espree');
require('estraverse');
require('./rules/jsx-child-element-spacing.js');
require('./rules/jsx-closing-bracket-location.js');
require('./rules/jsx-closing-tag-location.js');
require('./rules/jsx-curly-brace-presence.js');
require('./rules/jsx-curly-newline.js');
require('./rules/jsx-curly-spacing.js');
require('./rules/jsx-equals-spacing.js');
require('./rules/jsx-first-prop-new-line.js');
require('./rules/jsx-function-call-newline.js');
require('./rules/jsx-indent.js');
require('./rules/jsx-indent-props.js');
require('./rules/jsx-max-props-per-line.js');
require('./rules/jsx-newline.js');
require('./rules/jsx-one-expression-per-line.js');
require('./rules/jsx-pascal-case.js');
require('picomatch');
require('./rules/jsx-props-no-multi-spaces.js');
require('./rules/jsx-self-closing-comp.js');
require('./rules/jsx-sort-props.js');
require('./rules/jsx-tag-spacing.js');
require('./rules/jsx-wrap-multilines.js');

var index = Object.assign(configs.plugin, { configs: configs.configs });

module.exports = index;
