import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <Link className="footer__logo logo" to={AppRoute.Main}>
          <img className="logo__img" width="70" height="70" src="/img/svg/logo.svg" alt="Логотип"/>
        </Link>
        <div className="socials footer__socials">
          <ul className="socials__list">
            <li className="socials-item">
              <Link className="socials__link" to="https://www.facebook.com/" aria-label="facebook">
                <img src="/img/facebook.svg" alt="facebook"  width="24" height="24"/>
              </Link>
            </li>
            <li className="socials-item">
              <Link className="socials__link" to="https://www.instagram.com/" aria-label="instagram">
                <img src="/img/instagram.svg" alt="instagram"  width="24" height="24"/>
              </Link>
            </li>
            <li className="socials-item">
              <Link className="socials__link" to="https://www.twitter.com/" aria-label="twitter">
                <img src="/img/twitter.svg" alt="twitter"  width="24" height="24"/>
              </Link>
            </li>
          </ul>
        </div>
        <section className="footer__nav-section footer__nav-section--info">
          <h2 className="footer__nav-title">О нас</h2>
          <p className="footer__nav-content footer__nav-content--font-secondary">Магазин гитар, музыкальных инструментов и гитарная мастерская <br/> в Санкт-Петербурге.<br/><br/>Все инструменты проверены, отстроены <br/> и доведены до идеала!</p>
        </section>
        <section className="footer__nav-section footer__nav-section--links">
          <h2 className="footer__nav-title">Информация</h2>
          <ul className="footer__nav-list">
            <li className="footer__nav-list-item"><Link className="link" to="#top">Где купить?</Link>
            </li>
            <li className="footer__nav-list-item"><Link className="link" to="#top">Блог</Link>
            </li>
            <li className="footer__nav-list-item"><Link className="link" to="#top">Вопрос - ответ</Link>
            </li>
            <li className="footer__nav-list-item"><Link className="link" to="#top">Возврат</Link>
            </li>
            <li className="footer__nav-list-item"><Link className="link" to="#top">Сервис-центры</Link>
            </li>
          </ul>
        </section>
        <section className="footer__nav-section footer__nav-section--contacts">
          <h2 className="footer__nav-title">Контакты</h2>
          <p className="footer__nav-content">г. Санкт-Петербург,<br/> м. Невский проспект, <br/>ул. Казанская 6.</p>
          <div className="footer__nav-content">
            <img src="/img/phone.svg" alt="phone" width="8" height="8"/>
            <Link className="link" to="tel:88125005050"> 8-812-500-50-50</Link>
          </div>
          <p className="footer__nav-content">Режим работы:<br/>
            <span className="footer__span">
              <img src="/img/clock.svg" alt="clock" width="13" height="13"/>
              <span> с 11:00 до 20:00</span><span>без выходных</span>
            </span>
          </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
