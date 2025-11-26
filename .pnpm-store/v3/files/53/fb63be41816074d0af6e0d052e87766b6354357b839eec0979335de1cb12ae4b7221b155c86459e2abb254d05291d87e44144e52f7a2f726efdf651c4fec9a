'use strict';

var utils = require('./utils.js');
var jsxChildElementSpacing = require('./rules/jsx-child-element-spacing.js');
var jsxClosingBracketLocation = require('./rules/jsx-closing-bracket-location.js');
var jsxClosingTagLocation = require('./rules/jsx-closing-tag-location.js');
var jsxCurlyBracePresence = require('./rules/jsx-curly-brace-presence.js');
var jsxCurlyNewline = require('./rules/jsx-curly-newline.js');
var jsxCurlySpacing = require('./rules/jsx-curly-spacing.js');
var jsxEqualsSpacing = require('./rules/jsx-equals-spacing.js');
var jsxFirstPropNewLine = require('./rules/jsx-first-prop-new-line.js');
var jsxFunctionCallNewline = require('./rules/jsx-function-call-newline.js');
var jsxIndent = require('./rules/jsx-indent.js');
var jsxIndentProps = require('./rules/jsx-indent-props.js');
var jsxMaxPropsPerLine = require('./rules/jsx-max-props-per-line.js');
var jsxNewline = require('./rules/jsx-newline.js');
var jsxOneExpressionPerLine = require('./rules/jsx-one-expression-per-line.js');
var jsxPascalCase = require('./rules/jsx-pascal-case.js');
var jsxPropsNoMultiSpaces = require('./rules/jsx-props-no-multi-spaces.js');
var jsxSelfClosingComp = require('./rules/jsx-self-closing-comp.js');
var jsxSortProps = require('./rules/jsx-sort-props.js');
var jsxTagSpacing = require('./rules/jsx-tag-spacing.js');
var jsxWrapMultilines = require('./rules/jsx-wrap-multilines.js');

var rules = {
  "jsx-child-element-spacing": jsxChildElementSpacing,
  "jsx-closing-bracket-location": jsxClosingBracketLocation,
  "jsx-closing-tag-location": jsxClosingTagLocation,
  "jsx-curly-brace-presence": jsxCurlyBracePresence,
  "jsx-curly-newline": jsxCurlyNewline,
  "jsx-curly-spacing": jsxCurlySpacing,
  "jsx-equals-spacing": jsxEqualsSpacing,
  "jsx-first-prop-new-line": jsxFirstPropNewLine,
  "jsx-function-call-newline": jsxFunctionCallNewline,
  "jsx-indent": jsxIndent,
  "jsx-indent-props": jsxIndentProps,
  "jsx-max-props-per-line": jsxMaxPropsPerLine,
  "jsx-newline": jsxNewline,
  "jsx-one-expression-per-line": jsxOneExpressionPerLine,
  "jsx-pascal-case": jsxPascalCase,
  "jsx-props-no-multi-spaces": jsxPropsNoMultiSpaces,
  "jsx-self-closing-comp": jsxSelfClosingComp,
  "jsx-sort-props": jsxSortProps,
  "jsx-tag-spacing": jsxTagSpacing,
  "jsx-wrap-multilines": jsxWrapMultilines
};

var plugin = {
  rules
};

const config = {
  rules: {
    "react/jsx-child-element-spacing": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-closing-tag-location": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/jsx-curly-newline": 0,
    "react/jsx-curly-spacing": 0,
    "react/jsx-equals-spacing": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-function-call-newline": 0,
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-newline": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-pascal-case": 0,
    "react/jsx-props-no-multi-spaces": 0,
    "react/jsx-self-closing-comp": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-tag-spacing": 0,
    "react/jsx-wrap-multilines": 0
  }
};

const configs = {
  "disable-legacy": config,
  "all-flat": utils.createAllConfigs(plugin, "@stylistic/jsx", true),
  "all-extends": utils.createAllConfigs(plugin, "@stylistic/jsx", false)
};

exports.configs = configs;
exports.plugin = plugin;
