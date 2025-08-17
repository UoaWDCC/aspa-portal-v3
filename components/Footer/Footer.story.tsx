import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const socialMediaLinks = [
  { name: "Discord", icon: "discord", href: "https://discord.com" },
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/company/aspa-uoa/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/aspa.uoa/",
  },
  { name: "Facebook", icon: "facebook", href: "https://facebook.com" },
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
    footerBg: "",
  },
};
