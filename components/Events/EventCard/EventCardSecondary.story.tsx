import { Meta, StoryObj } from "@storybook/react";
import { EventCardSecondary } from "./EventCardSecondary";

const meta: Meta<typeof EventCardSecondary> = {
  title: "Events/EventCard/EventCardSecondary",
  component: EventCardSecondary,
  argTypes: {
    event1: { id: "1", name: "CASUAL NIGHT @ AKL CBD", date: "TUES & THUR 6:30-8:00PM", price: 6, location: "Orange Pool Club [9 City Road]", description: "Join us for a casual night out at the Orange Pool Club!", imageUrl: "https://www.bartonmcgill.co.nz/wp-content/uploads/2023/12/51S4Ow-YSgL-_AC_SL1500_.jpg" },
    event2: { id: "2", name: "KARAOKE NIGHT @ AKL CBD", date: "FRI 8:00-11:00PM", price: 10, location: "Orange Pool Club [9 City Road]", description: "Show off your singing skills at our Karaoke Night!", imageUrl: "https://gamesforfun.com/wp-content/uploads/2018/05/mini-ball-set-replacement-2-ball.jpg" },
  },
};

export default meta;

export const Default: StoryObj<typeof EventCardSecondary> = {
  args: {
    event1: { id: "1", name: "CASUAL NIGHT @ AKL CBD", date: "TUES & THUR 6:30-8:00PM", price: 6, location: "Orange Pool Club [9 City Road]", description: "Join us for a casual night out at the Orange Pool Club!", imageUrl: "https://www.bartonmcgill.co.nz/wp-content/uploads/2023/12/51S4Ow-YSgL-_AC_SL1500_.jpg" },
    event2: { id: "2", name: "KARAOKE NIGHT @ AKL CBD", date: "FRI 8:00-11:00PM", price: 10, location: "Orange Pool Club [9 City Road]", description: "Show off your singing skills at our Karaoke Night!", imageUrl: "https://gamesforfun.com/wp-content/uploads/2018/05/mini-ball-set-replacement-2-ball.jpg" },
  },
};