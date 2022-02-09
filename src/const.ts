export enum AppRoute {
  Main = '/',
  Catalog = '/catalog/page_:id',
  Product = '/product/:id',
}

export enum APIRoute {
  Guitars = '/guitars',
  Guitar = '/guitars/',
  Comments = '/comments',
  Coupons = '/coupons',
  Orders = '/orders',
}

export enum SortTypeOptions {
  Default = 'не применено',
  Popular = 'по популярности',
  Price = 'по цене',
}

export enum SortOrderOptions {
  Default = 'not applied',
  Ascending = 'ascending',
  Descending = 'descending',
}

export enum GuitarsType {
  Acoustic = 'acoustic',
  Electric = 'electric',
  Ukulele = 'ukulele',
}

export enum TabButtonType {
  Characteristics = 'characteristics',
  Description = 'description',
}

export const STRING_COUNTS = {
  [GuitarsType.Acoustic]: [6, 7, 12],
  [GuitarsType.Electric]: [4, 6, 7],
  [GuitarsType.Ukulele]: [4],
};

export const STRINGS = [4, 6, 7, 12];

export const PRODUCTS_ON_PAGE = 9;

export const COMMENTS_ON_PAGE = 3;

export const PRICE_FROM_ID = 'priceMin';

export const PRICE_TO_ID = 'priceMax';

export const MAX_RATING = 5;
