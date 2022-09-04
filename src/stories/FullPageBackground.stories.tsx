import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FullPageBackground from "../components/FullPageBackground/FullPageBackground";
import Button from "../components/Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Background",
  component: FullPageBackground,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FullPageBackground>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FullPageBackground> = (args) => {
  const [show, setShow] = useState(false);
  
  return (
    <>
    <Button btnLabel="Show" onClick={()=>{setShow(!show)}}/>
    <FullPageBackground
      show={show}
      onClick={() => {
        setShow(!show);
      }}
      {...args}
    >
      <Button btnLabel="Hide" onClick={()=>{setShow(!show)}}/>
    </FullPageBackground>
    </>
  );
};

export const FullPage = Template.bind({});

FullPage.args = {};
