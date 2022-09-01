import React, { ComponentPropsWithRef } from "react";

import "./TextHeading.css";

export type AsTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TextHeadingInterface extends ComponentPropsWithRef<"h1"> {
  asTag: AsTagType;
  text: string;
}

const TextHeading = ({ asTag, text, ...props }: TextHeadingInterface) => {
  switch (asTag) {
    case "h1":
      return <h1 {...props}>{text}</h1>;
    case "h2":
      return <h2 {...props}>{text}</h2>;
    case "h3":
      return <h3 {...props}>{text}</h3>;
    case "h4":
      return <h4 {...props}>{text}</h4>;
    case "h5":
      return <h5 {...props}>{text}</h5>;
    case "h6":
      return <h6 {...props}>{text}</h6>;
    default:
      return <h1 {...props}>{text}</h1>;
  }
};

export default TextHeading;
