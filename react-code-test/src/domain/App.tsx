import React from "react";
import { SnackbarProvider } from "../infraestructure/data/contexts/snackbar";
import "./assets/styles/App.css";
import { Snackbar } from "./components/snackbar/Snackbar";
import { CarList } from "./modules/car/list/CarList";

function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <CarList />
        <Snackbar />
      </SnackbarProvider>
    </div>
  );
}

export default App;
