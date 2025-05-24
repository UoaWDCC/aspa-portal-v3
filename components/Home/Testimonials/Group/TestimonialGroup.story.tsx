import { Meta, StoryObj } from "@storybook/react";
import { TestimonialGroup } from "./TestimonialGroup";

const meta: Meta<typeof TestimonialGroup> = {
  title: "Home/Testimonials/Group",
  component: TestimonialGroup,
  argTypes: {
    testimonials: { control: "object" },
  },
};

export default meta;

export const Default: StoryObj<typeof TestimonialGroup> = {
  args: {
    testimonials: [
      {
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "John Doe",
      },
      {
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "John Doe",
      },
      {
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "John Doe",
      },
    ],
    paddingTop: "",
    paddingBottom: "",
    paddingleft: "",
    paddingRight: "",
    paddingBetween: "1vw",
    delay: 100,
  },
};
