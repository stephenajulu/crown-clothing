import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// special syntax in React for importing svg
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';


import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>

      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser ? (
          <OptionLink
          as='div'
          onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
        ) : (
        <OptionLink className='option' to='/signin'>
          SIGN IN 
        </OptionLink>
      )}

      <CartIcon />
    </OptionsContainer>

    {
      hidden ? null : 
      <CartDropdown />
    }
    
  </HeaderContainer>
);

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
