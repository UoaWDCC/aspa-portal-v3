import { Meta, StoryObj } from "@storybook/react";
import { EventCard } from "./SingleEventCard";

const meta: Meta<typeof EventCard> = {
  title: "Shared/Event/SingleEventCard",
  component: EventCard,
  tags: ["autodocs"],
  argTypes: {
    event: {
      control: "object",
    },
  },
};

export default meta;

export const Default: StoryObj<typeof EventCard> = {
  args: {
    event: {
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/event_example.svg",
      dateTime: "2025-08-15 18:00",
      price: "$10",
      location: "University of Auckland, OGGB 260-092",
    },
  },
};
