import React from "react";
import { StyledSubtitleBox } from "./style/components";
import { Headline5 } from "../font/Title";
import { ActionButtonType } from "../../../infraestructure/core/models/ActionButtons";
import { Tooltip } from "../tooltip/Tooltip";
import { IconButton } from "../button/IconButton";

export const MainTitleBox: React.FC<{
  title: string;
  actionButtons?: ActionButtonType[];
}> = ({ title, actionButtons }) => {
  return (
    <StyledSubtitleBox>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Headline5 style={{ marginLeft: 24 }}>{title}</Headline5>
        </div>
        <div style={{ marginLeft: 12, display: "flex", alignItems: "center" }}>
          {actionButtons &&
            actionButtons.map(
              ({ tooltipText, onClick, iconComponent }, index) => {
                return (
                  <Tooltip key={index} title={tooltipText}>
                    <IconButton onClick={() => onClick()}>
                      {iconComponent}
                    </IconButton>
                  </Tooltip>
                );
              }
            )}
        </div>
      </div>
    </StyledSubtitleBox>
  );
};
