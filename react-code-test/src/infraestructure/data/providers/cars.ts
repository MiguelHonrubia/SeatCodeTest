import {
  getCars,
  postCar,
  putCar,
  deleteCar,
  patchCar,
} from "../services/cars";
import { pathBuilder } from "../../core/utils/patch-builder";
import { sortType } from "../../core/models/Sort";
import { getBrandsProvider } from "./brands";
import { getModelsProvider } from "./models";
import { mapCarsTypeApiToFront } from "../../core/maps/cars";

export const getCarsProvider = async (filters?: any, sort?: sortType[]) =>
  mapCarsTypeApiToFront(await getCars(filters, sort));

export const postCarProvider = (body: any) => postCar(body);
export const putCarProvider = (body: any) => putCar(body);
export const patchCarProvider = (body: any) => {
  const carId = body.id;
  delete body.id;

  return patchCar(carId, pathBuilder(body));
};
export const deleteCarProvider = (id: number) => deleteCar(id);

export const fetchCarDropDownValues = async () => {
  const brands = await getBrandsProvider();
  const models = await getModelsProvider();

  return { brands, models };
};
