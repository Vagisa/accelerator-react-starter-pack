import { Comment } from '../../types/comment';
import { Guitar } from '../../types/guitar';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getGuitarItem = (state: State): Guitar | undefined => state[NameSpace.Guitar].guitar;
export const getComments = (state: State): Comment[] => state[NameSpace.Guitar].comments;
