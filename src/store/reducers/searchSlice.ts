import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  searchText: string;
}
const initialState: InitialState = {
  searchText: '',
};
export const searchSlice = createSlice({
  name: 'animes',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
const searchReducer = searchSlice.reducer;
export default searchReducer;
