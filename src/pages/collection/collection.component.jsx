import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionPageContainer, CollectionItemsContainer, CollectionTitle } from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
      <CollectionItemsContainer>
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state) // state will need to be passed in the selector; this selector needs a part of the state depending on the url
});

export default connect(mapStateToProps)(CollectionPage);