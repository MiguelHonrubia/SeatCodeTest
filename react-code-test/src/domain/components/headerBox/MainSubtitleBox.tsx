import React from "react";
import { StyledSubtitleBox } from "./style/components";
import { Headline6 } from "../font/Title";
// import { Tooltip, IconButton } from "@material-ui/core";
import { ActionButtonType } from "../../../infraestructure/core/models/ActionButtons";
import { CloseIcon } from "../../assets/icons/NavegationIcons";
import { Tooltip } from "../tooltip/Tooltip";
import { IconButton } from "../button/IconButton";

export const MainSubtitleBox: React.FC<{
  title: string;
  actionButtons?: ActionButtonType[];
  closeButton?: boolean;
}> = ({ title, actionButtons, closeButton }) => {
  return (
    <StyledSubtitleBox>
      <div style={{ display: "flex", width: "100%" }}>
        <div>
          <Headline6 style={{ marginTop: 32, marginLeft: 24 }}>
            {title}
          </Headline6>
        </div>
        {actionButtons && (
          <div style={{ marginLeft: 12 }}>
            {actionButtons.map(
              ({ tooltipText, onClick, iconComponent }, index) => {
                return (
                  <Tooltip key={index} title={tooltipText}>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => onClick()}
                    >
                      {iconComponent}
                    </IconButton>
                  </Tooltip>
                );
              }
            )}
          </div>
        )}
        {closeButton && (
          <div style={{ position: "absolute", right: 0 }}>
            <Tooltip title={"Cerrar"}>
              <IconButton
                size="small"
                color="primary"
                onClick={() => console.log("entro")}
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
    </StyledSubtitleBox>
  );
};
