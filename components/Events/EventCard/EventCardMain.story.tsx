import { Meta, StoryObj } from "@storybook/react";
import { EventCardMain } from "./EventCardMain";

const exampleEvent = {
  id: "1",
  name: "CASUAL NIGHT @ AKL CBD",
  date: "TUES & THUR 6:30-8:00PM",
  price: 6,
  location: "Orange Pool Club [9 City Road]",
  description: "Join us for a casual night out at the Orange Pool Club!",
  imageUrl:
    "https://www.bartonmcgill.co.nz/wp-content/uploads/2023/12/51S4Ow-YSgL-_AC_SL1500_.jpg",
  buttonText: "Sign Up Now",
};

const meta: Meta<typeof EventCardMain> = {
  title: "Events/EventCard/EventCardMain",
  component: EventCardMain,
  argTypes: {
    event: exampleEvent,
  },
};

export default meta;

export const Default: StoryObj<typeof EventCardMain> = {
  args: {
    event: exampleEvent,
  },
};
