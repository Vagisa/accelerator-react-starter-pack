import { createAction } from '@reduxjs/toolkit';
import { GuitarsType, SortOrderOptions, SortTypeOptions } from '../const';
import { ActionType } from '../types/action';
import { Comment } from '../types/comment';
import { Guitar } from '../types/guitar';
import { translateSortOptions } from '../utils/utils';

export const setGuitars = createAction(
  ActionType.SetGuitars,
  (guitars: Guitar[]) => ({
    payload: guitars,
  }),
);

export const setAllGuitars = createAction(
  ActionType.SetAllGuitars,
  (guitars: Guitar[]) => ({
    payload: guitars,
  }),
);

export const setPageCount = createAction(
  ActionType.SetPageCount,
  (count: number) => ({
    payload: count,
  }),
);

export const setGuitar = createAction(
  ActionType.SetGuitar,
  (guitar: Guitar) => ({
    payload: guitar,
  }),
);

export const setComments = createAction(
  ActionType.SetComments,
  (comments: Comment[], guitarId: string) => ({
    payload: {comments, guitarId},
  }),
);

export const changeSortType = createAction(
  ActionType.ChangeSortType,
  (sortType: SortTypeOptions) => ({
    payload: translateSortOptions(sortType),
  }),
);

export const changeSortOrder = createAction(
  ActionType.ChangeSortOrder,
  (sortOrder: SortOrderOptions) => ({
    payload: sortOrder,
  }),
);

export const setSearchString = createAction(
  ActionType.SetSearchString,
  (searchString: string) => ({
    payload: searchString,
  }),
);

export const setPriceFrom = createAction(
  ActionType.SetPriceFrom,
  (priceFrom: number | undefined) => ({
    payload: priceFrom,
  }),
);

export const setPriceTo = createAction(
  ActionType.SetPriceTo,
  (priceTo: number | undefined) => ({
    payload: priceTo,
  }),
);

export const setPageNumber = createAction(
  ActionType.SetPageNumber,
  (pageNumber: number) => ({
    payload: pageNumber,
  }),
);

export const toggleTypeGuitar = createAction(
  ActionType.SetTypeGuitars,
  (typeGuitar: GuitarsType) => ({
    payload: typeGuitar,
  }),
);

export const toggleNumberString = createAction(
  ActionType.SetNumberStrings,
  (numberString: number) => ({
    payload: numberString,
  }),
);

export const setErrorMessage = createAction(
  ActionType.SetErrorMessage,
  (message: string) => ({
    payload: message,
  }),
);

export const setGuitarForCart = createAction(
  ActionType.SetGuitarForCart,
  (guitar: Guitar) => ({
    payload: guitar,
  }),
);

export const clearGuitarForCart = createAction(
  ActionType.ClearGuitarForCart,
  () => ({payload: null}),
);

export const setGuitarForComment = createAction(
  ActionType.SetGuitarForComment,
  (guitar: Guitar) => ({
    payload: guitar,
  }),
);

export const clearGuitarForComment = createAction(
  ActionType.ClearGuitarForComment,
  () => ({payload: null}),
);
