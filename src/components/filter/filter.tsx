import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GuitarsType, PRICE_FROM_ID, PRICE_TO_ID, StringCounts, STRINGS } from '../../const';
import { setPriceFrom, setPriceTo, toggleNumberString, toggleTypeGuitar } from '../../store/action';
import { fetchGuitarsAction } from '../../store/api-actions';
import {
  getGuitarsList,
  getMaxPrice,
  getMinPrice,
  getNumberStrings,
  getPriceFrom,
  getPriceTo,
  getTypeGuitars } from '../../store/guitars/selectors';
import { translateTypeGuitars } from '../../utils/utils';

function Filter(): JSX.Element {
  const guitars = useSelector(getGuitarsList);
  const priceFrom = useSelector(getPriceFrom);
  const priceTo = useSelector(getPriceTo);
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);
  const typeGuitars = useSelector(getTypeGuitars);
  const numberStrings = useSelector(getNumberStrings);
  const dispatch = useDispatch();

  const handlePriceChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const price = parseInt(evt.target.value, 10);
    switch(evt.target.id) {
      case PRICE_FROM_ID:
        dispatch(setPriceFrom(price));
        break;
      case PRICE_TO_ID:
        dispatch(setPriceTo(price));
        break;
    }
  };

  const handlePriceFieldBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    let price: number | undefined = parseInt(evt.target.value, 10);
    if (isNaN(price)) {
      price = undefined;
    } else {
      if (price < minPrice) {
        price = minPrice;
      }
      if (price > maxPrice) {
        price = maxPrice;
      }
    }
    switch(evt.target.id) {
      case PRICE_FROM_ID:
        dispatch(setPriceFrom(price));
        dispatch(fetchGuitarsAction());
        break;
      case PRICE_TO_ID:
        dispatch(setPriceTo(price));
        dispatch(fetchGuitarsAction());
        break;
    }
  };

  const handleTypeGuitarsChange = (type: GuitarsType) => {
    dispatch(toggleTypeGuitar(type));
    dispatch(fetchGuitarsAction());
  };

  const handleNumberStringsChange = (string: number) => {
    dispatch(toggleNumberString(string));
    dispatch(fetchGuitarsAction());
  };

  let avaliableStringNumbers: number[] = [];

  if (typeGuitars.length === 0) {
    avaliableStringNumbers = STRINGS;
  }
  typeGuitars.forEach((typeGuitar) =>
    avaliableStringNumbers = [...avaliableStringNumbers, ...StringCounts[typeGuitar]],
  );


  const availiableGuitarTypes = Object.values(GuitarsType).filter((guitar) => {
    if (numberStrings.length === 0) {
      return true;
    }
    if (typeGuitars.includes(guitar)) {
      return true;
    }
    return numberStrings.some((stringNumber) => StringCounts[guitar].includes(stringNumber));
  });

  const filterdeGuitars = guitars.sort((first, second) => first.price - second.price);

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Цена, ₽</legend>
        <div className="catalog-filter__price-range">
          <div className="form-input">
            <label className="visually-hidden">Минимальная цена</label>
            <input
              onChange={handlePriceChange}
              onBlur={handlePriceFieldBlur}
              type="number"
              value={priceFrom}
              placeholder={
                filterdeGuitars.length !== 0
                  ? filterdeGuitars[0].price.toString()
                  : minPrice.toString()
              }
              id={PRICE_FROM_ID}
              name="от"
            />
          </div>
          <div className="form-input">
            <label className="visually-hidden">Максимальная цена</label>
            <input
              onChange={handlePriceChange}
              onBlur={handlePriceFieldBlur}
              type="number"
              value={priceTo}
              placeholder={
                filterdeGuitars.length !== 0
                  ? filterdeGuitars[filterdeGuitars.length - 1].price.toString()
                  : maxPrice.toString()
              }
              id={PRICE_TO_ID}
              name="до"
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Тип гитар</legend>
        {
          Object.values(GuitarsType).map((type) => (
            <div key={type} className="form-checkbox catalog-filter__block-item">
              <input
                onChange={() => handleTypeGuitarsChange(type)}
                className="visually-hidden"
                type="checkbox"
                id={type}
                name={type}
                checked={typeGuitars.includes(type)}
                disabled={!availiableGuitarTypes.includes(type)}
              />
              <label htmlFor={type}>{translateTypeGuitars(type)}</label>
            </div>
          ))
        }
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>
        {
          STRINGS.map((string) => (
            <div key={string} className="form-checkbox catalog-filter__block-item">
              <input
                onChange={() => handleNumberStringsChange(string)}
                className="visually-hidden"
                type="checkbox"
                id={`${string}-strings`}
                name={`${string}-strings`}
                checked={numberStrings.includes(string)}
                disabled={!avaliableStringNumbers.includes(string)}
              />
              <label htmlFor={`${string}-strings`}>{string}</label>
            </div>
          ))
        }
      </fieldset>
    </form>
  );
}

export default Filter;
