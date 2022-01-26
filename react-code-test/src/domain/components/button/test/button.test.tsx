import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IconButton } from "../IconButton";

test("Button test", () => {
  render(<IconButton onClick={() => {}}>Cancelar</IconButton>);
  expect(screen.getByText("Cancelar")).toBeInTheDocument();
});
