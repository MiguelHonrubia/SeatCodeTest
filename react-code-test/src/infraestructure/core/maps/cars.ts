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

const formatDate = (date: string) => {
  const splittedDate = date.split("-");
  return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
};