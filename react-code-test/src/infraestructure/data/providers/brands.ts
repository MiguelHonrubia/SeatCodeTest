import { getBrands } from "../services/brands";
import { sortType } from "../../core/models/Sort";

export const getBrandsProvider = (filters?: any, sort?: sortType[]) =>
  getBrands(filters, sort);
