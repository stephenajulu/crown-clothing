import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, CollectionItemsPreview, CollectionTitle } from './collection-preview.styles';

const CollectionPreview = ({ title, items, match, history }) => (
  <CollectionPreviewContainer>
    <CollectionTitle
    onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
    >{title.toUpperCase()}</CollectionTitle>
    <CollectionItemsPreview>
      {
        items.filter((item, id) => id < 4).map(item => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </CollectionItemsPreview>
  </CollectionPreviewContainer>
)

export default withRouter(CollectionPreview);
