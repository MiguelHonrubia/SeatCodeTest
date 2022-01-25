import styled from "styled-components";

export const StyledTooltipBox = styled.div`
  position: relative;
  display: inline-block;
  height: 18px;

  &:hover {
    .StyledTooltipTextClass {
      visibility: visible;
    }
  }
`;

export const StyledTooltipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
`;
