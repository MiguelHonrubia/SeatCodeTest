import * as React from "react";
import { ActionButtonType } from "../../../infraestructure/core/models/ActionButtons";
import { CAR_LIST_KEYS } from "../../../infraestructure/core/models/car/car-list-keys";
import { getCarsProvider } from "../../../infraestructure/data/providers/cars";
import { AddIcon } from "../../assets/icons/ActionIcons";
import { DataTable } from "../../components/datatable/Datatable";
import { MainTitleBox } from "../../components/headerBox/MainTitleBox";

export const CarList: React.FC = () => {
  const [cars, setCars] = React.useState([]);

  const load = async () => {
    const hola = await getCarsProvider();
    setCars(hola);
  };

  React.useEffect(() => {
    load();
  }, []);

  const actionButtons: ActionButtonType[] = [
    {
      tooltipText: "Añadir vehiculo",
      onClick: () => {},
      iconComponent: <AddIcon></AddIcon>,
    },
  ];

  return (
    <>
      <MainTitleBox
        title={"Listado de vehiculos"}
        actionButtons={actionButtons}
      ></MainTitleBox>
      <div style={{ width: "100%" }}>
        <div style={{ margin: "12px 24px" }}>
          <DataTable
            headers={CAR_LIST_KEYS}
            dataSource={cars}
            maxHeight={300}
          ></DataTable>
        </div>
      </div>
    </>
  );
};
