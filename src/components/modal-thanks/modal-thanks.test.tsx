import {render, screen} from '@testing-library/react';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import thunk, { ThunkDispatch } from 'redux-thunk';
import ModalThanks from './modal-thanks';

import { State } from '../../types/state';
import { createAPI } from '../../services/api';
import { makeFakePostComment } from '../../utils/mocks';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const history = createMemoryHistory();

const fakePostedComment = makeFakePostComment();
describe('Component: ModalThanks', () => {
  it('should render correctly', () => {
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
        postedComment: fakePostedComment,
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalThanks />
        </Router>
      </Provider>);
    expect(screen.getByText(/Спасибо за ваш отзыв!/i)).toBeInTheDocument();
    expect(screen.getByText(/К покупкам!/i)).toBeInTheDocument();
  });
});
