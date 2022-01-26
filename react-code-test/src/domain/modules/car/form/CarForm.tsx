import * as React from "react";
import { CarFrontType } from "../../../../infraestructure/core/models/car/car";
import {
  StyledCarInput,
  StyledSubmit,
  StyledCancelButton,
  StyledCarColorInput,
  StyledCarSelectInput,
} from "./style/components";

export const CarForm: React.FC<{
  handleSubmit: (values) => void;
  data?: CarFrontType;
  onClose: () => void;
  dropDownValues: any;
}> = ({ handleSubmit, onClose, data, dropDownValues }) => {
  const [car, setCar] = React.useState<CarFrontType>({} as CarFrontType);

  React.useEffect(() => {
    if (data) {
      setCar(data);
    }
  }, [data]);

  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(car);
          event.preventDefault();
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <StyledCarInput
            type="text"
            defaultValue={car.registration && car.registration.toUpperCase()}
            onChange={(e) => (car.registration = e.target.value)}
            placeholder="Matricula"
            pattern={"[0-9]{4}[A-Z]{3}"}
            required
          ></StyledCarInput>
          <StyledCarInput
            type="text"
            defaultValue={car.registrationDate}
            onChange={(e) => (car.registrationDate = e.target.value)}
            placeholder="Fecha matriculación"
            required
          ></StyledCarInput>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <StyledCarSelectInput
            value={car.brandId}
            onChange={(e) => {
              car.brandId = Number(e.target.value);
              setCar({ ...car, brandId: Number(e.target.value) });
            }}
            placeholder="Marca"
          >
            <option disabled selected>
              Selecciona una marca
            </option>
            {dropDownValues &&
              dropDownValues["brands"].map((brand, index) => (
                <option key={index} value={brand.id}>
                  {brand.name}
                </option>
              ))}
          </StyledCarSelectInput>

          <StyledCarSelectInput
            value={car.modelId}
            onChange={(e) => {
              car.modelId = Number(e.target.value);
              setCar({ ...car, modelId: Number(e.target.value) });
            }}
            placeholder="Modelo"
          >
            <option disabled selected>
              Selecciona un modelo
            </option>
            {dropDownValues &&
              dropDownValues["models"]
                .filter((x) => x.brandId === car.brandId)
                .map((model, index) => (
                  <option key={index} value={model.id}>
                    {model.name}
                  </option>
                ))}
          </StyledCarSelectInput>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <StyledCarColorInput
            type="color"
            value={car.color}
            onChange={(e) => {
              car.color = e.target.value;
              setCar({ ...car, color: e.target.value });
            }}
            placeholder="Color"
            required
          ></StyledCarColorInput>
          <StyledCarInput
            type="number"
            defaultValue={car.doors}
            onChange={(e) => (car.doors = Number(e.target.value))}
            placeholder="Puertas"
            required
          ></StyledCarInput>
        </div>
        <div
          style={{
            marginTop: 20,
            width: "100%",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <div
            style={{
              marginRight: 10,
            }}
          >
            <StyledCancelButton onClick={onClose}>Cancelar</StyledCancelButton>
            <StyledSubmit type="submit" value="Aceptar"></StyledSubmit>
          </div>
        </div>
      </form>
    </>
  );
};
