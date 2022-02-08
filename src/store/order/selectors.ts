import { Guitar } from '../../types/guitar';
import { CommentPost } from '../../types/post';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getGuitarForCart = (state: State): Guitar | null => state[NameSpace.Order].guitarForCart;
export const getGuitarForComment = (state: State): Guitar | null => state[NameSpace.Order].guitarForComment;
export const getPostedComment = (state: State): CommentPost | null => state[NameSpace.Order].postedComment;
