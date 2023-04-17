import { configureStore } from '@reduxjs/toolkit';
import { PreloadedState, combineReducers } from 'redux';
import searchReducer from './reducers/searchSlice';
import formReducer from './reducers/formSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { animeApi } from '../api/api';

const rootReducer = combineReducers({
  search: searchReducer,
  [animeApi.reducerPath]: animeApi.reducer,
  form: formReducer,
});

export const store = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware),
  });
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
export type GetRootState = () => RootState;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
