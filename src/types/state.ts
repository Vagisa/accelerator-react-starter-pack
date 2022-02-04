import { GuitarsType } from '../const';
import { RootState } from '../store/root-reducer';
import { Comment } from './comment';
import { Guitar } from './guitar';

export type Guitars = {
  guitars: Guitar[],
  allGuitars: Guitar[],
  sortType: string,
  sortOrder: string,
  searchString: string | undefined,
  priceFrom: number | undefined,
  priceTo: number | undefined,
  pageNumber: number,
  pageCount: number,
  typeGuitars: GuitarsType[],
  numberStrings: number[],
};

export type GuitarItem = {
  guitar: Guitar | undefined,
  comments: Comment[],
};

export type Error = {
  message: string,
};

export type Cart = {
  guitarForCart: Guitar | null,
  guitarForComment: Guitar | null,
};

export type State = RootState;
