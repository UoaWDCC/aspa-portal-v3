import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const socialMediaLinks = [
  { name: "Twitter", icon: "/twitter.svg", href: "https://twitter.com" },
  { name: "Facebook", icon: "/facebook.svg", href: "https://facebook.com" },
  { name: "Instagram", icon: "/instagram.svg", href: "https://www.instagram.com/aspa.uoa/" },
  { name: "LinkedIn", icon: "/linkedin.png", href: "https://www.linkedin.com/company/aspa-uoa/" },
];
const pages = [
  { title: "Home", route: "/home" },
  { title: "Events", route: "/events" },
  { title: "ASPA Team", route: "/team" },
  { title: "Register/Login", route: "/login" },
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
    pages,
  },
};
