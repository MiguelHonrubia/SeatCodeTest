import React from "react";
import { CAR_LIST_KEYS } from "../infraestructure/core/models/car/car-list-keys";
import { getCarsProvider } from "../infraestructure/data/providers/cars";
import logo from "./assets/images/logo.svg";
import "./assets/styles/App.css";
import { DataTable } from "./components/datatable/Datatable";
import { CarList } from "./modules/CarList/CarList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CarList />
      </header>
    </div>
  );
}

export default App;
