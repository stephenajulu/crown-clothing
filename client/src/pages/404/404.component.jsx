import React from 'react';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './404.styles';

const NoMatchPage = () => (
    <ErrorImageOverlay>
        <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png' />
        <ErrorImageText>Oops, something went wrong!</ErrorImageText>
    </ErrorImageOverlay>
);

export default NoMatchPage;