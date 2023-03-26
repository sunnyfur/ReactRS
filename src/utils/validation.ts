import { ErrorsCard } from './../types/types';
import { Refs } from '../interfaces/refs';

export class Validation {
  static isRequired = (field: unknown | undefined) => {
    return !field ? 'The field is required' : undefined;
  };
  static isCheckedAgreement = (field: boolean | undefined) => {
    return !field ? 'Please check the agreement' : undefined;
  };
  static isTypeNFT = (field: unknown) => {
    return !field ? 'Please choose one of the type' : undefined;
  };
  static isSelected = (field: unknown) => {
    return !field ? 'Please choose the currensy' : undefined;
  };
  static isFile = (field: FileList | undefined | null) => {
    return field && field?.length ? undefined : 'Please add the file';
  };
  static isCorrectDate = (field: string | undefined) => {
    return !field || new Date() < new Date(field) ? 'Date couldn`t be over current one' : undefined;
  };
}
export const validate = (refs: Refs): ErrorsCard => {
  const errors: ErrorsCard = {};
  errors.name = Validation.isRequired(refs.nameRef?.current?.value);
  errors.category = Validation.isTypeNFT(refs.typeRef?.current?.value);
  errors.date =
    Validation.isRequired(refs.dateRef?.current?.value) ||
    Validation.isCorrectDate(refs.dateRef?.current?.value);

  errors.img = Validation.isFile(refs.fileRef?.current?.files);

  errors.curr = Validation.isSelected(
    refs.usdtRef?.current?.checked || refs.ethRef?.current?.checked
  );
  errors.cost = Validation.isRequired(refs.costRef?.current?.value);
  errors.agreem = Validation.isCheckedAgreement(refs.agreeRef?.current?.checked);

  return errors;
};
