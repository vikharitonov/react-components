import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button/Button";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button Group",
  component: ButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    groupType: {
      options: [
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
        "info",
        "light",
        "dark",
        "invisible",
        "accent",
        null,
      ],
      control: { type: "select" },
    },
    groupSize: {
      options: ["sm", "md", "lg", null],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const BasicTemplate: ComponentStory<typeof ButtonGroup> = (args) => {
  return (
    <ButtonGroup {...args}>
      {["One", "Two", "Three"].map((i) => {
        return <Button btnLabel={`${i}`} />;
      })}
    </ButtonGroup>
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
  groupType: "light",
};

export const Column = BasicTemplate.bind({});
Column.args = {
  groupType: "light",
  groupDirection: "column",
};

const PaginattionTemplate: ComponentStory<typeof ButtonGroup> = (args) => {
  return (
    <ButtonGroup {...args}>
      {["<", 1, 2, 3, ">"].map((i) => {
        return <Button btnLabel={`${i}`} />;
      })}
    </ButtonGroup>
  );
};

export const Pagination = PaginattionTemplate.bind({});
Pagination.args = {
  groupType: "accent",
  groupSize: "sm",
};
