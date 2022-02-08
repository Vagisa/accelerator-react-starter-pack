import {render, screen} from '@testing-library/react';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import thunk, { ThunkDispatch } from 'redux-thunk';
import ErrorModal from './error-modal';

import { State } from '../../types/state';
import { createAPI } from '../../services/api';
import { getFakeErrorMessage } from '../../utils/mocks';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const history = createMemoryHistory();
const errorMessage = getFakeErrorMessage();
describe('Component: ErrorModal', () => {
  it('should render correctly', () => {
    const store = mockStore({
      GUITARS: {
        pageNumber: 1,
        pageCount: 4,
      },
      ERROR: {
        message: errorMessage,
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
          <ErrorModal />
        </Router>
      </Provider>);
    expect(screen.getByText(/Внимание!/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${errorMessage}`, 'i'))).toBeInTheDocument();
  });
});
