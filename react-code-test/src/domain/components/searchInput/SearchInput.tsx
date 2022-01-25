import * as React from "react";
import {
  StyledSearchInput,
  StyledSearchSubmit,
  StyledSearchForm,
} from "./style/components";

export const SearchInput: React.FC<{
  handleSubmit: (text: string) => void;
}> = ({ handleSubmit }) => {
  const [searchText, setSearchText] = React.useState("");

  return (
    <>
      <StyledSearchForm
        onSubmit={(event) => {
          handleSubmit(searchText);
          event.preventDefault();
        }}
      >
        <StyledSearchInput
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></StyledSearchInput>
        <StyledSearchSubmit type="submit" value="Buscar"></StyledSearchSubmit>
      </StyledSearchForm>
    </>
  );
};
