import * as React from "react";
import { ActionButtonType } from "../../../infraestructure/core/models/ActionButtons";
import { CloseIcon } from "../../assets/icons/NavegationIcons";
import { IconButton } from "../button/IconButton";
import { Headline6 } from "../font/Title";
import { Tooltip } from "../tooltip/Tooltip";
import {
  StyledModal,
  StyledModalBody,
  StyledModalContent,
  StyledModalFooter,
  StyledModalHeader,
} from "./style/components";

export const Dialog: React.FC<{
  title: string;
  showDialog: boolean;
  onClose: () => void;
  size?: "small" | "medium" | "large";
  actionButtons?: ActionButtonType[];
}> = ({
  title,
  showDialog,
  size = "medium",
  onClose,
  actionButtons,
  children,
}) => {
  return (
    <>
      {showDialog && (
        <StyledModal>
          <StyledModalContent size={size}>
            <StyledModalHeader>
              <Headline6>{title}</Headline6>
              <Tooltip title="Cerrar">
                <IconButton onClick={onClose}>
                  <CloseIcon></CloseIcon>
                </IconButton>
              </Tooltip>
            </StyledModalHeader>
            <StyledModalBody>{children}</StyledModalBody>

            {actionButtons && (
              <StyledModalFooter>
                {actionButtons.map(
                  ({ tooltipText, onClick, iconComponent }, index) => {
                    return (
                      <div
                        key={index}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      >
                        <IconButton onClick={() => onClick()}>
                          {iconComponent}
                        </IconButton>
                      </div>
                    );
                  }
                )}
              </StyledModalFooter>
            )}
          </StyledModalContent>
        </StyledModal>
      )}
    </>
  );
};
