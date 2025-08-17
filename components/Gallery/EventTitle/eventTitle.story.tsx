import { Meta, StoryObj } from "@storybook/react";
import EventTitle, {
  EventTitleProps,
} from "@/components/Gallery/EventTitle/eventTitle";

const sampleEvent = {
  title: "CASUAL NIGHT @ AKL CBD",
  year: 2025,
  month: "October",
  day: "1st",
  location: "Orange pool club (9 city road)",
  photos: [
    { id: 1, src: "/event_example.svg", alt: "Photo 1" },
    { id: 2, src: "/event_example.svg", alt: "Photo 2" },
  ],
};

const testTitleProps: EventTitleProps = {
  titleText: sampleEvent.title,
  year: sampleEvent.year.toString(),
  month: sampleEvent.month,
  day: sampleEvent.day,
  location: sampleEvent.location,
  titleTextSize: "48.8px",
  titleTextFont: '"Nova Square", sans-serif',
  titleTextColor: "#717882",
  titlePadding: "0 30px",
  eventDetailsGap: "20px 50px",
  eventDetailsPadding: "0 30px",
  eventDetailsColor: "#EBEBEB",
};
const meta: Meta<typeof EventTitle> = {
  title: "Gallery/EventTitle",
  component: EventTitle,
  argTypes: {},
};

export default meta;

export const Default: StoryObj<typeof EventTitle> = {
  args: {
    ...testTitleProps,
    month: "sdfsfds",
    padding: "234",
    eventDetailsColor: "#E43543",
  },
};
