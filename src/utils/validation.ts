import { ErrorsCard } from './../types/types';
import { Refs } from '../interfaces/refs';

export class Validation {
  static isRequired = (field: unknown | undefined) => {
    return !field ? 'The field is required' : undefined;
  };
}
export const validate = (refs: Refs): ErrorsCard => {
  const errors: ErrorsCard = {};
  errors.name = Validation.isRequired(refs.nameRef?.current?.value);
  errors.category = Validation.isRequired(refs.typeRef?.current?.value);
  errors.date = Validation.isRequired(refs.dateRef?.current?.value);
  errors.img = Validation.isRequired(refs.fileRef?.current?.files);
  errors.cost = Validation.isRequired(refs.costRef?.current?.value);
  errors.curr = Validation.isRequired(refs.costRef?.current?.value);

  return errors;
};
