import getRelativeValue from './get-relative-value';

const em = (size: string | number): string => `${getRelativeValue(size)}em`;

export default em;
