import * as React from "react";
import { ActionButtonType } from "../../../infraestructure/core/models/ActionButtons";
import { CAR_LIST_KEYS } from "../../../infraestructure/core/models/car/car-list-keys";
import { useSnackbarValue } from "../../../infraestructure/data/contexts/snackbar";
import { getCarsProvider } from "../../../infraestructure/data/providers/cars";
import { AddIcon } from "../../assets/icons/ActionIcons";
import { DataTable } from "../../components/datatable/Datatable";
import { Dialog } from "../../components/dialog/Dialog";
import { MainTitleBox } from "../../components/headerBox/MainTitleBox";
import { SearchInput } from "../../components/searchInput/SearchInput";

export const CarList: React.FC = () => {
  const [cars, setCars] = React.useState([]);
  const [showDialog, setShowDialog] = React.useState(false);
  const { showSnackbar } = useSnackbarValue();

  const load = async () => {
    try {
      const response = await getCarsProvider();
      setCars(response);
      showSnackbar({ type: "info", message: "Datos cargados correctamente" });
      console.log("Estoy aqui?");
    } catch {
      showSnackbar({ type: "error", message: "Ha ocurrido un error" });
    }
  };

  React.useEffect(() => {
    load();
  }, []);

  const actionButtons: ActionButtonType[] = [
    {
      tooltipText: "Añadir vehiculo",
      onClick: () => {
        setShowDialog(true);
      },
      iconComponent: <AddIcon></AddIcon>,
    },
  ];

  return (
    <>
      <Dialog
        title={"Titulo prueba"}
        showDialog={showDialog}
        onClose={() => setShowDialog(false)}
        size={"small"}
      >
        Hola, esto es un dialogo de prueba
      </Dialog>
      <MainTitleBox
        title={"Listado de vehiculos"}
        actionButtons={actionButtons}
      ></MainTitleBox>
      <div style={{ width: "100%" }}>
        <div>
          <SearchInput></SearchInput>
        </div>
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
