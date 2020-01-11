import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth/auth.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // .onSnapshot() checks if the snapshot has changed, returns the snapshot object
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data() // displayName, createdAt and email since to get object representing the values yyou will use the .data() method
            }
          });
        });
      }
      
      // set to null if the current user is logged out
      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={AuthPage} />
        </Switch>
      </div>
    );
  }  
}

export default App;
