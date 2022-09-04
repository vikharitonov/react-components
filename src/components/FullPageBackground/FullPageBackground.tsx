import React, { ComponentPropsWithoutRef } from "react";

import "./FullPageBackground.css";

interface FullPageBackgroundInterface extends ComponentPropsWithoutRef<"div"> {
  show?: boolean
}

const FullPageBackground = ({
  show,
  children,
  ...props
}: FullPageBackgroundInterface) => {
//TODO: rewrite to use context.
  if (show){
    return (
      <div className="full-page-bg" {...props}>
        {children}
      </div>
    );
  } else {
    return null
  }
  
};

export default FullPageBackground;
