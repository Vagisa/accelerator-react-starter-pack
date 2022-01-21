import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchString } from '../../store/action';
import { getGuitarsList, getSearchString } from '../../store/guitars/selectors';
import { AppRoute } from '../../const';
import { fetchGuitarsAction } from '../../store/api-actions';

function Header(): JSX.Element {
  const searchString = useSelector(getSearchString);
  const guitars = useSelector(getGuitarsList);
  const dispatch = useDispatch();
  const handleSearchStringChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchString(evt.target.value));
    dispatch(fetchGuitarsAction());
  };

  const handleSearchStringReset = () =>
    dispatch(dispatch(setSearchString('')));

  return (
    <header className="header" id="header">
      <div className="container header__wrapper" data-testid="Header">
        <Link className="header__logo logo" to={AppRoute.Main}>
          <img className="logo__img" width="70" height="70" src="/img/svg/logo.svg" alt="Логотип"/>
        </Link>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li><Link className="link main-nav__link link--current" to="#">Каталог</Link>
            </li>
            <li><Link className="link main-nav__link" to="#">Где купить?</Link>
            </li>
            <li><Link className="link main-nav__link" to="#">О компании</Link>
            </li>
          </ul>
        </nav>
        <div className="form-search">
          <form className="form-search__form">
            <button className="form-search__submit" type="submit">
              <img className="form-search__icon"
                src="/img/magnifier.svg"
                alt="Искать"
                width="14"
                height="15"
              />
              <span className="visually-hidden">Начать поиск</span>
            </button>
            <input
              onChange={handleSearchStringChange}
              className="form-search__input"
              value={searchString}
              id="search"
              type="text"
              autoComplete="off"
              placeholder="что вы ищете?"
            />
            <label className="visually-hidden" htmlFor="search">Поиск</label>
          </form>
          <ul className={`form-search__select-list ${ !searchString ? 'hidden' : ''}`}>
            {
              guitars.map((guitar) =>(
                <li key={guitar.id}
                  className="form-search__select-item"
                  tabIndex={-1}
                >
                  <Link onClick={handleSearchStringReset}
                    className="form-search__select-item-link"
                    to={AppRoute.Product.replace(':id', guitar.id.toString())}
                  >
                    {guitar.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <Link className="header__cart-link" to="#" aria-label="Корзина">
          <img className="header__cart-icon"
            src="/img/basket.svg"
            alt="Корзина"
            width="14"
            height="14"
          />
          <span className="visually-hidden">Перейти в корзину</span>
          <span className="header__cart-count">2</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
