import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import NoMatchPage from './pages/404/404.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './redux/user/user.selectors';

import { checkUserSession } from './redux/user/user.action'


const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const AuthPage = lazy(() => import('./pages/auth/auth.component'));
const CheckOutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckOutPage} />
            <Route exact path='/signin' render={() =>
                currentUser ? 
                (
                  <Redirect to='/' />
                ) : (
                  <AuthPage />
                )
              } />
          </Suspense>
        </ErrorBoundary>
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
