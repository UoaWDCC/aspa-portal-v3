import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Shared/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

export const Grey: StoryObj<typeof Button> = {
  args: { variant: "grey", children: "Button" },
};

export const Lightgrey: StoryObj<typeof Button> = {
  args: { variant: "lightgrey", children: "Button" },
};

export const Darkgrey: StoryObj<typeof Button> = {
  args: { variant: "darkgrey", children: "Button" },
};

export const GreyBorder: StoryObj<typeof Button> = {
  args: { variant: "grey-border", children: "Button" },
};

export const LightGreyBorder: StoryObj<typeof Button> = {
  args: { variant: "lightgrey-border", children: "Button" },
};

export const DarkGreyBorder: StoryObj<typeof Button> = {
  args: { variant: "darkgrey-border", children: "Button" },
};