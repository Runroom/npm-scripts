const pathJoin = require('path').join;
const eslintBase = pathJoin(__dirname, '/extends/base.js');
const eslintTest = pathJoin(__dirname, '/extends/tests.js');
const eslintReact = pathJoin(__dirname, '/extends/react.js');
const eslintTS = pathJoin(__dirname, '/extends/typescript.js');

module.exports = {
  plugins: ['react', 'import', 'react-hooks'],
  extends: [eslintBase, eslintTS, eslintReact, eslintTest]
};
