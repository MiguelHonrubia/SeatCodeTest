import * as React from "react";
import {
  StyledSearchInput,
  StyledSearchSubmit,
  StyledSearchForm,
} from "./style/components";

export const SearchInput: React.FC<{}> = ({}) => {
  return (
    <>
      <StyledSearchForm
        onSubmit={(values) => {
          console.log("values", values);
        }}
      >
        <StyledSearchInput
          type="text"
          id="name"
          name="name"
          required
        ></StyledSearchInput>
        <StyledSearchSubmit type="submit" value="Submit"></StyledSearchSubmit>
      </StyledSearchForm>
    </>
  );
};
