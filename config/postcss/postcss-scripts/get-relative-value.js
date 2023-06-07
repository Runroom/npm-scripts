"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strip_units_1 = require("./strip-units");
const getRelativeValue = (size, ratio = 16) => {
    const sizeAsNumber = typeof size === 'string' ? (0, strip_units_1.default)(size) : size;
    if (typeof size === 'string' && size.endsWith('px')) {
        return sizeAsNumber / ratio;
    }
    return sizeAsNumber;
};
exports.default = getRelativeValue;
