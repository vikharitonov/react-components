import React from "react";
import Button from "../../components/Button/Button";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import { TextHeading } from "../../components/Text";

const HomePage = () => {
  const handleBtnClick = () => {
    alert(`It's alive!!!`);
  };
  return (
    <>
      <hr />
      <TextHeading className="bg-color-success color-dark" asTag="h1" text="Button"/>
      <Button
        label="My first button"
        btnSize={"lg"}
        btnType="accent"
        onClick={handleBtnClick}
      />
      <hr />
      <TextHeading className="bg-color-success color-dark" asTag="h1" text="Button Group"/>
      <ButtonGroup groupSize={"sm"} groupType="dark">
        <Button
          label="My first button"
          btnSize={"lg"}
          onClick={handleBtnClick}
        />
        <Button label="My second button" onClick={handleBtnClick} />
        <Button
          label="My third button"
          btnSize={"lg"}
          onClick={handleBtnClick}
        />
      </ButtonGroup>
      <ButtonGroup groupSize={"sm"} groupType="dark">
        {['<',1, 2, 3,'>',].map((i, index) => {
          return <Button key={'btn'+index} label={`${i}`} onClick={handleBtnClick} />;
        })}
      </ButtonGroup>
    </>
  );
};

export default HomePage;
