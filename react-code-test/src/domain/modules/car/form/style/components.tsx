import styled from "styled-components";

export const StyledCarInput = styled.input`
  width: 50%;
  padding: 12px 20px;
  margin: 8px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: 40px;
`;

export const StyledCarColorInput = styled.input`
  width: 50%;
  margin: 8px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: 40px;
`;

export const StyledCarSelectInput = styled.select`
  width: 50%;
  margin: 8px 10px;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: 40px;
  color: #757575;
`;

export const StyledSubmit = styled.input`
  background-color: #fb8761;
  color: white;
  padding: 15px 21px;
  width: 150px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #fa794e;
  }
`;

export const StyledCancelButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 14px 20px;
  width: 150px;
  border-radius: 4px;
  border: 1px solid #c2c2c2;
  cursor: pointer;
  margin-right: 24px;

  &:hover {
    background-color: #636363;
  }
`;
