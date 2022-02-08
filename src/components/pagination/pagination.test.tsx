import {render, screen} from '@testing-library/react';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import thunk, { ThunkDispatch } from 'redux-thunk';
import Pagination from './pagination';

import { State } from '../../types/state';
import { createAPI } from '../../services/api';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const history = createMemoryHistory();

describe('Component: Pagination', () => {
  it('should render correctly on the first page', () => {
    const store = mockStore({
      GUITARS: {
        pageNumber: 1,
        pageCount: 4,
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
    render(
      <Provider store={store}>
        <Router history={history}>
          <Pagination />
        </Router>
      </Provider>);
    expect(screen.queryByText(/Назад/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Далее/i)).toBeInTheDocument();
  });
  it('should render correctly on the second page', () => {
    const store = mockStore({
      GUITARS: {
        pageNumber: 2,
        pageCount: 4,
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
    render(
      <Provider store={store}>
        <Router history={history}>
          <Pagination />
        </Router>
      </Provider>);
    expect(screen.getByText(/Назад/i)).toBeInTheDocument();
    expect(screen.getByText(/Далее/i)).toBeInTheDocument();
  });
  it('should render correctly on the last page', () => {
    const store = mockStore({
      GUITARS: {
        pageNumber: 4,
        pageCount: 4,
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
    render(
      <Provider store={store}>
        <Router history={history}>
          <Pagination />
        </Router>
      </Provider>);
    expect(screen.getByText(/Назад/i)).toBeInTheDocument();
    expect(screen.queryByText(/Далее/i)).not.toBeInTheDocument();
  });
});
