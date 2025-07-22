import { Meta, StoryObj } from "@storybook/react";
import { HeroBanner } from "./HeroBanner";

const meta: Meta<typeof HeroBanner> = {
  title: "Shared/Event/HeroBanner",
  component: HeroBanner,
};

export default meta;

export const VideoBackground: StoryObj<typeof HeroBanner> = {
  args: {
    title: "ASPA EVENTS",
    backgroundUrl: "/event_herobanner_example.mp4",
    backgroundType: "video",
    animated: true,
  },
};

export const ImageBackground: StoryObj<typeof HeroBanner> = {
  args: {
    title: "ASPA EVENTS",
    backgroundUrl: "/event_herobanner_example.png",
    backgroundType: "image",
    animated: true,
  },
};
