import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextHeading } from "../components/Text";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Heading",
  component: TextHeading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes:{
    asTag:{
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: 'select' },
    }
  }
} as ComponentMeta<typeof TextHeading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextHeading> = (args) => <TextHeading {...args} />;

export const h1 = Template.bind({});
h1.args = {
  text:'Header tag h1',
  asTag: "h1",
};
export const h2 = Template.bind({});
h2.args = {
  text:'Header tag h2',
  asTag: "h2",
};
export const h3 = Template.bind({});
h3.args = {
  text:'Header tag h3',
  asTag: "h3",
};
export const h4 = Template.bind({});
h4.args = {
  text:'Header tag h4',
  asTag: "h4",
};
export const h5 = Template.bind({});
h5.args = {
  text:'Header tag h5',
  asTag: "h5",
};
export const h6 = Template.bind({});
h6.args = {
  text:'Header tag h6',
  asTag: "h6",
};

