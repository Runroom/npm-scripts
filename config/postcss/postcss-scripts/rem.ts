import getRelativeValue from './get-relative-value';

const rem = (size: string | number): string => `${getRelativeValue(size)}rem`;

export default rem;
