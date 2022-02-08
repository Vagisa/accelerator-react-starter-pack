import { createReducer } from '@reduxjs/toolkit';

import { GuitarItem } from '../../types/state';
import { addComment, setComments, setGuitar } from '../action';

export const initialState: GuitarItem = {
  guitar: undefined,
  comments: [],
};

const guitarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGuitar, (state, action) => {
      state.guitar = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.comments = [action.payload, ...state.comments];
    });
});

export {guitarReducer};
