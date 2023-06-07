const pathJoin = require('path').join;
const eslintBase = pathJoin(__dirname, '/extends/base.js');
const eslintNext = pathJoin(__dirname, '/extends/next.js');
const eslintTS = pathJoin(__dirname, '/extends/typescript.js');

module.exports = {
  extends: [eslintBase, eslintTS, eslintNext]
};
