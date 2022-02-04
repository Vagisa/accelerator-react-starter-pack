import {render, screen} from '@testing-library/react';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import thunk, { ThunkDispatch } from 'redux-thunk';
import ModalCartAdd from './modal-cart-add';

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
describe('Component: ModalCartAdd', () => {
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
        guitarForCart: fakeGuitar,
        guitarForComment: null,
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalCartAdd />
        </Router>
      </Provider>);
    expect(screen.getByText(/Добавить товар в корзину/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`Артикул: ${fakeGuitar.vendorCode}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${fakeGuitar.name}`, 'i'))).toBeInTheDocument();
  });
});
