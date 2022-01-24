import { sortType } from "../../core/models/Sort";
import { buildRequestFiltersAndSort } from "../../core/utils/request-params-builder";

import Api from "./api";

const requestOptions = {
  baseUrl: "http://localhost:3004",
  defaultOptions: {},
};

const api = new Api(requestOptions);

export const getBrands = (filters?: any, sort?: sortType[]) => {
  const q = buildRequestFiltersAndSort(filters, sort);
  return api.get(`/brands?${q}`);
};
