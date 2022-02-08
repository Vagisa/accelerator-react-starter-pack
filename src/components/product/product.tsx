import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppRoute, COMMENTS_ON_PAGE, TabButtonType } from '../../const';
import { clearGuitarForCart, setGuitarForCart, setGuitarForComment } from '../../store/action';
import { fetchCommentsAction, fetchGuitarItemAction } from '../../store/api-actions';
import { getComments, getGuitarItem } from '../../store/guitar/selectors';
import { formatNumber, translateTabButton, translateTypeGuitars } from '../../utils/utils';
import Comment from '../comment/comment';
import Footer from '../footer/footer';
import Header from '../header/header';
import ModalCartAdd from '../modal-cart-add/modal-cart-add';
import ModalCommentAdd from '../modal-comment-add/modal-comment-add';
import NotFound from '../not-found/not-found';
import Rating from '../rating/rating';

function Product(): JSX.Element {
  const guitar = useSelector(getGuitarItem);
  const comments = useSelector(getComments);
  const [commentsOfPage, setCommentsOfPage] = useState<number>(COMMENTS_ON_PAGE);
  const {id} = useParams<{id: string}>();
  const [tab, setTab] = useState(TabButtonType.Characteristics);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGuitarItemAction(id));
    dispatch(fetchCommentsAction(id));
    return () => {
      dispatch(clearGuitarForCart());
    };
  }, [dispatch, id]);

  const handleModalForCartButton = () => {
    if (guitar) {
      dispatch(setGuitarForCart(guitar));
    }
  };

  const handleModalForCommentButton = () => {
    if (guitar) {
      dispatch(setGuitarForComment(guitar));
    }
  };

  const commentsArray = [];
  for (let i = 0; i < commentsOfPage && i < comments.length; i++) {
    commentsArray.push(
      <Comment comment={comments[i]} key={comments[i].id} />,
    );
  }
  if (!guitar) {
    return <NotFound />;
  }
  return (
    <div className="wrapper">
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Товар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item">
              <Link className="link" to={AppRoute.Main}>Главная</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="link" to={AppRoute.Catalog}>Каталог</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="link" to="#">{guitar.name}</Link>
            </li>
          </ul>
          <div className="product-container">
            <img
              className="product-container__img"
              src={`/${guitar.previewImg}`}
              width="90" height="235"
              alt={guitar.name}
            />
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">
                {guitar.name}
              </h2>
              <div className="rate product-container__rating" aria-hidden="true">
                <Rating rating={4} width={14} height={14} />
                <span className="rate__count">{comments.length}</span>
                <span className="rate__message"></span>
              </div>
              <div className="tabs">
                {
                  Object.values(TabButtonType).map((type) => (
                    <Link
                      key={type}
                      onClick={(evt) => {
                        evt.preventDefault();
                        setTab(type);
                      }}
                      className={`button  ${!(tab === type) ? 'button--black-border' : ''} button--medium tabs__button`}
                      to={`#${type}`}
                    >
                      {translateTabButton(type)}
                    </Link>
                  ))
                }
                <div className="tabs__content" id="characteristics">
                  <table className={`tabs__table  ${tab === TabButtonType.Description ? 'hidden' : ''}`}>
                    <tbody>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Артикул:</td>
                        <td className="tabs__value">{guitar.vendorCode}</td>
                      </tr>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Тип:</td>
                        <td className="tabs__value">{translateTypeGuitars(guitar.type)}</td>
                      </tr>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Количество струн:</td>
                        <td className="tabs__value">{`${guitar.stringCount} струнная`}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className={`tabs__product-description
                  ${tab === TabButtonType.Characteristics ? 'hidden' : ''}`}
                  >
                    {guitar.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="product-container__price-wrapper">
              <p className="product-container__price-info product-container__price-info--title">
                Цена:
              </p>
              <p className="product-container__price-info product-container__price-info--value">
                {formatNumber(guitar.price)} ₽
              </p>
              <Link
                onClick={handleModalForCartButton}
                className="button button--red button--big product-container__button"
                to="#"
              >
                Добавить в корзину
              </Link>
            </div>
          </div>
          <section className="reviews">
            <h3 className="reviews__title title title--bigger">
              Отзывы
            </h3>
            <Link
              onClick={handleModalForCommentButton}
              className="button button--red-border button--big reviews__sumbit-button"
              to="#"
            >
              Оставить отзыв
            </Link>
            {commentsArray}
            {comments.length > commentsOfPage && (
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  setCommentsOfPage(comments.length);
                }}
                className="button button--medium reviews__more-button"
              >
                Показать еще отзывы
              </button>
            )}
            {comments.length > 0 && (
              <Link
                onClick={() => window.scrollTo(0, 0)}
                className="button button--up button--red-border button--big reviews__up-button"
                to="#header"
              >
                Наверх
              </Link>
            )}
          </section>
        </div>
      </main>
      <Footer />
      <ModalCartAdd />
      <ModalCommentAdd />
    </div>
  );
}

export default Product;
