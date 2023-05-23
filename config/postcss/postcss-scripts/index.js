"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rem = exports.em = void 0;
const path = require('path');
const em = require(path.resolve(__dirname, './em'));
exports.em = em;
const rem = require(path.resolve(__dirname, './rem'));
exports.rem = rem;
