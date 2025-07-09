import { Meta, StoryObj } from "@storybook/react";
import { EventCardMain } from "./EventCardMain";

const meta: Meta<typeof EventCardMain> = {
  title: "Events/EventCard/EventCardMain",
  component: EventCardMain,
  argTypes: {
    event: { control: "object" },
  },
};

export default meta;

export const Default: StoryObj<typeof EventCardMain> = {
  args: {
  },
};