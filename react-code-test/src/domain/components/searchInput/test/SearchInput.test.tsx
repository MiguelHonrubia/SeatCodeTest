import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchInput } from "../SearchInput";

test("SearchInput test", () => {
  render(<SearchInput handleSubmit={() => {}}></SearchInput>);

  expect(
    screen.getByPlaceholderText("Buscar en el listado de vehiculos")
  ).toBeInTheDocument();
});
