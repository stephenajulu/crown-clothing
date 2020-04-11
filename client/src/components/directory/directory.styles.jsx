import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    width: 90vw;
  }
`;

export const DirectoryFooter = styled.div`
  flex-basis: 100%;
  text-align: center;
`;