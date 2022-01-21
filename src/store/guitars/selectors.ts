import { GuitarsType } from '../../const';
import { Guitar } from '../../types/guitar';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getMinPriceGuitar = (minPriceGuitar: Guitar, currentGuitar: Guitar) => (
  currentGuitar.price < minPriceGuitar.price ? currentGuitar : minPriceGuitar
);

const getMaxPriceGuitar = (maxPriceGuitar: Guitar, currentGuitar: Guitar) => (
  currentGuitar.price > maxPriceGuitar.price ? currentGuitar : maxPriceGuitar
);

export const getGuitarsList = (state: State): Guitar[] => state[NameSpace.Guitars].guitars.slice();
export const getAllGuitars = (state: State): Guitar[] => state[NameSpace.Guitars].allGuitars.slice();
export const getSearchString = (state: State): string | undefined => state[NameSpace.Guitars].searchString;
export const getTypeGuitars = (state: State): GuitarsType[] => state[NameSpace.Guitars].typeGuitars;
export const getNumberStrings = (state: State): number[] => state[NameSpace.Guitars].numberStrings;
export const getSortType = (state: State): string => state[NameSpace.Guitars].sortType;
export const getSortOrder = (state: State): string => state[NameSpace.Guitars].sortOrder;
export const getPriceFrom = (state: State): number | undefined => state[NameSpace.Guitars].priceFrom;
export const getPriceTo = (state: State): number | undefined => state[NameSpace.Guitars].priceTo;
export const getPageNumber = (state: State): number => state[NameSpace.Guitars].pageNumber;
export const getPageCount = (state: State): number => state[NameSpace.Guitars].pageCount;
export const getMinPrice = (state: State): number => {
  const guitarsList = state[NameSpace.Guitars].allGuitars;
  if (guitarsList.length === 0) {
    return 0;
  }
  return guitarsList.reduce(getMinPriceGuitar).price;
};
export const getMaxPrice = (state: State): number => {
  const guitarsList = state[NameSpace.Guitars].allGuitars;
  if (guitarsList.length === 0) {
    return 0;
  }
  return guitarsList.reduce(getMaxPriceGuitar).price;
};
