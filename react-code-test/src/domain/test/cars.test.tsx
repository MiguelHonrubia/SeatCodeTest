import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DataTable } from "../components/datatable/Datatable";
import { CAR_LIST_KEYS } from "../../infraestructure/core/models/car/car-list-keys";
import { mapCarsTypeApiToFront } from "../../infraestructure/core/maps/cars";

const dataSource = [
  {
    id: 1,
    registration: "1234ABC",
    brandName: "seat",
    brandId: 1,
    modelName: "ibiza",
    modelId: 1,
    color: "#97117a",
    registrationDate: "2020-11-03",
    doors: 5,
  },
  {
    id: 2,
    registration: "5678def",
    brandName: "seat",
    brandId: 1,
    modelName: "arona",
    modelId: 1,
    color: "#52dd36",
    registrationDate: "2019-07-05",
    doors: 5,
  },
  {
    id: 3,
    registration: "9012ghi",
    brandName: "volkswagen",
    brandId: 2,
    modelName: "golf",
    modelId: 3,
    color: "#172fe6",
    registrationDate: "2017-03-21",
    doors: 3,
  },
];

test("render cars list", async () => {
  const data = mapCarsTypeApiToFront(dataSource);
  render(<DataTable headers={CAR_LIST_KEYS} dataSource={data}></DataTable>);

  const registrationHeader = screen.getByText("Matrícula");
  const brandHeader = screen.getByText("Marca");
  const modelHeader = screen.getByText("Modelo");
  const registrationDateHeader = screen.getByText("Fecha matriculación");
  const colorHeader = screen.getByText("Color");
  const doorsHeader = screen.getByText("Nº Puertas");

  const carRegistration = screen.getByText("1234ABC");
  const carBrand = screen.getAllByText("SEAT");
  const carModel = screen.getByText("IBIZA");
  const carRegistrationDate = screen.getByText("03/11/2020");

  const carRegistration2 = screen.getByText("5678DEF");
  const carModel2 = screen.getByText("ARONA");
  const carRegistrationDate2 = screen.getByText("05/07/2019");

  const carRegistration3 = screen.getByText("9012GHI");
  const carBrand3 = screen.getByText("VOLKSWAGEN");
  const carModel3 = screen.getByText("GOLF");
  const carRegistrationDate3 = screen.getByText("21/03/2017");

  expect(registrationHeader).toBeInTheDocument();
  expect(brandHeader).toBeInTheDocument();
  expect(modelHeader).toBeInTheDocument();
  expect(registrationDateHeader).toBeInTheDocument();
  expect(colorHeader).toBeInTheDocument();
  expect(doorsHeader).toBeInTheDocument();

  expect(carRegistration).toBeInTheDocument();
  expect(carBrand).toHaveLength(2);
  expect(carModel).toBeInTheDocument();
  expect(carRegistrationDate).toBeInTheDocument();

  expect(carRegistration2).toBeInTheDocument();
  expect(carModel2).toBeInTheDocument();
  expect(carRegistrationDate2).toBeInTheDocument();

  expect(carRegistration3).toBeInTheDocument();
  expect(carBrand3).toBeInTheDocument();
  expect(carModel3).toBeInTheDocument();
  expect(carRegistrationDate3).toBeInTheDocument();
});

test("render added car", async () => {
  const { rerender } = render(
    <DataTable headers={CAR_LIST_KEYS} dataSource={dataSource}></DataTable>
  );

  expect(screen.queryByText("9999XYZ")).not.toBeInTheDocument();

  const car = {
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

  dataSource.push(car);

  rerender(
    <DataTable headers={CAR_LIST_KEYS} dataSource={dataSource}></DataTable>
  );

  const carRegistration = screen.getAllByText("9999XYZ");
  const carBrand = screen.getAllByText("SEAT");
  const carModel = screen.getAllByText("ATECA");
  const carRegistrationDate = screen.getAllByText("06/07/2022");

  expect(carRegistration).not.toHaveLength(0);
  expect(carBrand).not.toHaveLength(0);
  expect(carModel).not.toHaveLength(0);
  expect(carRegistrationDate).not.toHaveLength(0);

  dataSource.splice(dataSource.indexOf(car), 1);
});

test("not render removed car", async () => {
  const { rerender } = render(
    <DataTable headers={CAR_LIST_KEYS} dataSource={dataSource}></DataTable>
  );

  const car = {
    id: 3,
    registration: "9012ghi",
    brandName: "volkswagen",
    brandId: 2,
    modelName: "golf",
    modelId: 3,
    color: "#172fe6",
    registrationDate: "2017-03-21",
    doors: 3,
  };

  dataSource.splice(dataSource.indexOf(car), 1);

  expect(screen.getByText("9012GHI")).toBeInTheDocument();

  rerender(
    <DataTable headers={CAR_LIST_KEYS} dataSource={dataSource}></DataTable>
  );

  expect(screen.queryByText("9012GHI")).not.toBeInTheDocument();

  dataSource.push(car);
});

test("render updated car", async () => {
  const { rerender } = render(
    <DataTable headers={CAR_LIST_KEYS} dataSource={dataSource}></DataTable>
  );

  expect(screen.getByText("9012GHI")).toBeInTheDocument();
  expect(screen.getByText("GOLF")).toBeInTheDocument();

  dataSource[2].registration = "7777xyz";
  dataSource[2].modelName = "ModelTest";

  rerender(
    <DataTable headers={CAR_LIST_KEYS} dataSource={dataSource}></DataTable>
  );

  expect(screen.getByText("7777XYZ")).toBeInTheDocument();
  expect(screen.getByText("MODELTEST")).toBeInTheDocument();

  dataSource[2].registration = "9012ghi";
  dataSource[2].modelName = "golf";
});
