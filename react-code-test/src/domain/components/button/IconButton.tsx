import * as React from "react";

export const IconButton: React.FC<{
  onClick: () => void;
  style?: any;
  size?: "small" | "medium" | "large";
  color?: string;
}> = ({ onClick, style, size, color, children }) => {
  return (
    <div style={style} onClick={() => onClick()}>
      {children}
    </div>
  );
};
