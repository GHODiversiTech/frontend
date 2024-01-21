import { ConnectKitButton } from "connectkit";

import styled from "styled-components";
const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
//   translateY: -50%;
//   margin-left: auto;
//   margin-right: auto;
  margin: 2rem auto auto auto;
  justify-content: center;
  align-items: center;
  display: inline-block;
  padding: 14px 24px;
  color: #ffffff;
  background: #383838;
//   font-size: 16px;
  font-weight: 500;
  border-radius: 10rem;
  box-shadow: 0 4px 24px -6px #383838;

  transition: 200ms ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 40px -6px #383838;
  }
  &:active {
    transform: translateY(-3px);
    box-shadow: 0 6px 32px -6px #383838;
  }
  @media only screen and (max-width: 600px) {font-size: 16px;}

  @media only screen and (min-width: 600px) {font-size: 18px; padding: 16px 26px;}
  @media only screen and (min-width: 768px) {font-size: 20px;}

  @media only screen and (min-width: 992px) {font-size: 22px; padding: 18px 30px;}

`;

export const ExampleButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <StyledButton onClick={show} >
            {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
          </StyledButton>
        );
      }}
    </ConnectKitButton.Custom>
  );
};