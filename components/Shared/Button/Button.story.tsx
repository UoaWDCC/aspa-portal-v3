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

export const TemplateButton: StoryObj<typeof Button> = {
  args: { color: "orange", children: "Button", outlined: true},
};