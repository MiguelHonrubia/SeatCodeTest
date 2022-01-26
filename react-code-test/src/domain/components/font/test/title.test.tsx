import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import {
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
} from "../Title";

test("Headline1 test", () => {
  render(<Headline1>children</Headline1>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("Headline2 test", () => {
  render(<Headline2>children</Headline2>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("Headline3 test", () => {
  render(<Headline3>children</Headline3>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("Headline4 test", () => {
  render(<Headline4>children</Headline4>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("Headline5 test", () => {
  render(<Headline5>children</Headline5>);

  expect(screen.getByText("children")).toBeInTheDocument();
});

test("Headline6 test", () => {
  render(<Headline6>children</Headline6>);

  expect(screen.getByText("children")).toBeInTheDocument();
});
