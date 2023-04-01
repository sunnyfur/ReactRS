import { Currency } from '../types/types';

export interface FormInput {
  name: string;
  category: string;
  cost: string;
  img: FileList;
  date: string;
  curr: Currency;
  agreem: boolean;
}
