import styled from "styled-components";

interface themeProps {
  type: "error" | "success" | "warning" | "info";
}

export const StyledSnackbarBox = styled.div<themeProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  visibility: visible;
  min-width: 250px;
  margin-left: -125px;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  color: ${({ type }) => (type === "warning" ? "black" : "white")};

  @media only screen and (max-width: 800px) {
    margin-left: -150px;
    bottom: 10px;
  }

  background-color: ${({ type }) =>
    type === "error"
      ? "#ef5350"
      : type === "success"
      ? "#4caf50"
      : type === "warning"
      ? "#ff9800"
      : "#007FFF"};
`;
