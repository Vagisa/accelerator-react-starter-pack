import { Guitar } from '../../types/guitar';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getGuitarForCart = (state: State): Guitar | null => state[NameSpace.Order].guitarForCart;
export const getGuitarForComment = (state: State): Guitar | null => state[NameSpace.Order].guitarForComment;
