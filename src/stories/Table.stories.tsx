import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "../components/Table/Table";

const headers = ["Table Header 1", "Table Header 2", "Table Header 3", "Table Header 4", "Table Header 5", "Table Header 6", ];
const rows = [
  ["Table Cell Content", "Table Cell Content", "Table Cell Content","Table Cell Content", "Table Cell Content", "Table Cell Content"],
  ["Table Cell Content", "Table Cell Content", "Table Cell Content","Table Cell Content", "Table Cell Content", "Table Cell Content"],
  ["Table Cell Content", "Table Cell Content", "Table Cell Content","Table Cell Content", "Table Cell Content", "Table Cell Content"],
  ["Table Cell Content", "Table Cell Content", "Table Cell Content","Table Cell Content", "Table Cell Content", "Table Cell Content"],
];
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Table",
  component: Table,
  args: {
    headers: headers,
    rows: rows,
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Base = Template.bind({});

Base.args = {};

export const Stripped = Template.bind({});

Stripped.args = {
  stripped: true,
};

export const StrippedColumns = Template.bind({});

StrippedColumns.args = {
  strippedColumns: true,
};

export const Hoverable = Template.bind({});

Hoverable.args = {
  hovered: true,
};

export const Bordered = Template.bind({});

Bordered.args = {
  bordered: true,
};