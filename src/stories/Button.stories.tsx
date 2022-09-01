import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button/Button";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes:{
    btnStyle:{
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
  btnStyle:'light',
  btnLabel: "Button",
};

export const Dark = Template.bind({});
Dark.args = {
  btnStyle:'dark',
  btnLabel: "Button",
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  btnStyle: 'primary',
  btnLabel: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnStyle:"secondary",
  btnLabel: "Button",
};

export const Success = Template.bind({});
Success.args = {
  btnStyle:"success",
  btnLabel: "Button",
};

export const Error = Template.bind({});
Error.args = {
  btnStyle:"error",
  btnLabel: "Button",
};

export const Warning = Template.bind({});
Warning.args = {
  btnStyle:"warning",
  btnLabel: "Button",
};

export const Info = Template.bind({});
Info.args = {
  btnStyle:"info",
  btnLabel: "Button",
};

export const Invisible = Template.bind({});
Invisible.args = {
  btnStyle:"invisible",
  btnLabel: "Button",
};

export const Accent = Template.bind({});
Accent.args = {
  btnStyle:"accent",
  btnLabel: "Button",
};

export const Small = Template.bind({});
Small.args = {
  btnLabel: "Button",
  btnSize:'sm'
};

export const Medium = Template.bind({});
Medium.args = {
  btnLabel: "Button",
  btnSize:'md'
};

export const Large = Template.bind({});
Large.args = {
  btnLabel: "Button",
  btnSize:'lg'
};


