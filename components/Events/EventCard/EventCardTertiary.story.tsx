import { Meta, StoryObj } from "@storybook/react";
import { EventCardTertiary } from "./EventCardTertiary";
import { Event } from "@/payload-types";

const eventsList: Event[] = [
  {
    id: 0,
    updatedAt: "2024-06-01T00:00:00.000Z",
    createdAt: "2024-05-01T00:00:00.000Z",
    name: "CASUAL NIGHT @ AKL CBD",
    dateTime: "TUES & THUR 6:30-8:00PM",
    price: "6",
    location: "Orange Pool Club [9 City Road]",
    description: "Join us for a casual night out at the Orange Pool Club!",
    imageUrl:
      "https://www.bartonmcgill.co.nz/wp-content/uploads/2023/12/51S4Ow-YSgL-_AC_SL1500_.jpg",
    date: null,
  },
  {
    id: 1,
    updatedAt: "2024-06-02T00:00:00.000Z",
    createdAt: "2024-05-02T00:00:00.000Z",
    name: "KARAOKE NIGHT @ AKL CBD",
    dateTime: "FRI 8:00-11:00PM",
    price: "10",
    location: "Orange Pool Club [9 City Road]",
    description: "Show off your singing skills at our Karaoke Night!",
    imageUrl:
      "https://gamesforfun.com/wp-content/uploads/2018/05/mini-ball-set-replacement-2-ball.jpg",
    date: null,
  },
];

const meta: Meta<typeof EventCardTertiary> = {
  title: "Events/EventCard/EventCardTertiary",
  component: EventCardTertiary,
  argTypes: {
    events: eventsList,
  },
};

export default meta;

export const Default: StoryObj<typeof EventCardTertiary> = {
  args: {
    events: eventsList,
  },
};
