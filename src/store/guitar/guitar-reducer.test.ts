import {
  makeFakeComments,
  makeFakeGuitarItem } from '../../utils/mocks';
import { setComments, setGuitar } from '../action';
import { guitarReducer } from './guitar-reducer';

const fakeGuitarItem = makeFakeGuitarItem();
const fakeComments = fakeGuitarItem.comments;
describe('Reducer: guitarReducer', () => {
  it('should change the guitar', () => {
    const state = {
      guitar: makeFakeGuitarItem(),
      comments: fakeComments,
    };
    expect(guitarReducer(state, setGuitar(fakeGuitarItem)))
      .toEqual({
        guitar: fakeGuitarItem,
        comments: fakeComments,
      });
  });
  it('should change the comments', () => {
    const state = {
      guitar: fakeGuitarItem,
      comments: makeFakeComments(),
    };
    expect(guitarReducer(state, setComments(fakeComments)))
      .toEqual({
        guitar: fakeGuitarItem,
        comments: fakeComments,
      });
  });
});
