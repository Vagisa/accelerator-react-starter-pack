import {render, screen} from '@testing-library/react';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import thunk, { ThunkDispatch } from 'redux-thunk';
import App from './app';
import { getRandomGuitarsTypeArray, getRandomNumberStringsArray, getRandomSortOrder, getRandomSortType, makeFakeComments, makeFakeGuitarItem, makeFakeGuitars } from '../../utils/mocks';
import { datatype } from 'faker';
import { State } from '../../types/state';
import { createAPI } from '../../services/api';
import { AppRoute } from '../../const';

const fakeGuitarItem = makeFakeGuitarItem();
const fakeComments = makeFakeComments();
const fakeGuitars = [...makeFakeGuitars(), makeFakeGuitarItem()];
const fakeAllGuitars = [...fakeGuitars, ...makeFakeGuitars()];
const randomSortType = getRandomSortType();
const randomSortOrder = getRandomSortOrder();
const randomGuitarsType = getRandomGuitarsTypeArray();
const randomNumberStrings = getRandomNumberStringsArray();
const fakePageCount = datatype.number(5);

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
    pageNumber: datatype.number(fakePageCount),
    pageCount: fakePageCount,
    typeGuitars: randomGuitarsType,
    numberStrings: randomNumberStrings,
  },
  GUITAR: {
    guitar: fakeGuitarItem,
    comments: fakeComments,
  },
  ERROR: {
    message: '',
  },
  ORDER: {
    guitarForCart: null,
    guitarForComment: null,
  },
});

const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "Catalog" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);
    expect(screen.getByTestId('Catalog')).toBeInTheDocument();
  });
  it('should render "Catalog" when user navigate to "/catalog/page_:id"', () => {
    history.push(AppRoute.Catalog);
    render(fakeApp);
    expect(screen.getByTestId('Catalog')).toBeInTheDocument();
  });
  it('should render "Product" when user navigate to "/product/:id"', () => {
    history.push(AppRoute.Product);
    render(fakeApp);
    const textElement = screen.getByText(/Оставить отзыв/i);
    expect(textElement).toBeInTheDocument();
  });
  it('should render "NotFound" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404.Page not found')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });
});
