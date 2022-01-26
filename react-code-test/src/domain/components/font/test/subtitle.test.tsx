import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Subtitle1, Subtitle2, Subtitle3 } from "../Subtitle";

test("Subtitle1 test", () => {
  render(<Subtitle1>children</Subtitle1>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("Subtitle2 test", () => {
  render(<Subtitle2>children</Subtitle2>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("Subtitle3 test", () => {
  render(<Subtitle3>children</Subtitle3>);

  expect(screen.getByText("children")).toBeInTheDocument();
});
