import type { Meta, StoryObj } from "@storybook/react";
import TextMarquee from "./TextMarquee"; 
import "./TextMarquee.css"; 

const meta: Meta<typeof TextMarquee> = {
  title: "Components/TextMarquee",
  component: TextMarquee,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextMarquee>;

export const Default: Story = {
  args: {
    text: "🚀 Welcome to the Marquee!",
    bgColor: "bg-primary",
    textBg: "bg-secondary",
    textColor: "text-black",
  },
};

export const DarkMode: Story = {
  args: {
    text: "🌙 Dark mode in action",
    bgColor: "bg-dark",
    textBg: "bg-primary",
    textColor: "text-white",
  },
};

export const Highlighted: Story = {
  args: {
    text: "🔥 Breaking News 🔥",
    bgColor: "bg-secondary",
    textBg: "bg-dark",
    textColor: "text-white",
  },
};
