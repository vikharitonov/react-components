import React, { ComponentPropsWithRef } from "react";
import "./Button.css";

export type ButtonTypeType =
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
  label?: string;
  btnType?: ButtonTypeType;
  btnSize?: ButtonSizeType;
}

const Button = ({
  label = "Button",
  btnType = "light",
  btnSize = "md",
  ...props
}: ButtonInterface) => {
  const className = `btn ${btnType ? btnType : null} ${
    btnSize ? btnSize : null
  }`;
  return <button className={className} {...props}>{label}</button>;
};

export default Button;
