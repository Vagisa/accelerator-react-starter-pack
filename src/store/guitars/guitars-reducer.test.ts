import { datatype } from 'faker';
import { SortTypeOptions, SortOrderOptions, GuitarsType } from '../../const';
import {
  getFakePageCount,
  getRandomGuitarsTypeArray,
  getRandomNumberStringsArray,
  getRandomSortOrder,
  getRandomSortType,
  makeFakeGuitarItem,
  makeFakeGuitars } from '../../utils/mocks';
import { translateSortOptions } from '../../utils/utils';
import { changeSortOrder, changeSortType, setAllGuitars, setGuitars, setPageCount, setPageNumber, setPriceFrom, setPriceTo, setSearchString, toggleNumberString, toggleTypeGuitar } from '../action';
import { guitarsReducer } from './guitars-reducer';

const fakeGuitarItem = makeFakeGuitarItem();
const fakeGuitars = [...makeFakeGuitars(), makeFakeGuitarItem()];
const fakeAllGuitars = [...fakeGuitars, ...makeFakeGuitars()];
const randomSortType = getRandomSortType();
const randomSortOrder = getRandomSortOrder();
const randomGuitarsType = getRandomGuitarsTypeArray();
const randomNumberStrings = getRandomNumberStringsArray();
const fakePageCount = getFakePageCount();
const fakePageNumber = datatype.number(fakePageCount);
describe('Reducer: guitarsReducer', () => {
  it('should change the list of guitars', () => {
    const state = {
      guitars: makeFakeGuitars(),
      allGuitars: fakeAllGuitars,
      sortType: randomSortType,
      sortOrder: randomSortOrder,
      searchString: fakeGuitarItem.name,
      priceFrom: fakeGuitarItem.price,
      priceTo: fakeGuitarItem.price + 200,
      pageNumber: fakePageNumber,
      pageCount: fakePageCount,
      typeGuitars: randomGuitarsType,
      numberStrings: randomNumberStrings,
    };
    expect(guitarsReducer(state, setGuitars(fakeGuitars)))
      .toEqual({
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
        sortType: randomSortType,
        sortOrder: randomSortOrder,
        searchString: fakeGuitarItem.name,
        priceFrom: fakeGuitarItem.price,
        priceTo: fakeGuitarItem.price + 200,
        pageNumber: fakePageNumber,
        pageCount: fakePageCount,
        typeGuitars: randomGuitarsType,
        numberStrings: randomNumberStrings,
      });
  });
  it('should change the list of all guitars', () => {
    const state = {
      guitars: fakeGuitars,
      allGuitars: [],
      sortType: randomSortType,
      sortOrder: randomSortOrder,
      searchString: fakeGuitarItem.name,
      priceFrom: fakeGuitarItem.price,
      priceTo: fakeGuitarItem.price + 200,
      pageNumber: fakePageNumber,
      pageCount: fakePageCount,
      typeGuitars: randomGuitarsType,
      numberStrings: randomNumberStrings,
    };
    expect(guitarsReducer(state, setAllGuitars(fakeAllGuitars)))
      .toEqual({
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
        sortType: randomSortType,
        sortOrder: randomSortOrder,
        searchString: fakeGuitarItem.name,
        priceFrom: fakeGuitarItem.price,
        priceTo: fakeGuitarItem.price + 200,
        pageNumber: fakePageNumber,
        pageCount: fakePageCount,
        typeGuitars: randomGuitarsType,
        numberStrings: randomNumberStrings,
      });
  });
  it('should change the sort type', () => {
    const state = {
      guitars: fakeGuitars,
      allGuitars: fakeAllGuitars,
      sortType: translateSortOptions(SortTypeOptions.Popular),
      sortOrder: randomSortOrder,
      searchString: fakeGuitarItem.name,
      priceFrom: fakeGuitarItem.price,
      priceTo: fakeGuitarItem.price + 200,
      pageNumber: fakePageNumber,
      pageCount: fakePageCount,
      typeGuitars: randomGuitarsType,
      numberStrings: randomNumberStrings,
    };
    expect(guitarsReducer(state, changeSortType(SortTypeOptions.Price)))
      .toEqual({
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
        sortType: translateSortOptions(SortTypeOptions.Price),
        sortOrder: randomSortOrder,
        searchString: fakeGuitarItem.name,
        priceFrom: fakeGuitarItem.price,
        priceTo: fakeGuitarItem.price + 200,
        pageNumber: fakePageNumber,
        pageCount: fakePageCount,
        typeGuitars: randomGuitarsType,
        numberStrings: randomNumberStrings,
      });
  });
  it('should change the sort order', () => {
    const state = {
      guitars: fakeGuitars,
      allGuitars: fakeAllGuitars,
      sortType: randomSortType,
      sortOrder: SortOrderOptions.Default,
      searchString: fakeGuitarItem.name,
      priceFrom: fakeGuitarItem.price,
      priceTo: fakeGuitarItem.price + 200,
      pageNumber: fakePageNumber,
      pageCount: fakePageCount,
      typeGuitars: randomGuitarsType,
      numberStrings: randomNumberStrings,
    };
    expect(guitarsReducer(state, changeSortOrder(SortOrderOptions.Ascending)))
      .toEqual({
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
        sortType: randomSortType,
        sortOrder: SortOrderOptions.Ascending,
        searchString: fakeGuitarItem.name,
        priceFrom: fakeGuitarItem.price,
        priceTo: fakeGuitarItem.price + 200,
        pageNumber: fakePageNumber,
        pageCount: fakePageCount,
        typeGuitars: randomGuitarsType,
        numberStrings: randomNumberStrings,
      });
  });

  it('should change the search string value', () => {
    const state = {
      guitars: fakeGuitars,
      allGuitars: fakeAllGuitars,
      sortType: randomSortType,
      sortOrder: randomSortOrder,
      searchString: makeFakeGuitarItem().name,
      priceFrom: fakeGuitarItem.price,
      priceTo: fakeGuitarItem.price + 200,
      pageNumber: fakePageNumber,
      pageCount: fakePageCount,
      typeGuitars: randomGuitarsType,
      numberStrings: randomNumberStrings,
    };
    expect(guitarsReducer(state, setSearchString(fakeGuitarItem.name)))
      .toEqual({
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
        sortType: randomSortType,
        sortOrder: randomSortOrder,
        searchString: fakeGuitarItem.name,
        priceFrom: fakeGuitarItem.price,
        priceTo: fakeGuitarItem.price + 200,
        pageNumber: fakePageNumber,
        pageCount: fakePageCount,
        typeGuitars: randomGuitarsType,
        numberStrings: randomNumberStrings,
      });
  });
  it('should change the price from', () => {
    const state = {
      guitars: fakeGuitars,
      allGuitars: fakeAllGuitars,
      sortType: randomSortType,
      sortOrder: randomSortOrder,
      searchString: fakeGuitarItem.name,
      priceFrom: makeFakeGuitarItem().price,
      priceTo: fakeGuitarItem.price + 200,
      pageNumber: fakePageNumber,
      pageCount: fakePageCount,
      typeGuitars: randomGuitarsType,
      numberStrings: randomNumberStrings,
    };
    expect(guitarsReducer(state, setPriceFrom(fakeGuitarItem.price)))
      .toEqual({
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
        sortType: randomSortType,
        sortOrder: randomSortOrder,
        searchString: fakeGuitarItem.name,
        priceFrom: fakeGuitarItem.price,
        priceTo: fakeGuitarItem.price + 200,
        pageNumber: fakePageNumber,
        pageCount: fakePageCount,
        typeGuitars: randomGuitarsType,
        numberStrings: randomNumberStrings,
      });
  });
  it('should change the price to', () => {
    const state = {
      guitars: fakeGuitars,
      allGuitars: fakeAllGuitars,
      sortType: randomSortType,
      sortOrder: randomSortOrder,
      searchString: fakeGuitarItem.name,
      priceFrom: fakeGuitarItem.price,
      priceTo: makeFakeGuitarItem().price,
      pageNumber: fakePageNumber,
      pageCount: fakePageCount,
      typeGuitars: randomGuitarsType,
      numberStrings: randomNumberStrings,
    };
    expect(guitarsReducer(state, setPriceTo(fakeGuitarItem.price + 200)))
      .toEqual({
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
        sortType: randomSortType,
        sortOrder: randomSortOrder,
        searchString: fakeGuitarItem.name,
        priceFrom: fakeGuitarItem.price,
        priceTo: fakeGuitarItem.price + 200,
        pageNumber: fakePageNumber,
        pageCount: fakePageCount,
        typeGuitars: randomGuitarsType,
        numberStrings: randomNumberStrings,
      });
  });
  it('should change the page number', () => {
    const state = {
      guitars: fakeGuitars,
      allGuitars: fakeAllGuitars,
      sortType: randomSortType,
      sortOrder: randomSortOrder,
      searchString: fakeGuitarItem.name,
      priceFrom: fakeGuitarItem.price,
      priceTo: fakeGuitarItem.price + 200,
      pageNumber: 2,
      pageCount: 5,
      typeGuitars: randomGuitarsType,
      numberStrings: randomNumberStrings,
    };
    expect(guitarsReducer(state, setPageNumber(3)))
      .toEqual({
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
        sortType: randomSortType,
        sortOrder: randomSortOrder,
        searchString: fakeGuitarItem.name,
        priceFrom: fakeGuitarItem.price,
        priceTo: fakeGuitarItem.price + 200,
        pageNumber: 3,
        pageCount: 5,
        typeGuitars: randomGuitarsType,
        numberStrings: randomNumberStrings,
      });
  });
  it('should change the page count', () => {
    const state = {
      guitars: fakeGuitars,
      allGuitars: fakeAllGuitars,
      sortType: randomSortType,
      sortOrder: randomSortOrder,
      searchString: fakeGuitarItem.name,
      priceFrom: fakeGuitarItem.price,
      priceTo: fakeGuitarItem.price + 200,
      pageNumber: fakePageNumber,
      pageCount: 5,
      typeGuitars: randomGuitarsType,
      numberStrings: randomNumberStrings,
    };
    expect(guitarsReducer(state, setPageCount(7)))
      .toEqual({
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
        sortType: randomSortType,
        sortOrder: randomSortOrder,
        searchString: fakeGuitarItem.name,
        priceFrom: fakeGuitarItem.price,
        priceTo: fakeGuitarItem.price + 200,
        pageNumber: fakePageNumber,
        pageCount: 7,
        typeGuitars: randomGuitarsType,
        numberStrings: randomNumberStrings,
      });
  });
  it('enlarge list of guitar types', () => {
    const state = {
      guitars: fakeGuitars,
      allGuitars: fakeAllGuitars,
      sortType: randomSortType,
      sortOrder: randomSortOrder,
      searchString: fakeGuitarItem.name,
      priceFrom: fakeGuitarItem.price,
      priceTo: fakeGuitarItem.price + 200,
      pageNumber: fakePageNumber,
      pageCount: fakePageCount,
      typeGuitars: [GuitarsType.Acoustic, GuitarsType.Electric],
      numberStrings: randomNumberStrings,
    };
    expect(guitarsReducer(state, toggleTypeGuitar(GuitarsType.Ukulele)))
      .toEqual({
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
        sortType: randomSortType,
        sortOrder: randomSortOrder,
        searchString: fakeGuitarItem.name,
        priceFrom: fakeGuitarItem.price,
        priceTo: fakeGuitarItem.price + 200,
        pageNumber: fakePageNumber,
        pageCount: fakePageCount,
        typeGuitars: [GuitarsType.Acoustic, GuitarsType.Electric, GuitarsType.Ukulele],
        numberStrings: randomNumberStrings,
      });
  });
  it('reduce the list of guitar types', () => {
    const state = {
      guitars: fakeGuitars,
      allGuitars: fakeAllGuitars,
      sortType: randomSortType,
      sortOrder: randomSortOrder,
      searchString: fakeGuitarItem.name,
      priceFrom: fakeGuitarItem.price,
      priceTo: fakeGuitarItem.price + 200,
      pageNumber: fakePageNumber,
      pageCount: fakePageCount,
      typeGuitars: [GuitarsType.Acoustic, GuitarsType.Electric],
      numberStrings: randomNumberStrings,
    };
    expect(guitarsReducer(state, toggleTypeGuitar(GuitarsType.Electric)))
      .toEqual({
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
        sortType: randomSortType,
        sortOrder: randomSortOrder,
        searchString: fakeGuitarItem.name,
        priceFrom: fakeGuitarItem.price,
        priceTo: fakeGuitarItem.price + 200,
        pageNumber: fakePageNumber,
        pageCount: fakePageCount,
        typeGuitars: [GuitarsType.Acoustic],
        numberStrings: randomNumberStrings,
      });
  });
  it('enlarge list of number strings', () => {
    const state = {
      guitars: fakeGuitars,
      allGuitars: fakeAllGuitars,
      sortType: randomSortType,
      sortOrder: randomSortOrder,
      searchString: fakeGuitarItem.name,
      priceFrom: fakeGuitarItem.price,
      priceTo: fakeGuitarItem.price + 200,
      pageNumber: fakePageNumber,
      pageCount: fakePageCount,
      typeGuitars: randomGuitarsType,
      numberStrings: [4, 12],
    };
    expect(guitarsReducer(state, toggleNumberString(7)))
      .toEqual({
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
        sortType: randomSortType,
        sortOrder: randomSortOrder,
        searchString: fakeGuitarItem.name,
        priceFrom: fakeGuitarItem.price,
        priceTo: fakeGuitarItem.price + 200,
        pageNumber: fakePageNumber,
        pageCount: fakePageCount,
        typeGuitars: randomGuitarsType,
        numberStrings: [4, 12, 7],
      });
  });
  it('reduce the list of number strings', () => {
    const state = {
      guitars: fakeGuitars,
      allGuitars: fakeAllGuitars,
      sortType: randomSortType,
      sortOrder: randomSortOrder,
      searchString: fakeGuitarItem.name,
      priceFrom: fakeGuitarItem.price,
      priceTo: fakeGuitarItem.price + 200,
      pageNumber: fakePageNumber,
      pageCount: fakePageCount,
      typeGuitars: randomGuitarsType,
      numberStrings: [4, 12, 7],
    };
    expect(guitarsReducer(state, toggleNumberString(4)))
      .toEqual({
        guitars: fakeGuitars,
        allGuitars: fakeAllGuitars,
        sortType: randomSortType,
        sortOrder: randomSortOrder,
        searchString: fakeGuitarItem.name,
        priceFrom: fakeGuitarItem.price,
        priceTo: fakeGuitarItem.price + 200,
        pageNumber: fakePageNumber,
        pageCount: fakePageCount,
        typeGuitars: randomGuitarsType,
        numberStrings: [12, 7],
      });
  });
});
