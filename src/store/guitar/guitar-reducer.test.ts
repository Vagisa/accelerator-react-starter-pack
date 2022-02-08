import {
  makeFakeComment,
  makeFakeComments,
  makeFakeGuitarItem } from '../../utils/mocks';
import { addComment, setComments, setGuitar } from '../action';
import { guitarReducer } from './guitar-reducer';

const fakeGuitarItem = makeFakeGuitarItem();
const fakeComments = makeFakeComments();
const fakeComment = makeFakeComment();
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
  it('adds a comment', () => {
    const state = {
      guitar: fakeGuitarItem,
      comments: fakeComments,
    };
    expect(guitarReducer(state, addComment(fakeComment)))
      .toEqual({
        guitar: fakeGuitarItem,
        comments: [fakeComment, ...fakeComments],
      });
  });
});
