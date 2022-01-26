import styled from "styled-components";

export const StyledSearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  @media only screen and (min-width: 800px) {
    width: 40%;
  }
`;

export const StyledSearchSubmit = styled.input`
  width: 100%;
  background-color: #fb8761;
  color: white;
  padding: 14px 20px;
  margin: 8px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #fa794e;
  }

  @media only screen and (min-width: 800px) {
    width: 10%;
  }
`;

export const StyledSearchForm = styled.form`
  /* display: flex; */
  margin: 0px 38px;
  @media only screen and (min-width: 800px) {
    display: flex;
  }
`;
