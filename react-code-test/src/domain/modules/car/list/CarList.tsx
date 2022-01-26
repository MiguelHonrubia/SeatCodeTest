import * as React from "react";
import { formatDateToApi } from "../../../../infraestructure/core/maps/cars";
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
import { Headline4 } from "../../../components/font/Title";
import { MainTitleBox } from "../../../components/headerBox/MainTitleBox";
import { StyledImageLogo } from "../../../components/imageLogo/style/components";
import { SearchInput } from "../../../components/searchInput/SearchInput";
import { CarForm } from "../form/CarForm";

const logo = require("../../../assets/images/seat-code-logo.png");

export const CarList: React.FC = () => {
  const [cars, setCars] = React.useState([]);
  const [editCar, setEditCar] = React.useState(null);
  const [showDialog, setShowDialog] = React.useState(false);
  const { showSnackbar } = useSnackbarValue();
  const [dropDownValues, setDropDownValues] = React.useState({});
  const [filters, setFilters] = React.useState(null);
  const [sort, setSort] = React.useState<sortType>(null);

  const loadDropDownValues = async () => {
    try {
      const response = await fetchCarDropDownValues();
      setDropDownValues(response);
    } catch {
      showSnackbar({
        type: "error",
        message: "Ha ocurrido un error al cargar",
      });
    }
  };

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
      iconComponent: <AddIcon />,
    },
  ];

  const handleSubmitSearch = async (text: string) => {
    if (text) {
      const arrayAux = [];
      setFilters(text);

      const obj = {
        brandName: text.toLowerCase(),
        registration: text.toLowerCase(),
        registrationDate: formatDateToApi(text),
        modelName: text.toLowerCase(),
        doors: Number(text),
      };

      const requestList = [];

      Object.keys(obj).forEach((key) => {
        const objAux = {};
        objAux[key] = obj[key];

        requestList.push(getCarsProvider(objAux, sort));
      });

      const response = await Promise.all(requestList);

      response.forEach((result) => {
        if (result.length > 0) {
          result.forEach((element) => {
            if (!arrayAux.some((x) => x.id === element.id)) {
              arrayAux.push(element);
            }
          });
        }
      });

      setCars(arrayAux);
    } else {
      setFilters(null);
      await load(null, sort);
    }
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
      editCar
        ? await putCarProvider(values, dropDownValues)
        : await postCarProvider(values, dropDownValues);
      showSnackbar({
        type: "success",
        message: editCar
          ? "Vehiculo modificado correctamente"
          : "Vehiculo añadido correctamente",
      });
      load(filters, sort);
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
        <EditIcon />
      </IconTemplate>
    );
  }

  CAR_LIST_KEYS[0].template = deleteCustomTemplate;
  CAR_LIST_KEYS[1].template = editCustomTemplate;

  const updateData = async (sortAux: sortType) => {
    setSort(sortAux);

    if (filters) {
      await handleSubmitSearch(filters);
    } else {
      await load(filters, sortAux);
    }
  };

  return (
    <>
      <Dialog
        title={editCar ? "Editar vehiculo" : "Añadir vehiculo"}
        showDialog={showDialog}
        onClose={() => {
          setShowDialog(false);
          setEditCar(null);
        }}
        size={"medium"}
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
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StyledImageLogo src={logo} alt="seat code logo" />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Headline4>Frontend challenge by MiguelHonrubia</Headline4>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: 24 }}>
        <MainTitleBox
          title={"Listado de vehiculos"}
          actionButtons={actionButtons}
        ></MainTitleBox>
      </div>

      <div style={{ width: "100%" }}>
        <div>
          <SearchInput handleSubmit={handleSubmitSearch}></SearchInput>
        </div>
        <div style={{ margin: "12px 24px" }}>
          <DataTable
            headers={CAR_LIST_KEYS}
            dataSource={cars}
            maxHeight={550}
            updateData={updateData}
          ></DataTable>
        </div>
      </div>
    </>
  );
};
