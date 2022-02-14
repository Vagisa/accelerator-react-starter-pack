import FocusTrap from 'focus-trap-react';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearGuitarForCart } from '../../store/action';
import { getGuitarForCart } from '../../store/order/selectors';
import { formatNumber, translateTypeGuitars } from '../../utils/utils';

const modalStyle: React.CSSProperties = {
  position: 'relative',
  width: '550px',
  height: '440px',
  marginBottom: '50px',
};

function ModalCartAdd(): JSX.Element | null {
  const guitar = useSelector(getGuitarForCart);
  const refButton = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscFunction =(evt: KeyboardEvent) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        dispatch(clearGuitarForCart());
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('keydown', handleEscFunction);
    return () => {
      document.removeEventListener('keydown', handleEscFunction);
    };
  }, [dispatch]);

  useEffect(() => {
    refButton?.current?.focus();
  }, [guitar]);

  if (!guitar) {
    return null;
  }

  const handleClose = () => {
    dispatch(clearGuitarForCart());
    document.body.style.overflow = 'unset';
  };

  return (
    <FocusTrap active={!!guitar}>
      <div style={modalStyle}>
        <div className="modal is-active modal-for-ui-kit">
          <div className="modal__wrapper">
            <div
              onClick={handleClose}
              className="modal__overlay" data-close-modal
            >
            </div>
            <div className="modal__content">
              <h2 className="modal__header title title--medium">Добавить товар в корзину</h2>
              <div className="modal__info">
                <img className="modal__img" src={`/${guitar.previewImg}`} width="67" height="137" alt={guitar.name}/>
                <div className="modal__info-wrapper">
                  <h3 className="modal__product-name title title--little title--uppercase">
                    {guitar.name}
                  </h3>
                  <p className="modal__product-params modal__product-params--margin-11">
                    {`Артикул: ${guitar.vendorCode}`}
                  </p>
                  <p className="modal__product-params">{`${translateTypeGuitars(guitar.type)}, ${guitar.stringCount} струнная`}</p>
                  <p className="modal__price-wrapper">
                    <span className="modal__price">Цена:</span>
                    <span className="modal__price">{formatNumber(guitar.price)} ₽</span>
                  </p>
                </div>
              </div>
              <div className="modal__button-container">
                <button type="button"
                  ref={refButton}
                  className="button button--red button--big modal__button modal__button--add"
                  autoFocus
                >
                  Добавить в корзину
                </button>
              </div>
              <button onClick={handleClose} className="modal__close-btn button-cross" type="button" aria-label="Закрыть">
                <span className="button-cross__icon"></span>
                <span className="modal__close-btn-interactive-area"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
}

export default ModalCartAdd;
