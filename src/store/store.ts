import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import animeReducer from './reducers/animeSlice';
import formReducer from './reducers/formSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  anime: animeReducer,
  form: formReducer,
});

export const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type GetRootState = () => RootState;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
