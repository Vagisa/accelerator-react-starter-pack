import dayjs from 'dayjs';
import { CommentProps } from './types';
import Rating from '../rating/rating';

function Comment({comment}: CommentProps): JSX.Element {
  return (
    <div className="review">
      <div className="review__wrapper">
        <h4 className="review__title review__title--author title title--lesser">
          {comment.userName}
        </h4>
        <span className="review__date">
          {dayjs(comment.createAt).format('DD MMMM')}
        </span>
      </div>
      <div className="rate review__rating-panel" aria-hidden="true">
        <Rating rating={comment.rating} width={16} height={16} />
        <span className="rate__count"></span>
        <span className="rate__message"></span>
      </div>
      <h4 className="review__title title title--lesser">
        Достоинства:
      </h4>
      <p className="review__value">
        {comment.advantage}
      </p>
      <h4 className="review__title title title--lesser">
        Недостатки:
      </h4>
      <p className="review__value">
        {comment.disadvantage}
      </p>
      <h4 className="review__title title title--lesser" data-testid="Comment">
        Комментарий:
      </h4>
      <p className="review__value">
        {comment.comment}
      </p>
    </div>
  );
}

export default Comment;
