import { ColorTemplate } from "../../../../domain/components/datatable/templates/ColorTemplate";
import { DatatableField } from "../Datatable";

export const CAR_LIST_KEYS: DatatableField[] = [
  {
    key: "registration",
    text: "Matrícula",
  },
  {
    key: "brandName",
    text: "Marca",
  },
  {
    key: "modelName",
    text: "Modelo",
  },
  {
    key: "color",
    text: "Color",
    template: ColorTemplate,
  },
  {
    key: "doors",
    text: "Puertas",
  },
  {
    key: "registrationDate",
    text: "Fecha matriculación",
  },
];
