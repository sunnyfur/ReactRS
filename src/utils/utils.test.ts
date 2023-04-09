import { getColor } from './utils';
describe('test getcolor', () => {
  it('value on 10', () => {
    expect(getColor(10)).toBe('rgb(5,260,10)');
  });
  it('value on 5', () => {
    expect(getColor(5)).toBe('rgb(130,130,10)');
  });
});
