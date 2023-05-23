'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const path = require('path');
const getRelativeValue = require(path.resolve(__dirname, './get-relative-value'));
const rem = size => `${getRelativeValue(size)}rem`;
exports.default = rem;
