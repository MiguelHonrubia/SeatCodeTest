import * as React from "react";

export const IconButton: React.FC<{
  onClick: () => void;
}> = ({ onClick, children }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};
