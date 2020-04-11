import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }    
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
      background-color: black;
      color: white;
      border: none;
  }
`;

const disabledButtonStyles = css`
  background-color: #dddddd;
  cursor: default;
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const buttonLoader = css`
  background-color: black;
  color: white;
  border: none;
  padding-right: 40px;

  &:after {
    content: '';
    position: absolute;
    border-radius: 100%;
    right: 6px;
    top: 50%;
    width: 0px;
    height: 0px;
    margin-top: -2px;
    border: 2px solid rgba(255,255,255,0.5);
    border-left-color: #333;
    border-top-color: #333;
    animation: spin .6s infinite linear, grow .3s forwards ease-out;
  }

  @keyframes spin { 
    to {
        transform: rotate(359deg);
    }
  }

  @keyframes grow { 
    to {
        width: 14px;
        height: 14px;
        margin-top: -8px;
        right: 73px;
    }
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  } else if (props.disabled) {
    return disabledButtonStyles;
  } else if (props.loading === 'true') {
    return buttonLoader;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }

  ${getButtonStyles}
`;