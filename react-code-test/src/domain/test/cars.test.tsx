import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import {
  deleteCarProvider,
  patchCarProvider,
  postCarProvider,
  putCarProvider,
} from "../../infraestructure/data/providers/cars";

test("render cars list", () => {
  render(<></>);

  const carRegistration = screen.getByText("1234ABC");
  const carBrand = screen.getByText("Seat");
  const carModel = screen.getByText("Ibiza");
  const carRegistrationDate = screen.getByText("03/11/2020");
  const carDoors = screen.getByText("5 puertas");

  const carRegistration2 = screen.getByText("5678DEF");
  const carBrand2 = screen.getByText("Seat");
  const carModel2 = screen.getByText("Arona");
  const carRegistrationDate2 = screen.getByText("05/07/2019");
  const carDoors2 = screen.getByText("5 puertas");

  const carRegistration3 = screen.getByText("9012GHI");
  const carBrand3 = screen.getByText("Volkwagen");
  const carModel3 = screen.getByText("Golf");
  const carRegistrationDate3 = screen.getByText("21/03/2017");
  const carDoors3 = screen.getByText("3 puertas");

  expect(carRegistration).toBeInTheDocument();
  expect(carBrand).toBeInTheDocument();
  expect(carModel).toBeInTheDocument();
  expect(carRegistrationDate).toBeInTheDocument();
  expect(carDoors).toBeInTheDocument();

  expect(carRegistration2).toBeInTheDocument();
  expect(carBrand2).toBeInTheDocument();
  expect(carModel2).toBeInTheDocument();
  expect(carRegistrationDate2).toBeInTheDocument();
  expect(carDoors2).toBeInTheDocument();

  expect(carRegistration3).toBeInTheDocument();
  expect(carBrand3).toBeInTheDocument();
  expect(carModel3).toBeInTheDocument();
  expect(carRegistrationDate3).toBeInTheDocument();
  expect(carDoors3).toBeInTheDocument();
});

test("render added car", async () => {
  render(<></>);

  const car = {
    id: 999,
    registration: "9999XYZ",
    brandName: "Audi",
    brandId: 3,
    modelName: "e-tron GT",
    modelId: 4,
    color: "#FFFFFF",
    registrationDate: "2022-07-06",
    doors: 3,
  };

  await postCarProvider(car);

  const carRegistration = screen.getByText("9999XYZ");
  const carBrand = screen.getByText("Audi");
  const carModel = screen.getByText("e-tron GT");
  const carRegistrationDate = screen.getByText("06/07/2022");

  expect(carRegistration).toBeInTheDocument();
  expect(carBrand).toBeInTheDocument();
  expect(carModel).toBeInTheDocument();
  expect(carRegistrationDate).toBeInTheDocument();
});

test("not render removed car", async () => {
  render(<></>);

  const car = {
    id: 999,
    registration: "9999XYZ",
    brandName: "Audi",
    brandId: 3,
    modelName: "e-tron GT",
    modelId: 4,
    color: "#FFFFFF",
    registrationDate: "2022-07-06",
    doors: 3,
  };

  await postCarProvider(car);

  expect(screen.getByText("9999XYZ")).toBeInTheDocument();
  expect(screen.getByText("Audi")).toBeInTheDocument();
  expect(screen.getByText("e-tron GT")).toBeInTheDocument();
  expect(screen.getByText("06/07/2022")).toBeInTheDocument();

  await deleteCarProvider(1);

  expect(screen.queryByText("9999XYZ")).not.toBeInTheDocument();
  expect(screen.queryByText("Audi")).not.toBeInTheDocument();
  expect(screen.queryByText("e-tron GT")).not.toBeInTheDocument();
  expect(screen.queryByText("06/07/2022")).not.toBeInTheDocument();
});

test("render updated car", async () => {
  render(<></>);

  const car = {
    id: 999,
    registration: "9999XYZ",
    brandName: "Audi",
    brandId: 3,
    modelName: "e-tron GT",
    modelId: 4,
    color: "#FFFFFF",
    registrationDate: "2022-07-06",
    doors: 3,
  };

  await postCarProvider(car);

  expect(screen.getByText("9999XYZ")).toBeInTheDocument();
  expect(screen.getByText("Audi")).toBeInTheDocument();
  expect(screen.getByText("e-tron GT")).toBeInTheDocument();
  expect(screen.getByText("06/07/2022")).toBeInTheDocument();

  const car2 = {
    id: 999,
    registration: "8888XYZ",
    brandName: "Audi2",
    brandId: 3,
    modelName: "e-tron GT22",
    modelId: 4,
    color: "#FFFFFF",
    registrationDate: "2018-02-03",
    doors: 3,
  };

  await putCarProvider(car2);

  expect(screen.getByText("8888XYZ")).toBeInTheDocument();
  expect(screen.getByText("Audi2")).toBeInTheDocument();
  expect(screen.getByText("e-tron GT22")).toBeInTheDocument();
  expect(screen.getByText("03/02/2018")).toBeInTheDocument();
});

test("render updated car with patch", async () => {
  render(<></>);

  const car = {
    id: 999,
    registration: "9999XYZ",
    brandName: "Audi",
    brandId: 3,
    modelName: "e-tron GT",
    modelId: 4,
    color: "#FFFFFF",
    registrationDate: "2022-07-06",
    doors: 3,
  };

  await postCarProvider(car);

  expect(screen.getByText("9999XYZ")).toBeInTheDocument();
  expect(screen.getByText("Audi")).toBeInTheDocument();
  expect(screen.getByText("e-tron GT")).toBeInTheDocument();
  expect(screen.getByText("06/07/2022")).toBeInTheDocument();

  const car2 = {
    id: 999,
    registration: "8888XYZ",
  };

  await patchCarProvider(car2);

  expect(screen.getByText("8888XYZ")).toBeInTheDocument();
});