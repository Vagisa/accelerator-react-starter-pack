import { createReducer } from '@reduxjs/toolkit';
import { Modal } from '../../types/state';
import { clearGuitarForCart, clearGuitarForComment, clearPostedComment, setGuitarForCart, setGuitarForComment, setPostedComment } from '../action';

export const initialState: Modal = {
  guitarForCart: null,
  guitarForComment: null,
  postedComment: null,
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
    })
    .addCase(setPostedComment, (state, action) => {
      state.postedComment = action.payload;
    })
    .addCase(clearPostedComment, (state, action) => {
      state.postedComment = action.payload;
    });
});

export {orderReducer};
