import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { getRandomGuitarsTypeArray, getRandomNumberStringsArray, makeFakeGuitarItem, makeFakeGuitars } from '../../utils/mocks';
import NotFound from './not-found';
const fakeGuitarItem = makeFakeGuitarItem();
const fakeGuitars = [...makeFakeGuitars(), makeFakeGuitarItem()];
const randomGuitarsType = getRandomGuitarsTypeArray();
const randomNumberStrings = getRandomNumberStringsArray();

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: NotFound', () => {
  it('should render correctly', () => {
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
        modal: null,
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <NotFound />
        </Router>
      </Provider>);

    expect(screen.getByText(/404.Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to main page/i)).toBeInTheDocument();
  });
});
