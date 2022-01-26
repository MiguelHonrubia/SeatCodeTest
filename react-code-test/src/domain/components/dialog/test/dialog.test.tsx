import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dialog } from "../Dialog";
import { ActionButtonType } from "../../../../infraestructure/core/models/ActionButtons";

test("Dialog test", () => {
  const actionButtons: ActionButtonType[] = [
    {
      tooltipText: "tooltip text",
      onClick: () => {},
      iconComponent: <span>Icon text</span>,
    },
  ];

  render(
    <Dialog
      title={"Título dialogo"}
      showDialog={true}
      onClose={() => {}}
      actionButtons={actionButtons}
    >
      children
    </Dialog>
  );

  expect(screen.getByText("Título dialogo")).toBeInTheDocument();
  expect(screen.getByText("Cerrar")).toBeInTheDocument();
  expect(screen.getByText("children")).toBeInTheDocument();
  expect(screen.getByText("Icon text")).toBeInTheDocument();
});
