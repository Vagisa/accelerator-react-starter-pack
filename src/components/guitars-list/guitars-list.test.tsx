import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { datatype } from 'faker';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { getRandomGuitarsTypeArray, getRandomNumberStringsArray, getRandomSortOrder, getRandomSortType, makeFakeGuitarItem, makeFakeGuitars } from '../../utils/mocks';
import GuitarsList from './guitars-list';
const fakeGuitarItem = makeFakeGuitarItem();
const fakeGuitars = [...makeFakeGuitars(), makeFakeGuitarItem()];
const randomSortType = getRandomSortType();
const randomSortOrder = getRandomSortOrder();
const randomGuitarsType = getRandomGuitarsTypeArray();
const randomNumberStrings = getRandomNumberStringsArray();
const fakePageCount = datatype.number(5);

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: GuitarsList', () => {
  it('should render correctly', () => {
    const store = mockStore({
      GUITARS: {
        guitars: fakeGuitars,
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
          <GuitarsList />
        </Router>
      </Provider>);

    expect(screen.getByText(/Сортировать:/i)).toBeInTheDocument();
    expect(screen.getByTestId('GuitarsList')).toBeInTheDocument();
  });
});
