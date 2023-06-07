import { em, rem } from './index.js';
import getRelativeValue from './get-relative-value.js';
import stripUnits from './strip-units.js';

it('removes units', () => {
  expect(stripUnits(10)).toStrictEqual(10);
  expect(stripUnits('10rem')).toStrictEqual(10);
  expect(stripUnits('10em')).toStrictEqual(10);
  expect(stripUnits('10px')).toStrictEqual(10);
});

it('returns correct relative value', () => {
  expect(getRelativeValue(10)).toStrictEqual(10);
  expect(getRelativeValue('16px')).toStrictEqual(1);
});

it('returns correct ems value', () => {
  expect(em(20)).toStrictEqual('20em');
  expect(em('16px')).toStrictEqual('1em');
});

it('returns correct rems value', () => {
  expect(rem(20)).toStrictEqual('20rem');
  expect(rem('16px')).toStrictEqual('1rem');
});
