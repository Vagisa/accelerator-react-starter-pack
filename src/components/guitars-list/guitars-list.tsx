import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SortOrderOptions, SortTypeOptions } from '../../const';
import { changeSortOrder, changeSortType } from '../../store/action';
import { fetchGuitarsAction } from '../../store/api-actions';
import { getGuitarsList, getSortOrder, getSortType } from '../../store/guitars/selectors';
import GuitarItem from '../guitar-item/guitar-item';
import Pagination from '../pagination/pagination';

function GuitarsList(): JSX.Element {
  const guitars = useSelector(getGuitarsList);
  const sortType = useSelector(getSortType);
  const sortOrder = useSelector(getSortOrder);

  const dispatch = useDispatch();

  const handleSortTypeChange = (type: SortTypeOptions) => {
    dispatch(changeSortType(type));
    dispatch(fetchGuitarsAction());
  };
  const handleSortOrderChange = (type: SortOrderOptions) => {
    dispatch(changeSortOrder(type));
    if (sortType === SortTypeOptions.Default) {
      dispatch(changeSortType(SortTypeOptions.Price));
    }
    dispatch(fetchGuitarsAction());
  };

  return (
    <React.Fragment>
      <div className="catalog-sort">
        <h2 className="catalog-sort__title">Сортировать:</h2>
        <div className="catalog-sort__type">
          <button
            onClick={() => handleSortTypeChange(SortTypeOptions.Price)}
            className={`catalog-sort__type-button
            ${sortType === SortTypeOptions.Price ? 'catalog-sort__type-button--active' : ''}`}
            aria-label="по цене" tabIndex={-1}
          >
            по цене
          </button>
          <button
            onClick={() => handleSortTypeChange(SortTypeOptions.Popular)}
            className={`catalog-sort__type-button
            ${sortType === SortTypeOptions.Popular ? 'catalog-sort__type-button--active' : ''}`}
            aria-label="по популярности"
          >
            по популярности
          </button>
        </div>
        <div className="catalog-sort__order">
          <button
            onClick={() => handleSortOrderChange(SortOrderOptions.Ascending)}
            className={`catalog-sort__order-button catalog-sort__order-button--up
            ${sortOrder === SortOrderOptions.Ascending ? ' catalog-sort__order-button--active ' : ''}`}
            aria-label="По возрастанию" tabIndex={-1}
          >
          </button>
          <button
            onClick={() => handleSortOrderChange(SortOrderOptions.Descending)}
            className={`catalog-sort__order-button catalog-sort__order-button--down
            ${sortOrder === SortOrderOptions.Descending ? ' catalog-sort__order-button--active ' : ''}`}
            aria-label="По убыванию"
          >
          </button>
        </div>
      </div>
      <div className="cards catalog__cards" data-testid="GuitarsList">
        {
          guitars.map((guitar) => (
            <GuitarItem guitar={guitar} key={guitar.id} />
          ))
        }
      </div>
      <Pagination />
    </React.Fragment>
  );
}

export default GuitarsList;
