import { Action } from 'redux';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';

import { APIRoute, PRODUCTS_ON_PAGE } from '../const';
import {
  setAllGuitars,
  setComments,
  setErrorMessage,
  setGuitar,
  setGuitars,
  setPageCount} from './action';
import { State } from '../types/state';
import { getFakePageCount, getRandomGuitarsTypeArray, getRandomNumberStringsArray, getRandomSortOrder, getRandomSortType, makeFakeComments, makeFakeGuitarItem, makeFakeGuitars } from '../utils/mocks';
import { fetchAllGuitarsAction, fetchCommentsAction, fetchGuitarItemAction, fetchGuitarsAction } from './api-actions';
import { datatype } from 'faker';

const fakeGuitar = makeFakeGuitarItem();
const fakeComments = makeFakeComments();
const fakePageCount = getFakePageCount();
const fakeGuitars = [...makeFakeGuitars(), makeFakeGuitarItem()];
const fakeAllGuitars = [...fakeGuitars, ...makeFakeGuitars()];
const randomSortType = getRandomSortType();
const randomSortOrder = getRandomSortOrder();
const randomGuitarsType = getRandomGuitarsTypeArray();
const randomNumberStrings = getRandomNumberStringsArray();

const initialListStore = {
  GUITARS: {
    guitars: makeFakeGuitars(),
    allGuitars: [...fakeGuitars, ...makeFakeGuitars()],
    sortType: randomSortType,
    sortOrder: randomSortOrder,
    searchString: fakeGuitar.name,
    priceFrom: fakeGuitar.price,
    priceTo: fakeGuitar.price + 200,
    pageNumber: datatype.number(fakePageCount),
    pageCount: fakePageCount,
    typeGuitars: randomGuitarsType,
    numberStrings: randomNumberStrings,
  },
  GUITAR: {
    guitar: fakeGuitar,
    comments: fakeComments,
  },
  ERROR: {
    message: '',
  },
  ORDER: {
    guitarForCart: null,
    guitarForComment: null,
  },
};

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);
  it('should dispatch fill guitars list when GET /guitars', async () => {
    mockAPI
      .onGet(APIRoute.Guitars)
      .reply(200, fakeGuitars, {'x-total-count': fakeGuitars.length.toString()});

    const store = mockStore(initialListStore);
    await store.dispatch(fetchGuitarsAction());
    expect(store.getActions()).toEqual([
      setGuitars(fakeGuitars),
      setPageCount(Math.ceil(fakeGuitars.length / PRODUCTS_ON_PAGE)),
    ]);
  });
  it('should dispatch error message when server is unavailiable', async () => {
    mockAPI
      .onGet(APIRoute.Guitars)
      .reply(500);

    const store = mockStore(initialListStore);
    await store.dispatch(fetchGuitarsAction());
    expect(store.getActions()).toEqual([setErrorMessage('Произошла ошибка, перезагрузите страницу')]);
  });
  it('should dispatch fill all guitars list when GET /guitars', async () => {
    mockAPI
      .onGet(APIRoute.Guitars)
      .reply(200, fakeAllGuitars);

    const store = mockStore(initialListStore);
    await store.dispatch(fetchAllGuitarsAction());
    expect(store.getActions()).toEqual([
      setAllGuitars(fakeAllGuitars),
    ]);
  });
  it('should also send an error message when the server is not available', async () => {
    mockAPI
      .onGet(APIRoute.Guitars)
      .reply(500);

    const store = mockStore(initialListStore);
    await store.dispatch(fetchAllGuitarsAction());
    expect(store.getActions()).toEqual(
      [setErrorMessage('Произошла ошибка, перезагрузите страницу')]);
  });
  it('should dispatch set Guitar when GET /guitars/:id', async () => {
    mockAPI
      .onGet(APIRoute.Guitar + fakeGuitar.id)
      .reply(200, fakeGuitar);

    const store = mockStore();

    await store.dispatch(fetchGuitarItemAction(fakeGuitar.id.toString()));
    expect(store.getActions()).toEqual([setGuitar(fakeGuitar)]);
  });
  it('should dispatch set comments when GET /guitars/:id/comments', async () => {
    mockAPI
      .onGet(APIRoute.Guitar + fakeGuitar.id + APIRoute.Comments)
      .reply(200, fakeComments);

    const store = mockStore();

    await store.dispatch(fetchCommentsAction(fakeGuitar.id.toString()));
    expect(store.getActions()).toEqual([setComments(fakeComments)]);
  });
});
