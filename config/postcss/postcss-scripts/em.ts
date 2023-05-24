const path = require('path');
const getRelativeValue = require(path.resolve(__dirname, './get-relative-value'));

const em = (size: string | number): string => `${getRelativeValue(size)}em`;

export default em;
