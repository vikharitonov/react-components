import React, { ComponentPropsWithRef } from "react";

import "./TextHeading.css";

export type AsTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TextHeadingInterface extends ComponentPropsWithRef<"h1"> {
  asTag: AsTagType;
  text: string;
  thin?: boolean;
}

const TextHeading = ({
  asTag,
  text,
  thin,
  children,
  ...props
}: TextHeadingInterface) => {
  let { className } = props;

  if (thin) {
    className = `${className} thin`;
  }

  switch (asTag) {
    case "h1":
      return (
        <h1  {...props} className={className}>
          {text}
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2  {...props} className={className}>
          {text}
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3  {...props} className={className}>
          {text}
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4  {...props} className={className}>
          {text}
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5  {...props} className={className}>
          {text}
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6  {...props} className={className}>
          {text}
          {children}
        </h6>
      );
    default:
      return (
        <h1  {...props} className={className}>
          {text}
          {children}
        </h1>
      );
  }
};

export default TextHeading;
