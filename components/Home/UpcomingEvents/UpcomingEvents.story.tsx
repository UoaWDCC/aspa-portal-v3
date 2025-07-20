import { Meta, StoryObj } from "@storybook/react";
import { UpcomingEvent } from "./UpcomingEvents";
import "@/lib/variables.css";

const meta: Meta<typeof UpcomingEvent> = {
  title: "Home/PastEvents",
  component: UpcomingEvent,
  argTypes: {
    events: { control: "object" },
  },
};

export default meta;

export const Default: StoryObj<typeof UpcomingEvent> = {
  args: {
    events: [
      {
        name: "Casual night @ AKL CBD",
        time: "TUES & THUR 6:30-8:00PM",
        price: "$10",
        location: "Orange Pool Club [9 City Road]",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageUrl: "/event_example.svg",
      },
      {
        name: "Casual night @ North Shore",
        time: "April 3rd 6:00-9:00",
        price: "$6",
        location: "Pool & Blues [217 Archers Road]",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageUrl: "/event_example.svg",
      },
      {
        name: "Event Name",
        time: "Event Time",
        price: "Event Price",
        location: "Event Location",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageUrl: "/event_example.svg",
      },
    ],
  },
};
