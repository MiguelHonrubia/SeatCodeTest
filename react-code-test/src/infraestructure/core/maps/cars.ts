import { CarFrontType } from "../models/car/car";

export const mapCarsTypeApiToFront = (cars?: any[]): any[] => {
  const mappedCars = [];

  cars &&
    cars.forEach((car) => {
      mappedCars.push({
        ...car,
        registrationDate: formatDate(car.registrationDate),
      });
    });

  return mappedCars;
};

export const mapCarTypeFrontToApi = (car: CarFrontType, dropDownValues) => {
  return {
    ...car,
    registrationDate: formatDateToApi(car.registrationDate),
    brandName: dropDownValues["brands"].find((x) => x.id === car.brandId)?.name,
    modelName: dropDownValues["models"].find((x) => x.id === car.modelId)?.name,
  };
};

const formatDate = (date: string) => {
  const splittedDate = date.split("-");
  return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
};

const formatDateToApi = (date: string) => {
  const splittedDate = date.split("/");
  return `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`;
};
