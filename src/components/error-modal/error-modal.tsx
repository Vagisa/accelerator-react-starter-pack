import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage } from '../../store/action';
import { getErrorMessage } from '../../store/error/selectors';

const modalStyle: React.CSSProperties = {
  position: 'relative',
  width: '550px',
  height: '440px',
  marginBottom: '50px',
};

function ErrorModal(): JSX.Element | null {
  const errorMessage = useSelector(getErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscFunction =(evt: KeyboardEvent) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        dispatch(setErrorMessage(''));
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('keydown', handleEscFunction);
    return () => {
      document.removeEventListener('keydown', handleEscFunction);
    };
  }, [dispatch]);

  if (errorMessage === '') {
    return null;
  }

  const handleClose = () => {
    dispatch(setErrorMessage(''));
    document.body.style.overflow = 'unset';
  };

  return (
    <div style={modalStyle}>
      <div className="modal is-active modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal></div>
          <div className="modal__content">
            <h2 className="modal__header title title--medium">Ошибка</h2>
            <div className="modal__info">
              <div className="modal__info-wrapper">
                <h3 className="modal__product-name title title--little title--uppercase">
                  Внимание!
                </h3>
                <p className="modal__product-params modal__product-params--margin-11">
                  {errorMessage}
                </p>
              </div>
            </div>
            <button onClick={handleClose} className="modal__close-btn button-cross" type="button" aria-label="Закрыть">
              <span className="button-cross__icon"></span>
              <span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
