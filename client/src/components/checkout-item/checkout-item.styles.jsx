import styled, { css } from 'styled-components';

const nameQuantityPriceStyles = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.span`
  ${nameQuantityPriceStyles}
`;

export const Quantity = styled.span`
  ${nameQuantityPriceStyles}
  display: flex;

  .arrow {
      cursor: pointer;
  }

  .value {
      margin: 0 10px;
  }
`;

export const Price = styled.span`
  ${nameQuantityPriceStyles}
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;