import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { State } from './state';

export enum ActionType {
  ChangeSortType = 'changeSortType',
  ChangeSortOrder = 'changeSortOrder',
  SetGuitars = 'setGuitars',
  SetAllGuitars = 'setAllGuitars',
  SetGuitar = 'setGuitar',
  SetComments = 'setComments',
  SetSearchString = 'SetSearchString',
  SetPriceFrom = 'setPriceFrom',
  SetPriceTo = 'setPriceTo',
  SetPageNumber = 'setPageNumber',
  SetPageCount = 'setPageCount',
  SetTypeGuitars = 'setTypeGuitars',
  SetNumberStrings = 'setNumberStrings',
  PostComments = 'postComments',
  PostCoupons = 'postCoupons',
  PostOrders = 'postOrders',
  RedirectToRoute = 'redirectToRoute',
  SetErrorMessage = 'setErrorMessage',
  OpenModal = 'openModal',
  CloseModal = 'closeModal',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
