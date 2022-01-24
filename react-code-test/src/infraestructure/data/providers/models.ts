import { getModels } from "../services/models";
import { sortType } from "../../core/models/Sort";

export const getModelsProvider = (filters?: any, sort?: sortType[]) =>
  getModels(filters, sort);
