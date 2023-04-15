import { createSlice } from '@reduxjs/toolkit';
import { CardTypeAnime } from './../../types/types';

interface InitialState {
  searchText: string;
  animes: CardTypeAnime[];
  isLoading: boolean;
  error: string;
}
const initialState: InitialState = {
  searchText: '',
  animes: [],
  isLoading: false,
  error: '',
};
export const animeSlice = createSlice({
  name: 'animes',
  initialState,
  reducers: {},
});

const animeReducer = animeSlice.reducer;
export default animeReducer;
