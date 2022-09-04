import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    cardHeading: 'Card Heading',
    cardText:
      "Where you can find programming resources for web development such as HTML, CSS, Javascript, Bootstrap, Programming Resources, Web Design.",
    cardControls: (
      <>
        <Button style={{color:'white'}} btnStyle={"success"} btnLabel="Click One" />
      </>
    ),
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <Card width={300} {...args} />
);

export const BaseCard = Template.bind({});

BaseCard.args = {
  cardDirection:'rows',
};

export const CardDirectionRow = Template.bind({});

CardDirectionRow.args = {
  cardHeading: 'Card Heading',
  cardText:'Small Text',
  width:400,
  cardDirection:'columns',
  cardControls:null
};