import React from "react";

export const BackIcon: React.FC<{ height?; width?; color? }> = ({
  height,
  width,
  color,
}) => {
  return (
    <svg
      width={width ? width : 8}
      height={height ? height : 12}
      viewBox="0 0 8 12"
      fill={color ? color : "white"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
        fill={color ? color : "white"}
        fillOpacity="0.87"
      />
    </svg>
  );
};

export const CloseIcon: React.FC<{ height?; width?; color? }> = ({
  height,
  width,
  color,
}) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill={color ? color : "white"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
};
