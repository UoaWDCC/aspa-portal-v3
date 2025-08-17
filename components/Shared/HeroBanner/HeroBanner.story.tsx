import { Meta, StoryObj } from "@storybook/react";
import { HeroBanner } from "./HeroBanner";

const meta: Meta<typeof HeroBanner> = {
  title: "Shared/Event/HeroBanner",
  component: HeroBanner,
  argTypes: {
    w: {
      control: { type: "text" },
      description: "Width of the hero banner",
    },
    h: {
      control: { type: "text" },
      description: "Height of the hero banner",
    },
    maw: {
      control: { type: "text" },
      description: "Max width",
    },
    mah: {
      control: { type: "text" },
      description: "Max height",
    },
    miw: {
      control: { type: "text" },
      description: "Min width",
    },
    mih: {
      control: { type: "text" },
      description: "Min height",
    },
    mediaClassName: {
      control: { type: "text" },
      description: "Additional CSS class for media element",
    },
  },
};

export default meta;

export const VideoBackground: StoryObj<typeof HeroBanner> = {
  args: {
    headerTitleProps: { text: "ASPA EVENTS" },
    backgroundUrl: "/event_herobanner_example.mp4",
    backgroundType: "video",
  },
};

export const ImageBackground: StoryObj<typeof HeroBanner> = {
  args: {
    headerTitleProps: { text: "ASPA EVENTS" },
    backgroundUrl: "/event_herobanner_example.png",
    backgroundType: "image",
  },
};

export const CustomSize: StoryObj<typeof HeroBanner> = {
  args: {
    headerTitleProps: { text: "ASPA EVENTS" },
    backgroundUrl: "/event_herobanner_example.png",
    backgroundType: "image",
    w: "80vw",
    h: "50vh",
  },
};

export const WithConstraints: StoryObj<typeof HeroBanner> = {
  args: {
    headerTitleProps: { text: "ASPA EVENTS" },
    backgroundUrl: "/event_herobanner_example.png",
    backgroundType: "image",
    w: "100%",
    h: "40vw",
    maw: 1200,
    mah: "80vh",
    miw: 300,
    mih: "200px",
  },
};

export const FixedDimensions: StoryObj<typeof HeroBanner> = {
  args: {
    headerTitleProps: { text: "ASPA EVENTS" },
    backgroundUrl: "/event_herobanner_example.png",
    backgroundType: "image",
    w: 800,
    h: 400,
  },
};