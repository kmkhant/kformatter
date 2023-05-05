import { formatter } from '../index';

test('10e3 k test', () => {
  expect(formatter(1000, 1)).toBe('1k');
});

test('10e3+digits k test', () => {
  expect(formatter(14113, 1)).toBe('14.1k');
});

test('10e6 M test', () => {
  expect(formatter(1124566, 1)).toBe('1.1M');
});
