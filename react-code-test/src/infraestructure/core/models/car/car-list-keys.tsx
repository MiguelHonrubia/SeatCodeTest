import { ColorTemplate } from "../../../../domain/components/datatable/templates/ColorTemplate";
import { DeleteTemplate } from "../../../../domain/components/datatable/templates/DeleteTemplate";
import { DatatableField } from "../Datatable";

export const CAR_LIST_KEYS: DatatableField[] = [
  {
    key: "",
    text: "",
    width: 20,
  },
  {
    key: "",
    text: "",
    width: 20,
  },
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
    key: "registrationDate",
    text: "Fecha matriculación",
  },
  {
    key: "doors",
    text: "Nº Puertas",
    width: 100,
  },
  {
    key: "color",
    text: "Color",
    template: ColorTemplate,
    width: 40,
  },
];
