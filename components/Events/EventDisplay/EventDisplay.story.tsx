import { Meta, StoryObj } from "@storybook/react";
import { EventDisplay, displayType } from "./EventDisplay";
import type { EventCardMainProps } from "../EventCard/EventCardMain";
import type { EventCardSecondaryProps } from "../EventCard/EventCardSecondary";
import { Event } from "@/payload-types";

const eventsList: Event[] = [
  {
    id: 0,
    updatedAt: "2024-06-01T00:00:00.000Z",
    createdAt: "2024-05-01T00:00:00.000Z",
    name: "ASPA Hackathon @ GRID AKL",
    dateTime: "SAT & SUN 10:00-8:00pm",
    price: "10",
    location: "GridAKL [101 Pakenham St W]",
    description:
      "WDCC and SESA are so excited to announce our flagship hackathon for 2025. Join us for a two-day event where you alongside other students will work together to design and build unique applications - inspired by our surprise theme revealed on the day. Win from a prize pool of OVER $1.5k and grab some awesome sponsor merch along the way. Get mentored by experienced industry professionals - who will be on site ready to support your team!",
    imageUrl:
      "https://www.bartonmcgill.co.nz/wp-content/uploads/2023/12/51S4Ow-YSgL-_AC_SL1500_.jpg",
    date: null,
  },
  {
    id: 1,
    updatedAt: "2024-06-02T00:00:00.000Z",
    createdAt: "2024-05-02T00:00:00.000Z",
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
    id: 2,
    updatedAt: "2024-06-03T00:00:00.000Z",
    createdAt: "2024-05-03T00:00:00.000Z",
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

const types = [displayType.Main, displayType.Secondary];

const propsArray = [
  // Main card props
  {
    bg_color: "#717882",
    font_color: "#FFFFFF",
    max_height: 350,
    min_height: 250,
    title_fs: "5vh",
    info_fs: "3vh",
    desc_fs: "2.5vh",
    text_margins: "sm",
    title_fw: "bolder",
    info_fw: "normal",
    desc_fw: "normal",
  } as EventCardMainProps,
  // Secondary card props
  {
    bg_color: "#717882",
    font_color: "#FFFFFF",
    max_height: 250,
    min_height: 200,
    title_fs: "3vh",
    info_fs: "2vh",
    text_gap: "lg",
    title_fw: "bold",
    info_fw: "normal",
  } as EventCardSecondaryProps,
];

const meta: Meta<typeof EventDisplay> = {
  title: "Events/EventDisplay",
  component: EventDisplay,
  argTypes: {
    events: { control: "object" },
    displayTypes: { control: "object" },
    props: { control: "object" },
    title: { control: "text" },
    buttonText: { control: "text" },
  },
};

export default meta;

export const Default: StoryObj<typeof EventDisplay> = {
  args: {
    events: eventsList,
    displayTypes: types,
    props: propsArray,
    title: "Upcoming Events",
    buttonText: "View More Events",
  },
};
