import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  TextLabel1,
  TextLabel2,
  TextLabel3,
  Caption,
  Overline,
  LinkLabel,
} from "../Text";

test("TextLabel1 test", () => {
  render(<TextLabel1>children</TextLabel1>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("TextLabel2 test", () => {
  render(<TextLabel2>children</TextLabel2>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("TextLabel3 test", () => {
  render(<TextLabel3>children</TextLabel3>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("Caption test", () => {
  render(<Caption>children</Caption>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("Overline test", () => {
  render(<Overline>children</Overline>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("LinkLabel test", () => {
  render(<LinkLabel>children</LinkLabel>);

  expect(screen.getByText("children")).toBeInTheDocument();
});
