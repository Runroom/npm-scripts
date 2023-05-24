'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const path = require('path');
const stripUnits = require(path.resolve(__dirname, './strip-units'));
const getRelativeValue = (size, ratio = 16) => {
  const sizeAsNumber = typeof size === 'string' ? stripUnits(size) : size;
  if (typeof size === 'string' && size.endsWith('px')) {
    return sizeAsNumber / ratio;
  }
  return sizeAsNumber;
};
exports.default = getRelativeValue;
