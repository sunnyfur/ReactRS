export class Validation {
  static isRequired = (field: string) => {
    return !field ? 'The field is required' : '';
  };
}
