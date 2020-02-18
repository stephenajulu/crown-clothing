import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackGroundImage, ContentContainer } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer className={`${size}`}>

    <BackGroundImage className='background-image' style={{
      backgroundImage: `url(${imageUrl})`
    }} />

    <ContentContainer onClick={() => history.push(`${match.url}${linkUrl}`)} >
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);