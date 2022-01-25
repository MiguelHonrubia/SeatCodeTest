import { sortType } from "../../core/models/Sort";
import { buildRequestFiltersAndSort } from "../../core/utils/request-params-builder";

import Api from "./api";

const requestOptions = {
  baseUrl: "http://localhost:3004",
  defaultOptions: {},
};

const api = new Api(requestOptions);

export const getCars = (filters?: any, sort?: sortType) => {
  const q = buildRequestFiltersAndSort(filters, sort);
  return api.get(`/cars?${q}`);
};

export const postCar = (body: any) => api.post("/cars", { body });
export const putCar = (body: any) => api.put(`/cars/${body.id}`, { body });
export const patchCar = (id: number, body: any) =>
  api.patch(`/cars/${id}`, { body });
export const deleteCar = (id: number) => api.delete(`/cars/${id}`);
