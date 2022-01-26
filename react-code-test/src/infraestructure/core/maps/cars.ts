import { CarFrontType } from "../models/car/car";

export const mapCarsTypeApiToFront = (
  cars?: CarFrontType[]
): CarFrontType[] => {
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
    brandName: dropDownValues["brands"]
      .find((x) => x.id === car.brandId)
      ?.name.toLowerCase(),
    modelName: dropDownValues["models"]
      .find((x) => x.id === car.modelId)
      ?.name.toLowerCase(),
  };
};

export const formatDate = (date: string) => {
  const splittedDate = date.split("-");
  return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
};

export const formatDateToApi = (date: string) => {
  const splittedDate = date.split("/");
  return `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`;
};
