import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Shared/Button",
  component: Button,
};

export default meta;

export const TemplateButton: StoryObj<typeof Button> = {
  args: { children: "Button", outlined: true },
};
