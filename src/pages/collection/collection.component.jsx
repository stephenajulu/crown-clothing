import React from 'react';

import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ match }) => (
  <div className='category'>
    <h2>COLLECTION {match.params.collectionId}</h2>
  </div>
);

export default CollectionPage;