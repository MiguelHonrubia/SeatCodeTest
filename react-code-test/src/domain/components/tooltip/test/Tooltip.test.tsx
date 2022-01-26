import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Tooltip } from "../Tooltip";

test("Tooltip test", () => {
  render(<Tooltip title={"tooltip text"}></Tooltip>);

  expect(screen.getByText("tooltip text")).toBeInTheDocument();
});
