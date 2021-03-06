import styled from "styled-components";

interface themeProps {
  maxHeight: string;
}

interface colorThemeProps {
  color: string;
}

interface sizeProps {
  width?: number;
}

export const StyledLink = styled.span`
  color: white;
  font-weight: 500;
`;

export const StyledCellText = styled.span`
  color: white;
  font-weight: 300;
`;

export const StyledTableContainer = styled.div<themeProps>`
  max-height: ${({ maxHeight }) => maxHeight};
  margin-bottom: 24;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #fb8761;
  }

  @media only screen and (max-width: 800px) {
    overflow-x: auto;
    margin-left: ;
  }
`;

export const StyledDataTable = styled.table`
  background: #424a52;
  margin: 24px;
  width: 100%;
  border-collapse: collapse;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

export const StyledTH = styled.th<sizeProps>`
  padding: 15px 15px 15px 10px;
  border: 1px solid #373d43;
  text-align: left;
  width: ${({ width }) => (width ? `${width}px` : "")};
`;

export const StyledTD = styled.td`
  border: 1px solid #373d43;
`;

export const StyledColorBox = styled.div<colorThemeProps>`
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color};
`;

export const StyledColorContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
