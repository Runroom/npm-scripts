const pathJoin = require('path').join;
const eslintBase = pathJoin(__dirname, '/extends/base.js');
const eslintTest = pathJoin(__dirname, '/extends/tests.js');

module.exports = {
  extends: [eslintBase, eslintTest]
};
