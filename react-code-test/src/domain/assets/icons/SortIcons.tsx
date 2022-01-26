import React from "react";

export const AscArrowIcon: React.FC<{ height?; width?; color? }> = ({
  height,
  width,
  color,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width ? width : 24}
      height={height ? height : 24}
      fill={color ? color : "white"}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
  );
};

export const DescArrowIcon: React.FC<{ height?; width?; color? }> = ({
  height,
  width,
  color,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill={color ? color : "white"}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
    </svg>
  );
};

export const NonSortedIcon: React.FC<{ height?; width?; color? }> = ({
  height,
  width,
  color,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      width={width ? width : 24}
      height={height ? height : 24}
      fill={color ? color : "white"}
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g />
        <polygon points="13,6.99 16,6.99 12,3 8,6.99 11,6.99 11,17.01 8,17.01 12,21 16,17.01 13,17.01" />
      </g>
    </svg>
  );
};
