import { createReducer } from '@reduxjs/toolkit';
import { Cart } from '../../types/state';
import { clearGuitarForCart, clearGuitarForComment, setGuitarForCart, setGuitarForComment } from '../action';

export const initialState: Cart = {
  guitarForCart: null,
  guitarForComment: null,
};

const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGuitarForCart, (state, action) => {
      state.guitarForCart = action.payload;
    })
    .addCase(clearGuitarForCart, (state, action) => {
      state.guitarForCart = action.payload;
    })
    .addCase(setGuitarForComment, (state, action) => {
      state.guitarForComment = action.payload;
    })
    .addCase(clearGuitarForComment, (state, action) => {
      state.guitarForComment = action.payload;
    });
});

export {orderReducer};
