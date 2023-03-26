import { Validation } from './validation';

describe('validation of Form', () => {
  it('isRequired with not empty parametr', () => {
    expect(Validation.isRequired('not empty')).toBe(undefined);
  });
  it('isRequired with empty parametr', () => {
    expect(Validation.isRequired(undefined)).toBe('The field is required');
  });
  it('the Date less than current', () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    expect(Validation.isCorrectDate(date.toString())).toBe(undefined);
  });
  it('the Date over than current', () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    expect(Validation.isCorrectDate(date.toString())).toBe('Date couldn`t be over current one');
  });
});
