import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { getRandomGuitarsTypeArray, getRandomNumberStringsArray, makeFakeGuitarItem, makeFakeGuitars } from '../../utils/mocks';
import GuitarItem from './guitar-item';
import { AppRoute } from '../../const';
const fakeGuitarItem = makeFakeGuitarItem();
const fakeGuitars = [...makeFakeGuitars(), makeFakeGuitarItem()];
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
    searchString: fakeGuitarItem.name,
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
    guitarForCart: null,
    guitarForComment: null,
    postedComment: null,
  },
});
const history = createMemoryHistory();

describe('Component: GuitarItem', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Product.replace(':id', fakeGuitarItem.id.toString()));
    render(
      <Provider store={store}>
        <Router history={history}>
          <GuitarItem guitar={fakeGuitarItem} />
        </Router>
      </Provider>);

    expect(screen.getByText(new RegExp(`${fakeGuitarItem.name}`, 'i'))).toBeInTheDocument();
  });
});
