import React, { useEffect, useState } from 'react';
import FocusTrap from 'focus-trap-react';
import { useDispatch, useSelector } from 'react-redux';
import { clearGuitarForComment } from '../../store/action';
import { postCommentAction } from '../../store/api-actions';
import { getGuitarForComment } from '../../store/order/selectors';

const modalStyle: React.CSSProperties = {
  position: 'relative',
  width: '550px',
  height: '610px',
  marginBottom: '50px',
};

function ModalCommentAdd(): JSX.Element | null {
  const guitar = useSelector(getGuitarForComment);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [advantage, setAdvantage] = useState('');
  const [disadvantage, setDisadvantage] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorRate, setErrorRate] = useState('');

  useEffect(() => {
    const handleEscFunction =(evt: KeyboardEvent) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        dispatch(clearGuitarForComment());
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('keydown', handleEscFunction);
    return () => {
      document.removeEventListener('keydown', handleEscFunction);
    };
  }, [dispatch]);

  if (!guitar) {
    return null;
  }

  const handleClose = () => {
    dispatch(clearGuitarForComment());
    document.body.style.overflow = 'unset';
  };

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(evt.target.value, 10));
  };

  const handleSubmit = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    if (userName ==='') {
      setErrorName('Заполните поле');
    } else {
      setErrorName('');
    }
    if (rating === 0) {
      setErrorRate('Поставьте оценку');
    } else {
      setErrorRate('');
    }
    if (userName === '' || rating === 0) {
      return;
    }
    dispatch(postCommentAction({
      guitarId: guitar.id,
      userName,
      comment: comment !== '' ? comment : '-',
      rating,
      advantage: advantage !== '' ? advantage : '-',
      disadvantage: disadvantage !== '' ? disadvantage : '-',
    }));
    setUserName('');
    setComment('');
    setRating(0);
    setAdvantage('');
    setDisadvantage('');
  };

  return (
    <FocusTrap active={!!guitar}>
      <div style={modalStyle}>
        <div className="modal is-active modal--review modal-for-ui-kit">
          <div className="modal__wrapper">
            <div
              onClick={handleClose}
              className="modal__overlay" data-close-modal
            >
            </div>
            <div className="modal__content">
              <h2 className="modal__header modal__header--review title title--medium">
                Оставить отзыв
              </h2>
              <h3 className="modal__product-name title title--medium-20 title--uppercase">
                {guitar.name}
              </h3>
              <form className="form-review">
                <div className="form-review__wrapper">
                  <div className="form-review__name-wrapper">
                    <label
                      className="form-review__label form-review__label--required"
                      htmlFor="user-name"
                    >
                      Ваше Имя
                    </label>
                    <input
                      onChange={(evt) => {setUserName(evt.target.value);}}
                      className="form-review__input form-review__input--name"
                      value={userName}
                      id="user-name"
                      data-testid="user-name"
                      type="text"
                      autoComplete="off"
                      required
                      autoFocus
                    />
                    <span className="form-review__warning">
                      {errorName}
                    </span>
                  </div>
                  <div>
                    <span className="form-review__label form-review__label--required">
                      Ваша Оценка
                    </span>
                    <div className="rate rate--reverse">
                      <input
                        onChange={handleRatingChange}
                        checked={rating === 5}
                        className="visually-hidden"
                        type="radio"
                        id="star-5"
                        name="rate"
                        value="5"
                      />
                      <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                      <input
                        onChange={handleRatingChange}
                        checked={rating === 4}
                        className="visually-hidden"
                        type="radio"
                        id="star-4"
                        name="rate"
                        value="4"
                      />
                      <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                      <input
                        onChange={handleRatingChange}
                        checked={rating === 3}
                        className="visually-hidden"
                        type="radio"
                        id="star-3"
                        name="rate"
                        value="3"
                      />
                      <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                      <input
                        onChange={handleRatingChange}
                        checked={rating === 2}
                        className="visually-hidden"
                        type="radio"
                        id="star-2"
                        name="rate"
                        value="2"
                      />
                      <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                      <input
                        onChange={handleRatingChange}
                        checked={rating === 1}
                        className="visually-hidden"
                        type="radio"
                        id="star-1"
                        name="rate"
                        value="1"
                      />
                      <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
                      <span className="rate__count"></span>
                      <span className="rate__message">
                        {errorRate}
                      </span>
                    </div>
                  </div>
                </div>
                <label className="form-review__label" htmlFor="pros">
                  Достоинства
                </label>
                <input
                  onChange={(evt) => {setAdvantage(evt.target.value);}}
                  className="form-review__input"
                  value={advantage}
                  id="pros"
                  data-testid="pros"
                  type="text"
                  autoComplete="off"
                />
                <label className="form-review__label" htmlFor="disadvantage">
                  Недостатки
                </label>
                <input
                  onChange={(evt) => {setDisadvantage(evt.target.value);}}
                  className="form-review__input"
                  value={disadvantage}
                  id="disadvantage"
                  data-testid="disadvantage"
                  type="text"
                  autoComplete="off"
                />
                <label className="form-review__label" htmlFor="comment">
                  Комментарий
                </label>
                <textarea
                  className="form-review__input form-review__input--textarea"
                  id="comment"
                  data-testid="comment"
                  name="review"
                  value={comment}
                  rows={10}
                  autoComplete="off"
                  onChange={(evt) => {setComment(evt.target.value);}}
                >
                </textarea>
                <button
                  onClick={(evt) => {handleSubmit(evt);}}
                  className="button button--medium-20 form-review__button"
                  type="submit"
                >
                  Отправить отзыв
                </button>
              </form>
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

export default ModalCommentAdd;
