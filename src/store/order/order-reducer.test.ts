import { makeFakeGuitarItem } from '../../utils/mocks';
import { clearGuitarForCart, clearGuitarForComment, setGuitarForCart, setGuitarForComment } from '../action';
import { orderReducer } from './order-reducer';

const fakeGuitarItem = makeFakeGuitarItem();
describe('Reducer: orderReducer', () => {
  it('should open modal for adding to cart', () => {
    const state = {
      guitarForCart: null,
      guitarForComment: null,
      postedComment: null,
    };
    expect(orderReducer(state, setGuitarForCart(fakeGuitarItem)))
      .toEqual({
        guitarForCart: fakeGuitarItem,
        guitarForComment: null,
        postedComment: null,
      });
  });
  it('should close modal for adding to cart', () => {
    const state = {
      guitarForCart: fakeGuitarItem,
      guitarForComment: null,
      postedComment: null,
    };
    expect(orderReducer(state, clearGuitarForCart()))
      .toEqual({
        guitarForCart: null,
        guitarForComment: null,
        postedComment: null,
      });
  });
  it('should open modal for adding to comment', () => {
    const state = {
      guitarForCart: null,
      guitarForComment: null,
      postedComment: null,
    };
    expect(orderReducer(state, setGuitarForComment(fakeGuitarItem)))
      .toEqual({
        guitarForCart: null,
        guitarForComment: fakeGuitarItem,
        postedComment: null,
      });
  });
  it('should close modal for adding to comment', () => {
    const state = {
      guitarForCart: null,
      guitarForComment: fakeGuitarItem,
      postedComment: null,
    };
    expect(orderReducer(state, clearGuitarForComment()))
      .toEqual({
        guitarForCart: null,
        guitarForComment: null,
        postedComment: null,
      });
  });
});
