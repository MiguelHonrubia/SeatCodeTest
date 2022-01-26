import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ActionButtonType } from "../../../../infraestructure/core/models/ActionButtons";
import { MainSubtitleBox } from "../MainSubtitleBox";

test("MainSubtitleBox test", () => {
  const actionButtons: ActionButtonType[] = [
    {
      tooltipText: "tooltip text",
      onClick: () => {},
      iconComponent: <span>Icon text</span>,
    },
  ];

  render(
    <MainSubtitleBox
      title={"Título"}
      actionButtons={actionButtons}
      closeButton={true}
    ></MainSubtitleBox>
  );

  expect(screen.getByText("Título")).toBeInTheDocument();
  expect(screen.getByText("Cerrar")).toBeInTheDocument();
  expect(screen.getByText("tooltip text")).toBeInTheDocument();
  expect(screen.getByText("Icon text")).toBeInTheDocument();
});
