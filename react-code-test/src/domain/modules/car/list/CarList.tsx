import * as React from "react";
import { ActionButtonType } from "../../../../infraestructure/core/models/ActionButtons";
import { CAR_LIST_KEYS } from "../../../../infraestructure/core/models/car/car-list-keys";
import { sortType } from "../../../../infraestructure/core/models/Sort";
import { useSnackbarValue } from "../../../../infraestructure/data/contexts/snackbar";
import {
  deleteCarProvider,
  fetchCarDropDownValues,
  getCarsProvider,
  postCarProvider,
  putCarProvider,
} from "../../../../infraestructure/data/providers/cars";
import { AddIcon, EditIcon } from "../../../assets/icons/ActionIcons";
import { DataTable } from "../../../components/datatable/Datatable";
import { DeleteTemplate } from "../../../components/datatable/templates/DeleteTemplate";
import { IconTemplate } from "../../../components/datatable/templates/IconTemplate";
import { Dialog } from "../../../components/dialog/Dialog";
import { MainTitleBox } from "../../../components/headerBox/MainTitleBox";
import { SearchInput } from "../../../components/searchInput/SearchInput";
import { CarForm } from "../form/CarForm";

export const CarList: React.FC = () => {
  const [cars, setCars] = React.useState([]);
  const [editCar, setEditCar] = React.useState(null);
  const [showDialog, setShowDialog] = React.useState(false);
  const { showSnackbar } = useSnackbarValue();
  const [dropDownValues, setDropDownValues] = React.useState({});

  const loadDropDownValues = async () => {
    try {
      const response = await fetchCarDropDownValues();
      setDropDownValues(response);
      console.log(response);
    } catch {
      showSnackbar({
        type: "error",
        message: "Ha ocurrido un error al cargar",
      });
    }
  };

  const [filters, setFilters] = React.useState({});
  const [sort, setSort] = React.useState<sortType[]>([]);

  const load = async (filtersAux, sortAux) => {
    try {
      const response = await getCarsProvider(filtersAux, sortAux);
      setCars(response);
      showSnackbar({ type: "info", message: "Datos cargados correctamente" });
    } catch {
      showSnackbar({ type: "error", message: "Ha ocurrido un error" });
    }
  };

  React.useEffect(() => {
    load(filters, sort);
    loadDropDownValues();
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

  const handleSubmitSearch = async (text: string) => {
    const obj = {
      brandName: text,
    };
    setFilters(obj);
    await load(obj, sort);
  };

  const onDeleteCar = async (id: number) => {
    try {
      await deleteCarProvider(id);
      showSnackbar({ type: "success", message: "Eliminado correctamente" });
      await load(filters, sort);
    } catch {
      showSnackbar({
        type: "error",
        message: "Error al intentar eliminar",
      });
    }
  };

  const onSubmitCar = async (values, editCar) => {
    try {
      console.log("values", values);
      editCar ? await putCarProvider(values) : await postCarProvider(values);
      showSnackbar({
        type: "success",
        message: editCar
          ? "Vehiculo modificado correctamente"
          : "Vehiculo añadido correctamente",
      });
    } catch {
      showSnackbar({
        type: "error",
        message: editCar
          ? "Ha ocurrido un error al intentar editar el vehiculo"
          : "Ha ocurrido un error al intentar añadir un vehiculo",
      });
    } finally {
      setShowDialog(false);
    }
  };

  function deleteCustomTemplate(params) {
    return (
      <DeleteTemplate
        id={params.id}
        functionCallback={() => onDeleteCar(params.id)}
      ></DeleteTemplate>
    );
  }

  function editCustomTemplate(params) {
    return (
      <IconTemplate
        tooltipText="Editar"
        onClick={() => {
          setEditCar(cars.find((x) => x.id === params.id));
          setShowDialog(true);
        }}
      >
        <EditIcon></EditIcon>
      </IconTemplate>
    );
  }

  CAR_LIST_KEYS[0].template = deleteCustomTemplate;
  CAR_LIST_KEYS[1].template = editCustomTemplate;

  return (
    <>
      <Dialog
        title={editCar ? "Editar vehiculo" : "Añadir vehiculo"}
        showDialog={showDialog}
        onClose={() => {
          setShowDialog(false);
          setEditCar(null);
        }}
        size={"small"}
      >
        <CarForm
          data={editCar}
          handleSubmit={(values) => onSubmitCar(values, editCar)}
          dropDownValues={dropDownValues}
          onClose={() => {
            setShowDialog(false);
            setEditCar(null);
          }}
        ></CarForm>
      </Dialog>
      <MainTitleBox
        title={"Listado de vehiculos"}
        actionButtons={actionButtons}
      ></MainTitleBox>
      <div style={{ width: "100%" }}>
        <div>
          <SearchInput handleSubmit={handleSubmitSearch}></SearchInput>
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
