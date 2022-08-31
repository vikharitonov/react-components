import React, { ComponentPropsWithRef } from "react";
import {
  ButtonInterface,
  ButtonSizeType,
  ButtonTypeType,
} from "../Button/Button";

import { v4 as uuidv4 } from "uuid";

import "./ButtonGroup.css";

export interface ButtonGroupInterface extends ComponentPropsWithRef<"div"> {
  groupSize?: ButtonSizeType;
  groupType?: ButtonTypeType;
  groupDirection?: "row" | "column";
  children: React.ReactElement<ButtonInterface>[];
}

const ButtonGroup = ({
  groupSize = "md",
  groupType = "light",
  groupDirection = "row",
  children = [],
  ...props
}: ButtonGroupInterface) => {
  const className = `btn-group ${groupDirection}`;
  return (
    <div className={className} {...props}>
      {children &&
        children.map((c) => {
          // @ts-ignore
          // TODO:need to find how to check type of children component to make sure that all children of ButtonGroup is Buttons.
          if (React.isValidElement(c) && c.type.name === "Button") {
            return React.cloneElement(c, {
              key: uuidv4(),
              btnSize: c.props.btnSize ? c.props.btnSize : groupSize,
              btnType: c.props.btnType ? c.props.btnType : groupType,
            });
          }
          return null;
        })}
    </div>
  );
};

export default ButtonGroup;
