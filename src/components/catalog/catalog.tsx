import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import ErrorModal from '../error-modal/error-modal';
import Filter from '../filter/filter';
import Footer from '../footer/footer';
import GuitarsList from '../guitars-list/guitars-list';
import Header from '../header/header';
import ModalCartAdd from '../modal-cart-add/modal-cart-add';
function Catalog(): JSX.Element {

  return (
    <div className="wrapper">
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item">
              <Link className="link" to={AppRoute.Main}>Главная</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="link" to="">Каталог</Link>
            </li>
          </ul>
          <div className="catalog" data-testid="Catalog">
            <Filter />
            <GuitarsList />
          </div>
        </div>
      </main>
      <Footer />
      <ModalCartAdd />
      <ErrorModal />
    </div>
  );
}

export default Catalog;
