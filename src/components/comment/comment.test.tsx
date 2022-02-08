import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { getRandomGuitarsTypeArray, getRandomNumberStringsArray, makeFakeComment, makeFakeComments, makeFakeGuitarItem, makeFakeGuitars } from '../../utils/mocks';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Comment from './comment';

const fakeGuitarItem = makeFakeGuitarItem();
const fakeComment = makeFakeComment();
const fakeComments = [...makeFakeComments(), fakeComment];
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
    comments: fakeComments,
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

describe('Component: Comment', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Comment comment={fakeComment} />
        </Router>
      </Provider>);
    expect(screen.getByText(fakeComment.userName)).toBeInTheDocument();
    expect(screen.getByText(fakeComment.disadvantage)).toBeInTheDocument();
    expect(screen.getByText(fakeComment.comment)).toBeInTheDocument();
  });
});
