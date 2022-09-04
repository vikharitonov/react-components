import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { capitalize } from "../../utils";
import Image from "../Image/Image";

import "./Card.css";

interface CardInterface extends ComponentPropsWithoutRef<"div"> {
  width?: number | string | undefined;
  cardHeading?: ReactNode | string;
  cardText?: ReactNode | string;
  cardControls?: ReactNode;
  cardDirection?: "rows" | "columns";
}

const Card = ({
  cardHeading,
  cardText,
  cardControls,
  cardDirection = "rows",
  width,
  ...props
}: CardInterface) => {
  console.log(`gridTemplate${capitalize(cardDirection)}`);
  return (
    <div
      {...props}
      className="card"
      style={{
        width: width,
        [`gridTemplate${capitalize(cardDirection)}`]: `1fr auto`,
      }}
    >
      <>
        <Image />

        <div className="card-body" style={{}}>
          {typeof cardHeading === "string" ? (
            <span className="h2 card-title">{cardHeading}</span>
          ) : React.isValidElement(cardHeading) ? (
            cardHeading
          ) : null}

          {typeof cardText === "string" ? (
            <p className="card-text">{cardText}</p>
          ) : React.isValidElement(cardText) ? (
            cardText
          ) : null}

          {React.isValidElement(cardControls) ? (
            <div className="card-controls">{cardControls}</div>
          ) : null}
        </div>
      </>
    </div>
  );
};

export default Card;
