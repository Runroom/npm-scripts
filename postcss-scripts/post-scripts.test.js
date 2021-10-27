'use strict';

const { em, rem } = require('.');
const { default: getRelativeValue } = require('./get-relative-value');
const { default: stripUnits } = require('./strip-units');

it('removes units', () => {
  expect(stripUnits(10)).toEqual(10);
  expect(stripUnits('10rem')).toEqual(10);
  expect(stripUnits('10em')).toEqual(10);
  expect(stripUnits('10px')).toEqual(10);
});

it('returns correct relative value', () => {
  expect(getRelativeValue(10)).toEqual(10);
  expect(getRelativeValue('16px')).toEqual(1);
});

it('returns correct ems value', () => {
  expect(em(20)).toEqual('20em');
  expect(em('16px')).toEqual('1em');
});

it('returns correct rems value', () => {
  expect(rem(20)).toEqual('20rem');
  expect(rem('16px')).toEqual('1rem');
});
