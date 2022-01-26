import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextButton1, TextButton2, TextButton3 } from "../Button";

test("TextButton1 test", () => {
  render(<TextButton1>children</TextButton1>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("TextButton2 test", () => {
  render(<TextButton2>children</TextButton2>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("TextButton3 test", () => {
  render(<TextButton3>children</TextButton3>);

  expect(screen.getByText("children")).toBeInTheDocument();
});
