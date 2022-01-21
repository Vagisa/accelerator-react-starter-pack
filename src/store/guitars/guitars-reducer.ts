import { createReducer } from '@reduxjs/toolkit';

import {
  SortTypeOptions,
  SortOrderOptions
} from '../../const';
import {
  toggleArrayElement
} from '../../utils/utils';
import { Guitars } from '../../types/state';
import {
  changeSortOrder,
  changeSortType,
  setGuitars,
  setAllGuitars,
  setPriceFrom,
  setPriceTo,
  setSearchString,
  toggleTypeGuitar,
  toggleNumberString,
  setPageNumber,
  setPageCount
} from '../action';

export const initialState: Guitars = {
  guitars: [],
  allGuitars: [],
  sortType: SortTypeOptions.Default,
  sortOrder: SortOrderOptions.Default,
  searchString: undefined,
  priceFrom: undefined,
  priceTo: undefined,
  pageNumber: 1,
  pageCount: 1,
  typeGuitars: [],
  numberStrings: [],
};

const guitarsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGuitars, (state, action) => {
      state.guitars = action.payload;
    })
    .addCase(setAllGuitars, (state, action) => {
      state.allGuitars = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(changeSortOrder, (state, action) => {
      state.sortOrder = action.payload;
    })
    .addCase(setSearchString, (state, action) => {
      state.searchString = action.payload;
    })
    .addCase(setPriceFrom, (state, action) => {
      state.priceFrom = action.payload;
    })
    .addCase(setPriceTo, (state, action) => {
      state.priceTo = action.payload;
    })
    .addCase(setPageNumber, (state, action) => {
      state.pageNumber = action.payload;
    })
    .addCase(setPageCount, (state, action) => {
      state.pageCount = action.payload;
    })
    .addCase(toggleTypeGuitar, (state, action) => {
      state.typeGuitars = toggleArrayElement(state.typeGuitars, action.payload);
    })
    .addCase(toggleNumberString, (state, action) => {
      state.numberStrings = toggleArrayElement(state.numberStrings, action.payload);
    });
});

export {guitarsReducer};
