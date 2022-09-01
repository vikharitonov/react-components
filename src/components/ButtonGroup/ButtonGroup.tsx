import React, { ComponentPropsWithRef } from "react";
import {
  ButtonInterface,
  ButtonSizeType,
  ButtonStyleType,
} from "../Button/Button";

import { v4 as uuidv4 } from "uuid";

import "./ButtonGroup.css";

export interface ButtonGroupInterface extends ComponentPropsWithRef<"div"> {
  groupSize?: ButtonSizeType;
  groupType?: ButtonStyleType;
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
              btnStyle: c.props.btnStyle ? c.props.btnStyle : groupType,
            });
          }
          return null;
        })}
    </div>
  );
};

export default ButtonGroup;
