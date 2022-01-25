import * as React from "react";
import { DatatableField } from "../../../infraestructure/core/models/Datatable";
import {
  StyledCellText,
  StyledTableContainer,
  StyledDataTable,
  StyledTH,
  StyledTD,
} from "./style/components";

export const DataTable: React.FC<{
  headers: DatatableField[];
  dataSource: any[];
  maxHeight?: number;
}> = ({ headers, dataSource, maxHeight }) => {
  return (
    <StyledTableContainer
      maxHeight={maxHeight ? `${maxHeight}px` : "auto"}
      style={{ marginBottom: 24 }}
    >
      <StyledDataTable>
        <thead>
          <tr>
            {headers.map(({ key, text, visible, template, width }, index) => (
              <StyledTH key={index} width={width}>
                {text}
              </StyledTH>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row, index) => {
            return (
              <tr key={index} style={{ height: 40 }}>
                {headers.map(({ key, visible, template, type }, indexChild) => {
                  const Temp = template;
                  if (!visible) {
                    return (
                      <StyledTD key={indexChild}>
                        {Temp ? (
                          <div>
                            <Temp {...row} />
                          </div>
                        ) : type === "date" ? (
                          <StyledCellText>
                            {new Date(row[key]).toLocaleDateString()}
                          </StyledCellText>
                        ) : (
                          <StyledCellText style={{ marginLeft: 10 }}>
                            {`${row[key]}`.toUpperCase()}
                          </StyledCellText>
                        )}
                      </StyledTD>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledDataTable>
    </StyledTableContainer>
  );
};
