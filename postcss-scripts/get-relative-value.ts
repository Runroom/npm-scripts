const path = require('path');
const stripUnits = require(path.resolve(__dirname, './strip-units'));

const getRelativeValue = (size: string | number, ratio: number = 16): number => {
  const sizeAsNumber = typeof size === 'string' ? stripUnits(size) : size;

  if (typeof size === 'string' && size.endsWith('px')) {
    return sizeAsNumber / ratio;
  }

  return sizeAsNumber;
};

export default getRelativeValue;
