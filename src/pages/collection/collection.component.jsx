import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ match, collection }) => (
  <div className='collection'>
    <h2>{match.params.collectionId.toUpperCase()}</h2>
    {
      collection.items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))
    }
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state) // state will need to be passed in the selector; this selector needs a part of the state depending on the url
});

export default connect(mapStateToProps)(CollectionPage);