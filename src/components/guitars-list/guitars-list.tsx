import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SortOrderOptions, SortTypeOptions } from '../../const';
import { changeSortOrder, changeSortType } from '../../store/action';
import { fetchGuitarsAction } from '../../store/api-actions';
import { getGuitarsList, getSortOrder, getSortType } from '../../store/guitars/selectors';
import { Guitar } from '../../types/guitar';
import GuitarItem from '../guitar-item/guitar-item';

function GuitarsList(): JSX.Element {
  const guitars = useSelector(getGuitarsList);
  const sortType = useSelector(getSortType);
  const sortOrder = useSelector(getSortOrder);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGuitarsAction());
  }, [dispatch]);

  const handleSortTypeChange = (type: SortTypeOptions) => {
    dispatch(changeSortType(type));
    dispatch(fetchGuitarsAction());
  };
  const handleSortOrderChange = (type: SortOrderOptions) => {
    dispatch(changeSortOrder(type));
    dispatch(fetchGuitarsAction());
  };

  if (sortType === SortTypeOptions.Popular) {
    guitars.sort((first: Guitar, second: Guitar) => first.rating - second.rating);
  }
  if (sortType === SortTypeOptions.Price) {
    guitars.sort((first: Guitar, second: Guitar) =>  first.price - second.price);
  }
  if (sortOrder === SortOrderOptions.Descending) {
    guitars.reverse();
  }
  if (sortType === SortTypeOptions.Default && sortOrder !== SortOrderOptions.Default) {
    handleSortTypeChange(SortTypeOptions.Price);
  }

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
            ${sortOrder === SortOrderOptions.Ascending ? 'catalog-sort__order-button--active' : ''}`}
            aria-label="По возрастанию" tabIndex={-1}
          >
          </button>
          <button
            onClick={() => handleSortOrderChange(SortOrderOptions.Descending)}
            className={`catalog-sort__order-button catalog-sort__order-button--down
            ${sortOrder === SortOrderOptions.Descending ? 'catalog-sort__order-button--active' : ''}`}
            aria-label="По убыванию"
          >
          </button>
        </div>
      </div>
      <div className="cards catalog__cards">
        {
          guitars.map((guitar) => (
            <GuitarItem guitar={guitar} key={guitar.id} />
          ))
        }
      </div>
      <div className="pagination page-content__pagination">
        <ul className="pagination__list">
          <li className="pagination__page pagination__page--active">
            <Link className="link pagination__page-link" to="1">
              1
            </Link>
          </li>
          <li className="pagination__page">
            <Link className="link pagination__page-link" to="2">
              2
            </Link>
          </li>
          <li className="pagination__page">
            <Link className="link pagination__page-link" to="3">
              3
            </Link>
          </li>
          <li className="pagination__page pagination__page--next" id="next">
            <Link className="link pagination__page-link" to="2">
              Далее
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default GuitarsList;
