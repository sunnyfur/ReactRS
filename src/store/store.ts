import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import animeReducer from './reducers/animeSlice';
import formReducer from './reducers/formSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { animeApi } from '../api/api';

const rootReducer = combineReducers({
  anime: animeReducer,
  [animeApi.reducerPath]: animeApi.reducer,
  form: formReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type GetRootState = () => RootState;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
