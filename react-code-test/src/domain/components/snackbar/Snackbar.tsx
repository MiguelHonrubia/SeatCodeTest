import * as React from "react";
import { useSnackbarValue } from "../../../infraestructure/data/contexts/snackbar";
import { CloseIcon } from "../../assets/icons/NavegationIcons";
import { IconButton } from "../button/IconButton";
import { StyledSnackbarBox } from "./style/components";

export const Snackbar: React.FC<{}> = () => {
  const { open, type, message, closeSnackbar } = useSnackbarValue();

  const removeRef = React.useRef(null);
  removeRef.current = closeSnackbar;

  React.useEffect(() => {
    const duration = 3000;
    const id = setTimeout(() => {
      if (removeRef.current) {
        removeRef.current();
      }
    }, duration);

    return () => clearTimeout(id);
  }, []);

  return (
    <>
      {open && (
        <StyledSnackbarBox type={type}>
          <div style={{ marginRight: 20 }}>{message}</div>
          <IconButton onClick={closeSnackbar}>
            <CloseIcon></CloseIcon>
          </IconButton>
        </StyledSnackbarBox>
      )}
    </>
  );
};
