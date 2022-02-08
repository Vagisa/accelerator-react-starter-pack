import { APIRoute, PRODUCTS_ON_PAGE } from '../const';
import { ThunkActionResult } from '../types/action';
import { Comment } from '../types/comment';
import { Guitar } from '../types/guitar';
import { CommentPost } from '../types/post';
import { translateSortOptions } from '../utils/utils';
import {
  setComments,
  setErrorMessage,
  setGuitar,
  setGuitars,
  setAllGuitars,
  setPageCount,
  addComment,
  clearGuitarForComment} from './action';
import { NameSpace } from './root-reducer';

export const fetchGuitarsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const state = _getState();
    try {
      const {data, headers} = await api.get<Guitar[]>(
        APIRoute.Guitars, {
          params: {
            _embed: 'comments',
            'name_like': state[NameSpace.Guitars].searchString,
            type: state[NameSpace.Guitars].typeGuitars,
            _order: translateSortOptions(state[NameSpace.Guitars].sortOrder),
            _sort: state[NameSpace.Guitars].sortType,
            _start: (state[NameSpace.Guitars].pageNumber - 1) * PRODUCTS_ON_PAGE,
            _end: state[NameSpace.Guitars].pageNumber * PRODUCTS_ON_PAGE,
            'price_gte': state[NameSpace.Guitars].priceFrom,
            'price_lte': state[NameSpace.Guitars].priceTo,
            stringCount: state[NameSpace.Guitars].numberStrings,
          },
        },
      );
      const totalItems = parseInt(headers['x-total-count'], 10);
      const pageCount = Math.ceil(totalItems / PRODUCTS_ON_PAGE);
      dispatch(setGuitars(data));
      dispatch(setPageCount(pageCount));
    } catch(error) {
      dispatch(setErrorMessage('Произошла ошибка, перезагрузите страницу'));
    }
  };

export const fetchAllGuitarsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<Guitar[]>(APIRoute.Guitars);
      dispatch(setAllGuitars(data));
    } catch(error) {
      dispatch(setErrorMessage('Произошла ошибка, перезагрузите страницу'));
    }
  };

export const fetchGuitarItemAction = (guitarId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Guitar>(APIRoute.Guitar + guitarId);
    dispatch(setGuitar(data));
  };

export const fetchCommentsAction = (guitarId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Comment[]>(APIRoute.Guitar + guitarId + APIRoute.Comments);
    dispatch(setComments(data));
  };

export const postCommentAction = (comment: CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<Comment>(APIRoute.Comments, comment);
    dispatch(addComment(data));
    dispatch(clearGuitarForComment());
  };
