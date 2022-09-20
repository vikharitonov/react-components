import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { TextHeading } from "../../../components/Text";

export const DpHeader = ({title}:{title:string}) => {
  const navigate = useNavigate();

  return (
    <>
      <header className="dp-header">
        <Button
          btnSize="sm"
          btnStyle={"dark"}
          btnLabel="< Home"
          onClick={() => navigate("/")}
        />
        <TextHeading asTag="h1" text={title}/>
      </header>
    </>
  );
};
