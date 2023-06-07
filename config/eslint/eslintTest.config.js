const pathJoin = require('path').join;
const eslintBase = pathJoin(__dirname, '/extends/base.js');
const eslintJest = pathJoin(__dirname, '/extends/jest.js');
const eslintCypress = pathJoin(__dirname, '/extends/cypress.js');

module.exports = {
  extends: [eslintBase, eslintJest, eslintCypress]
};
