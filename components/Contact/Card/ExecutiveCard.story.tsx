import { Meta, StoryObj } from "@storybook/react";
import { ExecutiveCard } from "./ExecutiveCard";

const meta: Meta<typeof ExecutiveCard> = {
  title: "Contact/Card",
  component: ExecutiveCard,
  argTypes: {
    executive: { control: "object" },
  },
};

export default meta;

export const Default: StoryObj<typeof ExecutiveCard> = {
  args: {
    executive: {
      name: "Lorem ipsum",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    badgeColor: "#d78840",
  },
};
