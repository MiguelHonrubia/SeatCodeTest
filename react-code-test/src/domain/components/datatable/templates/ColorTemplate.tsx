import * as React from "react";
import { StyledColorBox, StyledColorContainer } from "../style/components";

export const ColorTemplate: React.FC<any> = (params) => {
  return (
    <StyledColorContainer>
      <StyledColorBox color={params.color}></StyledColorBox>
    </StyledColorContainer>
  );
};
