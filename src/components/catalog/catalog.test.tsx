import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { getRandomGuitarsTypeArray, getRandomNumberStringsArray, makeFakeGuitarItem, makeFakeGuitars } from '../../utils/mocks';
import Catalog from './catalog';
const fakeGuitarItem = makeFakeGuitarItem();
const fakeGuitars = [...makeFakeGuitars(), makeFakeGuitarItem()];
const fakeAllGuitars = [...fakeGuitars, ...makeFakeGuitars()];
const randomGuitarsType = getRandomGuitarsTypeArray();
const randomNumberStrings = getRandomNumberStringsArray();

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Catalog', () => {
  it('should render correctly', () => {
    const store = mockStore({
      GUITARS: {
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
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
          <Catalog />
        </Router>
      </Provider>);

    expect(screen.getByTestId('Catalog')).toBeInTheDocument();
  });
});
