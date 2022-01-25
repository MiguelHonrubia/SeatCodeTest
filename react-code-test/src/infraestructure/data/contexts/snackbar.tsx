import * as React from "react";

interface SnackbarParams {
  open?: boolean;
  type: "error" | "success" | "warning" | "info";
  message: string;
}

interface SnackbarState extends SnackbarParams {
  showSnackbar: (args: SnackbarParams) => void;
  closeSnackbar: () => void;
}

const initialState = {
  open: false,
  type: undefined,
  message: "",
  showSnackbar: undefined,
  closeSnackbar: undefined,
};

export const SnackbarContext = React.createContext<SnackbarState>(initialState);
export const SnackbarProvider = ({ children }) => {
  const [state, setState] = React.useState({
    open: false,
    type: undefined,
    message: "",
  });

  const showSnackbar = (params: SnackbarParams) => {
    if (!state.open) {
      setState((state) => ({
        ...state,
        open: true,
        type: params.type,
        message: params.message,
      }));
    }
  };

  const closeSnackbar = () => {
    if (state.open) {
      setState((state) => ({
        ...state,
        open: false,
        type: undefined,
        message: "",
      }));
    }
  };

  return (
    <SnackbarContext.Provider
      value={{
        closeSnackbar,
        showSnackbar,
        open: state.open,
        message: state.message,
        type: state.type,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
export const useSnackbarValue = () =>
  React.useContext<SnackbarState>(SnackbarContext);
