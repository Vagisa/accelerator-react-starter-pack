import { commerce, database, datatype, finance, image, internet, random } from 'faker';
import { GuitarsType, SortOrderOptions, SortTypeOptions, STRINGS } from '../const';
import { Comment } from '../types/comment';
import { Guitar } from '../types/guitar';

const NUMBER_OF_FAKE_CASES = 10;

export const makeFakeComment = (): Comment => ({
  id: finance.currencyCode(),
  userName: internet.userName(),
  advantages: commerce.productDescription(),
  disadvantages: commerce.productDescription(),
  comment: commerce.productDescription(),
  rating: datatype.number(5),
  createAt: datatype.datetime().toString(),
  guitarId: datatype.number(),
} as Comment);

export const makeFakeComments = (): Comment[] => (
  new Array(datatype.number(NUMBER_OF_FAKE_CASES)).fill(null).map(makeFakeComment) as Comment[]);

export const makeFakeGuitarItem = (): Guitar => ({
  id: datatype.number(),
  name: commerce.productName(),
  vendorCode: finance.currencyCode(),
  type: database.type(),
  description: commerce.productDescription(),
  previewImg: image.image(),
  stringCount: datatype.number(),
  rating: datatype.number(5),
  price: datatype.number({min: 2000, max: 50000}),
  comments: makeFakeComments(),
} as Guitar);

export const makeFakeGuitars = (): Guitar[] => (
  new Array(datatype.number(NUMBER_OF_FAKE_CASES + 1)).fill(null).map(makeFakeGuitarItem) as Guitar[]);

export const getRandomSortType = (): SortTypeOptions => (
  random.arrayElement(Object.values(SortTypeOptions)) as SortTypeOptions);

export const getRandomSortOrder = (): SortOrderOptions => (
  random.arrayElement(Object.values(SortOrderOptions)) as SortOrderOptions);

export const getRandomGuitarsTypeArray = (): GuitarsType[] =>
  (new Array(datatype.number(Object.values(GuitarsType).length)).fill(null).map(
    (_, index) => Object.values(GuitarsType)[index]) as GuitarsType[]);

export const getRandomNumberStringsArray = (): number[] =>
  (new Array(datatype.number(STRINGS.length)).fill(null).map(
    (_, index) => STRINGS[index]) as number[]);

export const getFakeErrorMessage = (): string => commerce.productDescription();

export const getFakePageCount = (): number => datatype.number(5);
