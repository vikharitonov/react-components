import React from "react";
import Button from "../../components/Button/Button";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";

const HomePage = () => {
  const handleBtnClick = () => {
    alert(`It's alive!!!`);
  };
  return (
    <>
      <hr />
      <h1>Button </h1>
      <Button
        label="My first button"
        btnSize={"lg"}
        btnType="accent"
        onClick={handleBtnClick}
      />
      <hr />
      <h1>Button Group</h1>
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
        {['<',1, 2, 3,'>',].map((i) => {
          return <Button label={`${i}`} onClick={handleBtnClick} />;
        })}
      </ButtonGroup>
    </>
  );
};

export default HomePage;
