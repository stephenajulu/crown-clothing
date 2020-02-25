import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import { addItem } from '../../redux/cart/cart.action';

import { CollectionItemContainer, CollectionImageContainer, CollectionFooter } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;  
  return (
    <CollectionItemContainer>
      <CollectionImageContainer className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        />
      
      <CollectionFooter>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </CollectionFooter>
      <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);