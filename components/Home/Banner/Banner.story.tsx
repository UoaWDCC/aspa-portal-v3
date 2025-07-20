import { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";

const meta: Meta<typeof Banner> = {
  title: "Home/Banner",
  component: Banner,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    groupText: { control: "text" },
    titleImageSrc: { control: "text" },
    titleImageAlt: { control: "text" },
  },
};

export default meta;

export const Default: StoryObj<typeof Banner> = {
  args: {
    title: "Welcome to Auckland Student Pool Association!",
    description:
      "Here you can register to become a member of the club, log in to your account, and sign up for club events. Check out the list of current events to see what we’ve planned for the future, or have a look at our past events to see what we’re all about and some of the highlights of past years.",
    titleImageSrc: "/aspa_title.svg",
    titleImageAlt: "ASPA Title",
  },
};
