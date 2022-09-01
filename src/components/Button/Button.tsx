import React, { ComponentPropsWithRef } from "react";
import "./Button.css";

export type ButtonStyleType =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "link"
  | "invisible"
  | "accent"
  | null;
export type ButtonSizeType = "sm" | "md" | "lg" | null;

export interface ButtonInterface extends ComponentPropsWithRef<"button"> {
  btnLabel?: string;
  btnStyle?: ButtonStyleType;
  btnSize?: ButtonSizeType;
}

const Button = ({
  btnLabel = "Button",
  btnStyle = "light",
  btnSize = "md",
  ...props
}: ButtonInterface) => {
  const className = `btn ${btnStyle ? btnStyle : null} ${
    btnSize ? btnSize : null
  }`;
  return <button className={className} {...props}>{btnLabel}</button>;
};

export default Button;
