import React, { useEffect, Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { favoritesOperations } from '../store/favorites';
import { cartOperations } from '../store/cart/indexCart';
import { customerOperations } from '../store/user';
import { tokenOperations } from '../store/token';
import { historyOperations } from '../store/history';
import { wishlistOperations } from '../store/wishlist';
import Loader from '../components/Loader/Loader';

const ProductDetails = React.lazy(() => import('../pages/ProductDetails/ProductDetails'));
const Filter = React.lazy(() => import('../pages/Filter/Filter'));
const Main = React.lazy(() => import('../pages/Main/Main'));
const CartPage = React.lazy(() => import('../pages/Cart/Cart'));
const Page404 = React.lazy(() => import('../pages/404/404'));
const FavoritesList = React.lazy(() => import('../pages/FavoritesList/FavoritesList'));
const RegistrationList = React.lazy(() => import('../pages/RegistrationList/RegistrationList'));
const LoginList = React.lazy(() => import('../pages/LoginList/LoginList'));
const UserInfo = React.lazy(() => import('../pages/UserInfo/UserInfo'));
const ProductsList = React.lazy(() => import('../components/ProductsList/ProductsList'));
const Admin = React.lazy(() => import('../pages/Admin/Admin'));

function AppRoutes({ dispatch, token, customer }) {
  useEffect(() => {
    const tokenAuth = JSON.parse(localStorage.getItem('token'));
    if (tokenAuth) {
      axios.defaults.headers.common.Authorization = tokenAuth;
    } else {
      axios.defaults.headers.common.Authorization = null;
    }
    dispatch(tokenOperations.getToken());
    dispatch(favoritesOperations.getFavorites());
    dispatch(historyOperations.getHistory());
    dispatch(customerOperations.getCustomer());
    dispatch(cartOperations.getCart());
    dispatch(wishlistOperations.getWishList());
  }, [token, dispatch]);
  const isAuth = !!customer.firstName;
  const isAdmin = !!customer.isAdmin;
  console.log(isAdmin);
  return (
    <Suspense fallback={Loader}>
      <Switch>
        <Redirect exact from="/" to="/main" />
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/shop">
          <Main />
        </Route>
        <Route exact path="/shop/:itemNo">
          <ProductDetails />
        </Route>
        <Route exact path="/filter/">
          <Filter />
        </Route>
        <Route exact path="/products">
          <ProductsList />
        </Route>
        <ProtectedRoute exact path="/cart" isAuth={isAuth}>
          <CartPage />
        </ProtectedRoute>
        <Route exact path="/favorites">
          <FavoritesList />
        </Route>
        <Route exact path="/login" isAuth={isAuth}>
          {isAuth ? <UserInfo /> : <LoginList />}
        </Route>
        <ProtectedRoute exact path="/userinfo" isAuth={isAuth}>
          <UserInfo />
        </ProtectedRoute>
        <AdminProtectRoute exact path="/admin" isAdmin={isAdmin}>
          <Admin />
        </AdminProtectRoute>
        <Route exact path="/registration">
          <RegistrationList />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Suspense>
  );
}
const ProtectedRoute = ({ children, isAuth }) => (
  <Route>
    {isAuth && children}
    {!isAuth && <Redirect to="/login" />}
  </Route>
);
const AdminProtectRoute = ({ children, isAdmin }) => (
  <Route>
    {isAdmin && children}
    {!isAdmin && <Redirect to="/admin" />}
  </Route>
);
const mapStateToProps = (state) => {
  return {
    token: state.token.data,
    wishlist: state.wishlist.data,
    customer: state.customer.data,
  };
};

export default connect(mapStateToProps)(AppRoutes);
