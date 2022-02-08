import { Route, Redirect } from 'react-router';
import { Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import Catalog from '../catalog/catalog';
import ErrorModal from '../error-modal/error-modal';
import ModalCartAdd from '../modal-cart-add/modal-cart-add';
import NotFound from '../not-found/not-found';
import Product from '../product/product';

function App(): JSX.Element {
  return (
    <>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Redirect to={AppRoute.Catalog.replace(':id', '1')} />
        </Route>
        <Route exact path={AppRoute.Catalog}>
          <Catalog />
        </Route>
        <Route exact path={AppRoute.Product}>
          <Product />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <ModalCartAdd />
      <ErrorModal />
    </>
  );
}

export default App;
