import React from "react";
import { CAR_LIST_KEYS } from "../infraestructure/core/models/car/car-list-keys";
import { getCarsProvider } from "../infraestructure/data/providers/cars";
import logo from "./assets/images/logo.svg";
import "./assets/styles/App.css";
import { DataTable } from "./components/datatable/Datatable";

function App() {
  const [cars, setCars] = React.useState([]);

  const load = async () => {
    const hola = await getCarsProvider();
    setCars(hola);
  };

  React.useEffect(() => {
    load();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <DataTable
          headers={CAR_LIST_KEYS}
          dataSource={cars}
          maxHeight={300}
        ></DataTable>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn React
        </a>
      </header>
    </div>
  );
}

export default App;
