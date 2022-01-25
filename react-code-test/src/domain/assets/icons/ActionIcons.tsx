import React from "react";

export const DeleteIcon: React.FC<{ height?; width?; color? }> = ({
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
        d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
};

export const AddIcon: React.FC<{ height?; width?; color? }> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11 13L6 13L6 11L11 11L11 6L13 6L13 11L18 11L18 13L13 13L13 18L11 18L11 13Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
};

export const EditIcon: React.FC<{ height?; width?; color? }> = ({
  height,
  width,
  color,
}) => {
  return (
    <svg
      width={width ? width : 25}
      height={height ? height : 24}
      viewBox="0 0 25 24"
      fill={color ? color : "white"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 17.25V21H7.25L18.31 9.94L14.56 6.19L3.5 17.25ZM21.21 7.04C21.6 6.65 21.6 6.02 21.21 5.63L18.87 3.29C18.48 2.9 17.85 2.9 17.46 3.29L15.63 5.12L19.38 8.87L21.21 7.04Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
};
