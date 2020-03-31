import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth/auth.component';
import CheckOutPage from './pages/checkout/checkout.component';
import NoMatchPage from './pages/404/404.component';

import { selectCurrentUser } from './redux/user/user.selectors'


class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     // .onSnapshot() checks if the snapshot has changed, returns the snapshot object
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data() 
    //       });
    //     });
    //   }
      
    //   // set to null if the current user is logged out
    //   setCurrentUser(userAuth);

    // }, error => console.log(error));
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route exact path='/signin' render={() =>
            this.props.currentUser ? 
            (
              <Redirect to='/' />
            ) : (
              <AuthPage />
            )
          } />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    );
  }  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
