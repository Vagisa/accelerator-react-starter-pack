import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { openModal, setSearchString } from '../../store/action';
import { capitalize, formatNumber } from '../../utils/utils';
import Rating from '../rating/rating';
import { GuitarItemProps } from './types';

function GuitarItem({guitar}: GuitarItemProps): JSX.Element {
  const dispatch = useDispatch();
  const handleModalButton = () =>
    dispatch(openModal(guitar));
  const handleSearchStringReset = () =>
    dispatch(dispatch(setSearchString('')));
  return (
    <div className="product-card">
      <img src={`/${guitar.previewImg}`} width="75" height="190" alt={guitar.name}/>
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true">
          <Rating rating={guitar.rating} width={12} height={11}/>
          <span className="rate__count">{guitar.comments.length}</span><span className="rate__message"></span>
        </div>
        <p className="product-card__title">{guitar.name} {capitalize(guitar.type)}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {formatNumber(guitar.price)} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
            handleSearchStringReset();
          }}
          className="button button--mini"
          to={AppRoute.Product.replace(':id', guitar.id.toString())}
        >
          Подробнее
        </Link>
        <Link
          onClick={handleModalButton}
          className="button button--red button--mini button--add-to-cart"
          to="#"
        >
          Купить
        </Link>
      </div>
    </div>
  );
}

export default GuitarItem;
