import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DataTable } from "../Datatable";

const headers = [
  {
    key: "registration",
    text: "Matricula",
  },
  {
    key: "brandName",
    text: "Marca",
  },
  {
    key: "modelName",
    text: "Modelo",
  },
];
const dataSource = [
  { registration: "1234ABC", brandName: "SEAT", modelName: "ATECA" },
  { registration: "5678DEF", brandName: "VOLKSWAGEN", modelName: "GOLF" },
  { registration: "9012GHI", brandName: "SKODA", modelName: "KAMIQ" },
];

test("Datatable test", () => {
  render(<DataTable dataSource={dataSource} headers={headers} />);

  headers.forEach((header) => {
    const screenHeader = screen.getByText(header.text);
    expect(screenHeader).toBeInTheDocument();

    dataSource.forEach((data) => {
      const screenData = screen.getByText(data[header.key]);
      expect(screenData).toBeInTheDocument();
    });
  });
});
