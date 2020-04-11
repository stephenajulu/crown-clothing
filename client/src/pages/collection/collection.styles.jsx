import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const CollectionTitle = styled.div`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(auto, 370px);

  &.collection-item {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;