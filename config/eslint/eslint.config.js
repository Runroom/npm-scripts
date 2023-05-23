const pathJoin = require('path').join;
const eslintBase = pathJoin(__dirname, '/extends/base.js');

module.exports = {
  extends: eslintBase
};
