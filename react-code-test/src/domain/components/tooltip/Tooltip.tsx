import * as React from "react";
import { StyledTooltipBox, StyledTooltipText } from "./style/components";

export const Tooltip: React.FC<{ title }> = ({ title, children }) => {
  return (
    <StyledTooltipBox>
      {children}
      <StyledTooltipText className="StyledTooltipTextClass">
        {title}
      </StyledTooltipText>
    </StyledTooltipBox>
  );
};
