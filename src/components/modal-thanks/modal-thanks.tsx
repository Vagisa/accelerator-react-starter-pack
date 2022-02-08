import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { clearPostedComment } from '../../store/action';
import { getPostedComment } from '../../store/order/selectors';

const modalStyle: React.CSSProperties = {
  position: 'relative',
  width: '550px',
  height: '410px',
  marginBottom: '50px',
};

function ModalThanks(): JSX.Element | null {
  const postedСomment = useSelector(getPostedComment);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscFunction =(evt: KeyboardEvent) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        dispatch(clearPostedComment());
      }
    };

    document.addEventListener('keydown', handleEscFunction);
    return () => {
      document.removeEventListener('keydown', handleEscFunction);
    };
  }, [dispatch]);

  if (!postedСomment) {
    return null;
  }

  const handleClose = () => {
    dispatch(clearPostedComment());
  };

  return (
    <div style={modalStyle}>
      <div className="modal is-active modal--success modal-for-ui-kit">
        <div className="modal__wrapper">
          <div
            onClick={handleClose}
            className="modal__overlay" data-close-modal
          >
          </div>
          <div className="modal__content">
            <svg className="modal__icon" width="26" height="20" aria-hidden="true">
              <use xlinkHref="#icon-success"></use>
            </svg>
            <p className="modal__message">
              Спасибо за ваш отзыв!
            </p>
            <div className="modal__button-container modal__button-container--review">
              <Link
                to={AppRoute.Catalog}
                onClick={handleClose}
                className="button button--small modal__button modal__button--review"
              >
                К покупкам!
              </Link>
            </div>
            <button
              onClick={handleClose}
              className="modal__close-btn button-cross"
              type="button" aria-label="Закрыть"
            >
              <span className="button-cross__icon"></span>
              <span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalThanks;
