import * as React from "react";
import { ActionButtonType } from "../../../../infraestructure/core/models/ActionButtons";
import { useSnackbarValue } from "../../../../infraestructure/data/contexts/snackbar";
import { DeleteIcon } from "../../../assets/icons/ActionIcons";
import { IconButton } from "../../button/IconButton";
import { Dialog } from "../../dialog/Dialog";
import { Tooltip } from "../../tooltip/Tooltip";

export const DeleteTemplate: React.FC<any> = ({ functionCallback, id }) => {
  const [showDialog, setShowDialog] = React.useState(false);
  const { showSnackbar } = useSnackbarValue();

  const actionButtons: ActionButtonType[] = [
    {
      onClick: () => setShowDialog(false),
      iconComponent: <span>Cancelar</span>,
    },
    {
      onClick: async () => {
        await functionCallback(id);
      },
      iconComponent: <span>Aceptar</span>,
    },
  ];
  return (
    <>
      <Dialog
        title={"¿Esta seguro de que desea eliminar este elemento?"}
        showDialog={showDialog}
        onClose={() => setShowDialog(false)}
        size={"small"}
        actionButtons={actionButtons}
      >
        Tenga en cuenta que esta accion es irreversible.
      </Dialog>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Tooltip title="Eliminar">
          <IconButton onClick={() => setShowDialog(true)}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
};
