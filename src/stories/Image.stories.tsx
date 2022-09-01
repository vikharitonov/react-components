import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "../components/Image/Image";
import placeholder from './imgs/plasceholders/placeholder.webp'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Image",
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Image>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const BaseImage = Template.bind({});

BaseImage.args = {
  src:placeholder,
  alt:'Base Image',
};

export const FixedSizeImage = Template.bind({});

FixedSizeImage.args = {
  src:placeholder,
  alt:'Fixed Size Image',
  size:500
};

export const FixedWidhtImage = Template.bind({});

FixedWidhtImage.args = {
  src:placeholder,
  alt:'Fixed Width Image',
  width:600
};

export const FixedHeightImage = Template.bind({});

FixedHeightImage.args = {
  src:placeholder,
  alt:'Fixed Width Image',
  height:100
};