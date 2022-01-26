import styled from "styled-components";

interface themeProps {
  size: string;
}

export const StyledModal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
`;

export const StyledModalContent = styled.div<themeProps>`
  position: relative;
  background-color: black;
  margin: auto;
  padding: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: ${({ size }) =>
    size === "large" ? "80%" : size === "small" ? "30%" : "45%"};

  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;

  @media only screen and (max-width: 500px) {
    width: 95%;
  }
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #424a52;
  color: white;
`;

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: right;
  padding: 16px 16px;

  background-color: #424a52;
  color: white;
`;

export const StyledModalBody = styled.div`
  padding: 20px 16px;
  background-color: #424a52;
`;
