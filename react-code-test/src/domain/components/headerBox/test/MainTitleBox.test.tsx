import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ActionButtonType } from "../../../../infraestructure/core/models/ActionButtons";
import { MainTitleBox } from "../MainTitleBox";

test("MainTitleBox test", () => {
  const actionButtons: ActionButtonType[] = [
    {
      tooltipText: "tooltip text",
      onClick: () => {},
      iconComponent: <span>Icon text</span>,
    },
  ];

  render(
    <MainTitleBox title={"Título"} actionButtons={actionButtons}></MainTitleBox>
  );

  expect(screen.getByText("Título")).toBeInTheDocument();
  expect(screen.getByText("tooltip text")).toBeInTheDocument();
  expect(screen.getByText("Icon text")).toBeInTheDocument();
});
