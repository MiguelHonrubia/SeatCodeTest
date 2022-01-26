import * as React from "react";
import { DatatableField } from "../../../infraestructure/core/models/Datatable";
import { sortType } from "../../../infraestructure/core/models/Sort";
import {
  AscArrowIcon,
  DescArrowIcon,
  NonSortedIcon,
} from "../../assets/icons/SortIcons";
import { IconButton } from "../button/IconButton";
import { Tooltip } from "../tooltip/Tooltip";
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
  updateData?: (sort: sortType) => void;
}> = ({ headers, dataSource, maxHeight, updateData }) => {
  const [sort, setSort] = React.useState<sortType>(null);

  const sortColumn = async (key) => {
    if (sort && sort.field === key && sort.value === "asc") {
      setSort({ field: key, value: "desc" });
    } else if (sort && sort.field === key && sort.value === "desc") {
      setSort(null);
    } else {
      setSort({ field: key, value: "asc" });
    }
  };

  React.useEffect(() => {
    if (updateData) updateData(sort);
  }, [sort]);

  return (
    <StyledTableContainer
      maxHeight={maxHeight ? `${maxHeight}px` : "auto"}
      style={{ marginBottom: 24 }}
    >
      <StyledDataTable>
        <thead>
          <tr>
            {headers.map(({ key, text, visible, template, width }, index) => (
              <StyledTH
                key={index}
                width={width}
                onClick={() => sortColumn(key)}
              >
                <div
                  style={{
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  {text}
                  {(!sort || sort.field !== key) && key !== "" && (
                    <Tooltip title={"Ordenar"}>
                      <NonSortedIcon color="gray" height={18} width={18} />
                    </Tooltip>
                  )}

                  {sort && sort.field === key && sort.value === "asc" && (
                    <Tooltip title={"Orden ascendente"}>
                      <AscArrowIcon height={18} width={18} />
                    </Tooltip>
                  )}
                  {sort && sort.field === key && sort.value === "desc" && (
                    <Tooltip title={"Orden descendente"}>
                      <DescArrowIcon height={18} width={18} />
                    </Tooltip>
                  )}
                </div>
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
