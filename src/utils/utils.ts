import {
  GuitarsType,
  SortOrderOptions,
  SortTypeOptions,
  TabButtonType } from '../const';

export const capitalize = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const formatNumber = (number: number | undefined): string =>
  number ? new Intl.NumberFormat('ru-RU').format(number) : '';

export const parseFormattedNumber = (number: string): number =>
  parseInt(number.replace(' ', ''), 10);

export const toggleArrayElement = <T>(arry: T[], value: T): T[] => {
  if (arry.includes(value)) {
    return arry.filter((el) => el !== value);
  } else {
    return [...arry, value];
  }
};

export const translateTypeGuitars = (type: string): string => {
  switch(type) {
    case GuitarsType.Acoustic:
      return 'Акустическая гитара';
    case GuitarsType.Electric:
      return 'Электрогитара';
    case GuitarsType.Ukulele:
      return 'Укулеле';
    default:
      return 'Неизвестно';
  }
};

export const translateSortOptions = (type: string): string => {
  switch(type) {
    case SortTypeOptions.Price:
      return 'price';
    case SortTypeOptions.Popular:
      return 'rating';
    case SortOrderOptions.Ascending:
      return 'asc';
    case SortOrderOptions.Descending:
      return 'desc';
    default:
      return 'Неизвестно';
  }
};

export const translateTabButton = (tab: string): string => {
  switch(tab) {
    case TabButtonType.Characteristics:
      return 'Характеристики';
    case TabButtonType.Description:
      return 'Описание';
    default:
      return 'Неизвестно';
  }
};
