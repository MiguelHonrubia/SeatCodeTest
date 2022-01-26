import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CarForm } from "../CarForm";
import { fetchCarDropDownValues } from "../../../../../infraestructure/data/providers/cars";

const data = {
  id: 999,
  registration: "9999XYZ",
  brandId: 1,
  brandName: "seat",
  modelId: 4,
  modelName: "Ateca",
  color: "#FFFFFF",
  registrationDate: "06/07/2022",
  doors: 3,
};

test("render car form without data", async () => {
  const dropDownValues = await fetchCarDropDownValues();

  render(
    <CarForm
      data={null}
      dropDownValues={dropDownValues}
      handleSubmit={() => {}}
      onClose={() => {}}
    ></CarForm>
  );

  expect(screen.getAllByPlaceholderText("Matricula")).toHaveLength(1);
  expect(screen.getAllByPlaceholderText("Fecha matriculación")).toHaveLength(1);
  expect(screen.getAllByPlaceholderText("Marca")).toHaveLength(1);
  expect(screen.getAllByPlaceholderText("Modelo")).toHaveLength(1);
  expect(screen.getAllByPlaceholderText("Color")).toHaveLength(1);
  expect(screen.getAllByPlaceholderText("Puertas")).toHaveLength(1);

  expect(screen.getByText("Selecciona una marca")).toBeInTheDocument();
  expect(screen.getByText("Selecciona un modelo")).toBeInTheDocument();
  expect(screen.getByText("Cancelar")).toBeInTheDocument();

  dropDownValues.brands.forEach((brand) => {
    expect(screen.getByText(brand.name)).toBeInTheDocument();
  });
});

test("render car form with data", async () => {
  const dropDownValues = await fetchCarDropDownValues();

  render(
    <CarForm
      data={data}
      dropDownValues={dropDownValues}
      handleSubmit={() => {}}
      onClose={() => {}}
    ></CarForm>
  );

  expect(screen.getByDisplayValue("9999XYZ")).toBeInTheDocument();
  expect(screen.getByDisplayValue("06/07/2022")).toBeInTheDocument();
  expect(screen.getByDisplayValue("3")).toBeInTheDocument();
});
