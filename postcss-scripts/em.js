"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_relative_value_1 = require("./get-relative-value");
const em = (size) => `${(0, get_relative_value_1.default)(size)}em`;
exports.default = em;
