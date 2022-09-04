import React, { ComponentPropsWithoutRef, useState } from "react";
import Button from "../../components/Button/Button";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import Image from "../../components/Image/Image";
import { TextHeading } from "../../components/Text";
import placeholder from "../../assets/imgs/plasceholders/placeholder.webp";
import Table from "../../components/Table/Table";
import FullPageBackground from "../../components/FullPageBackground/FullPageBackground";
import Card from "../../components/Card/Card";

import "./Header.css";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";

const headers = ["Table Header One", "Table Header Two", "Table Header Three"];
const rows = [
  ["Table Cell Content", "Table Cell Content", "Table Cell Content"],
  ["Table Cell Content", "Table Cell Content", "Table Cell Content"],
  ["Table Cell Content", "Table Cell Content", "Table Cell Content"],
  ["Table Cell Content", "Table Cell Content", "Table Cell Content"],
];

interface WrapperInterface extends ComponentPropsWithoutRef<"div"> {}
const Wrapper = ({ children, ...props }: WrapperInterface) => {
  const style = {
    ...{},
    ...{ width: "50%", margin: "0 auto" },
    ...props.style,
  };
  return (
    <div {...props} style={style}>
      {children}
    </div>
  );
};

const HomePage = () => {
  const handleBtnClick = () => {
    alert(`It's alive!!!`);
  };
  const [showFPBG, setShowFPBG] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-color-light-2">
        <nav className="nav main">
          <ul>
            <li>
              <Button btnSize={"sm"} btnStyle={"primary"} btnLabel="Album" onClick={()=>{navigate('album')}} />
            </li>
          </ul>
        </nav>
      </header>
      {/* <FullPageBackground show={showFPBG}>
        {" "}
        <Card
          width={400}
          cardHeading="Card heading"
          cardText="Some text for card text field."
          cardDirection="columns"
          cardControls={
            <Button
              btnLabel="Close"
              onClick={() => {
                setShowFPBG(!showFPBG);
              }}
            />
          }
        />
      </FullPageBackground>
      <TextHeading
        className="bg-color-dark color-light-0"
        asTag="h1"
        text="Button"
      />
      <Wrapper>
        <Button
          btnLabel="My first button"
          btnSize={"lg"}
          btnStyle="accent"
          onClick={handleBtnClick}
        />
      </Wrapper>
      <TextHeading
        className="bg-color-dark color-light-0"
        asTag="h1"
        text="Button Group"
      />
      <Wrapper>
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
      </Wrapper>
      <TextHeading
        className="bg-color-dark color-light-0"
        asTag="h1"
        text="Image"
      />
      <Wrapper>
        <Image src={placeholder} alt="Fox placeholder"></Image>
      </Wrapper>
      <TextHeading
        className="bg-color-dark color-light-0"
        asTag="h1"
        thin
        text="Headeing with subheading"
      >
        <small>Sub header</small>
      </TextHeading>

      <TextHeading
        className="bg-color-dark color-light-0"
        asTag="h1"
        text="Table"
      />

      <Wrapper>
        <Table bordered hovered headers={headers} rows={rows} />
      </Wrapper>
      <TextHeading
        className="bg-color-dark color-light-0"
        asTag="h1"
        text="All page bg"
      />
      <Button
        btnLabel="Show full page bg"
        onClick={() => {
          setShowFPBG(!showFPBG);
        }}
      />
      <TextHeading
        className="bg-color-dark color-light-0"
        asTag="h1"
        text="Card"
      />
      <Wrapper>
        <Card
          width={400}
          cardHeading="Card heading"
          cardText="Some text for card text field."
        />
      </Wrapper> */}
    </>
  );
};

export default HomePage;
