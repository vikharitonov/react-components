import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button/Button";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes:{
    btnType:{
      options: ['primary','secondary','success','error','warning','info','light','dark','invisible', 'accent', null],
      control: { type: 'select' },
    },
    btnSize:{
      options: ['sm','md', 'lg', null],
      control: { type: 'select' },
    },
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Light = Template.bind({});
Light.args = {
  btnType:'light',
  label: "Button",
};

export const Dark = Template.bind({});
Dark.args = {
  btnType:'dark',
  label: "Button",
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  btnType: 'primary',
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnType:"secondary",
  label: "Button",
};

export const Success = Template.bind({});
Success.args = {
  btnType:"success",
  label: "Button",
};

export const Error = Template.bind({});
Error.args = {
  btnType:"error",
  label: "Button",
};

export const Warning = Template.bind({});
Warning.args = {
  btnType:"warning",
  label: "Button",
};

export const Info = Template.bind({});
Info.args = {
  btnType:"info",
  label: "Button",
};

export const Invisible = Template.bind({});
Invisible.args = {
  btnType:"invisible",
  label: "Button",
};

export const Accent = Template.bind({});
Accent.args = {
  btnType:"accent",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  label: "Button",
  btnSize:'sm'
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Button",
  btnSize:'md'
};

export const Large = Template.bind({});
Large.args = {
  label: "Button",
  btnSize:'lg'
};


