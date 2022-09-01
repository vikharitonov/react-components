import React from "react";
import Button from "../../components/Button/Button";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import Image from "../../components/Image/Image";
import { TextHeading } from "../../components/Text";
import placeholder from "../../assets/imgs/plasceholders/placeholder.webp";

const HomePage = () => {
  const handleBtnClick = () => {
    alert(`It's alive!!!`);
  };
  return (
    <>
      <>
        <TextHeading
          className="bg-color-dark color-light-0"
          asTag="h1"
          text="Button"
        />
        <Button
          btnLabel="My first button"
          btnSize={"lg"}
          btnStyle="accent"
          onClick={handleBtnClick}
        />
      </>
      <>
        <TextHeading
          className="bg-color-dark color-light-0"
          asTag="h1"
          text="Button Group"
        />
        <ButtonGroup groupSize={"sm"} groupType="dark">
          <Button
            btnLabel="My first button"
            btnSize={"lg"}
            onClick={handleBtnClick}
          />
          <Button btnLabel="My second button" onClick={handleBtnClick} />
          <Button
            btnLabel="My third button"
            btnSize={"lg"}
            onClick={handleBtnClick}
          />
        </ButtonGroup>
        <br />
        <br />
        <ButtonGroup groupSize={"sm"} groupType="dark">
          {["<", 1, 2, 3, ">"].map((i, index) => {
            return (
              <Button
                key={"btn" + index}
                btnLabel={`${i}`}
                onClick={handleBtnClick}
              />
            );
          })}
        </ButtonGroup>
      </>
      <>
        <TextHeading
          className="bg-color-dark color-light-0"
          asTag="h1"
          text="Image"
        />
        <div style={{ width: 700, height: 400 }}>
          <Image src={placeholder} alt="Fox placeholder"></Image>
        </div>
      </>
      <>
        <TextHeading
          className="bg-color-dark color-light-0"
          asTag="h1"
          thin
          text="Headeing with subheading"
        ><small>Sub header</small></TextHeading>

      </>
    </>
  );
};

export default HomePage;
