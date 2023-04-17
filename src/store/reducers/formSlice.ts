import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardType } from './../../types/types';

interface InitialState {
  cards: CardType[];
}
const initialState: InitialState = {
  cards: [],
};
export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardType>) => {
      state.cards = [...state.cards, action.payload];
    },
  },
});

export const formActions = formSlice.actions;
const formReducer = formSlice.reducer;
export default formReducer;
