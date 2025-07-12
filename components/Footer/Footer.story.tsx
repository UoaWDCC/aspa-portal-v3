import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const socialMediaLinks = [
  { name: "Discord", icon: "/discord.png", href: "https://discord.com" },
  { name: "LinkedIn", icon: "/linkedin.png", href: "https://www.linkedin.com/company/aspa-uoa/" },
  { name: "Instagram", icon: "/instagram.png", href: "https://www.instagram.com/aspa.uoa/" },
  { name: "Facebook", icon: "/facebook.png", href: "https://facebook.com" }
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
