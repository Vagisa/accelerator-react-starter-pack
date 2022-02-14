import React, { useEffect, useRef } from 'react';
import FocusTrap from 'focus-trap-react';
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
  const refButton = useRef<HTMLButtonElement>(null);
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

  useEffect(() => {
    refButton?.current?.focus();
  }, [errorMessage]);

  if (errorMessage === '') {
    return null;
  }

  const handleClose = () => {
    dispatch(setErrorMessage(''));
    document.body.style.overflow = 'unset';
  };

  return (
    <FocusTrap active={!!errorMessage}>
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
              <button
                ref={refButton}
                onClick={handleClose}
                className="modal__close-btn button-cross"
                type="button" aria-label="Закрыть"
                autoFocus
              >
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

export default ErrorModal;
