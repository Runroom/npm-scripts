const path = require('path');
const getRelativeValue = require(path.resolve(__dirname, './get-relative-value'));

const rem = (size: string | number): string => `${getRelativeValue(size)}rem`;

export default rem;
