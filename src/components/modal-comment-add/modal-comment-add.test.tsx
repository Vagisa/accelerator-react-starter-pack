import {render, screen} from '@testing-library/react';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import thunk, { ThunkDispatch } from 'redux-thunk';
import ModalCommentAdd from './modal-comment-add';

import { State } from '../../types/state';
import { createAPI } from '../../services/api';
import { makeFakeGuitarItem } from '../../utils/mocks';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const history = createMemoryHistory();

const fakeGuitar = makeFakeGuitarItem();
describe('Component: ModalCommentAdd', () => {
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
        guitarForComment: fakeGuitar,
        postedComment: null,
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalCommentAdd />
        </Router>
      </Provider>);
    expect(screen.getByText(/Оставить отзыв/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ваше Имя/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Достоинства/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Недостатки/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Комментарий/i)).toBeInTheDocument();

    // userEvent.type(screen.getByTestId('user-name'), 'test-name');
    // userEvent.type(screen.getByTestId('pros'), 'test-advantages');
    // userEvent.type(screen.getByTestId('disadvantage'), 'test-disadvantages');
    // userEvent.type(screen.getByTestId('comment'), 'test-comment');

    // expect(screen.getByDisplayValue(/test-name/i)).toBeInTheDocument();
    // expect(screen.getByDisplayValue(/test-advantages/i)).toBeInTheDocument();
    // expect(screen.getByDisplayValue(/test-disadvantages/i)).toBeInTheDocument();
    // expect(screen.getByDisplayValue(/test-comment/i)).toBeInTheDocument();
  });
});
