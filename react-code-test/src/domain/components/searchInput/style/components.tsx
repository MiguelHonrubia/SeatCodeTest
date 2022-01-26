import styled from "styled-components";

export const StyledSearchInput = styled.input`
  width: 40%;
  padding: 12px 20px;
  margin: 8px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const StyledSearchSubmit = styled.input`
  width: 10%;
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
`;

export const StyledSearchForm = styled.form`
  display: flex;
  margin: 0px 38px;
`;
