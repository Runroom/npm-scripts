const pathJoin = require('path').join;
const eslintBase = pathJoin(__dirname, '/extends/base.js');
const eslintTS = pathJoin(__dirname, '/extends/typescript.js');

module.exports = {
  extends: [eslintBase, eslintTS]
};
