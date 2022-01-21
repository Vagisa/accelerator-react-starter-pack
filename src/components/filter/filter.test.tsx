import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import {
  getRandomGuitarsTypeArray,
  getRandomNumberStringsArray,
  getRandomSortOrder,
  getRandomSortType,
  makeFakeGuitarItem,
  makeFakeGuitars } from '../../utils/mocks';
import Filter from './filter';
const fakeGuitarItem = makeFakeGuitarItem();
const fakeGuitars = [...makeFakeGuitars(), makeFakeGuitarItem()];
const fakeAllGuitars = [...fakeGuitars, ...makeFakeGuitars()];
const randomSortType = getRandomSortType();
const randomSortOrder = getRandomSortOrder();
const randomGuitarsType = getRandomGuitarsTypeArray();
const randomNumberStrings = getRandomNumberStringsArray();

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const store = mockStore({
  GUITARS: {
    guitars: fakeGuitars,
    allGuitars: fakeAllGuitars,
    sortType: randomSortType,
    sortOrder: randomSortOrder,
    searchString: fakeGuitarItem.name,
    priceFrom: fakeGuitarItem.price,
    priceTo: fakeGuitarItem.price + 200,
    typeGuitars: randomGuitarsType,
    numberStrings: randomNumberStrings,
  },
  GUITAR: {
    guitar: fakeGuitarItem,
  },
  ERROR: {
    message: '',
  },
  ORDER: {
    modal: null,
  },
});
const history = createMemoryHistory();

describe('Component: Filter', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Filter />
        </Router>
      </Provider>);
    expect(screen.getByDisplayValue(new RegExp(`${fakeGuitarItem.price}`, 'i'))).toBeInTheDocument();
    expect(screen.getByDisplayValue(new RegExp(`${fakeGuitarItem.price + 200}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/Фильтр/i)).toBeInTheDocument();
  });
});
