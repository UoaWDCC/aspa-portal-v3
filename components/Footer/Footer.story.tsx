import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const socialMediaLinks = [
  { name: "Twitter", icon: "/twitter.svg", href: "https://twitter.com" },
  { name: "Facebook", icon: "/facebook.svg", href: "https://facebook.com" },
  { name: "Instagram", icon: "/instagram.svg", href: "https://instagram.com" },
];

const meta: Meta<typeof Footer> = {
  title: "Shared/Footer",
  component: Footer,
  argTypes: {},
};

export default meta;

export const Default: StoryObj<typeof Footer> = {
  args: {
    socialMediaLinks,
  },
};
