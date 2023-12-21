import {configureStore} from '@reduxjs/toolkit';
import  { productsSlice } from '../features/productsSlice.ts';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { commentSlice } from '../features/commentSlice.ts';

const store = configureStore({
  reducer: {
    posts: productsSlice.reducer,
    comment: commentSlice.reducer
  }
})
export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store;
