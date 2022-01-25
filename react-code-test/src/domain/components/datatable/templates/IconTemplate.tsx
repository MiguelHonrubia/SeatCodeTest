import * as React from "react";
import { IconButton } from "../../button/IconButton";
import { Tooltip } from "../../tooltip/Tooltip";

export const IconTemplate: React.FC<{
  onClick: () => void;
  tooltipText: string;
}> = ({ onClick, tooltipText, children }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <Tooltip title={tooltipText}>
        <IconButton onClick={onClick}>{children}</IconButton>
      </Tooltip>
    </div>
  );
};
