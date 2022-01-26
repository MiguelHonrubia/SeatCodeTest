import * as React from "react";
import { ActionButtonType } from "../../../../infraestructure/core/models/ActionButtons";
import { DeleteIcon } from "../../../assets/icons/ActionIcons";
import {
  StyledCancelButton,
  StyledSubmit,
} from "../../../modules/car/form/style/components";
import { IconButton } from "../../button/IconButton";
import { Dialog } from "../../dialog/Dialog";
import { Tooltip } from "../../tooltip/Tooltip";

export const DeleteTemplate: React.FC<any> = ({ functionCallback, id }) => {
  const [showDialog, setShowDialog] = React.useState(false);

  const actionButtons: ActionButtonType[] = [
    {
      onClick: () => setShowDialog(false),
      iconComponent: <StyledCancelButton>Cancelar</StyledCancelButton>,
    },
    {
      onClick: async () => {
        await functionCallback(id);
      },
      iconComponent: (
        <StyledSubmit type="submit" value="Aceptar"></StyledSubmit>
      ),
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
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
};
