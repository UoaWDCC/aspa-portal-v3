import { Meta, StoryObj } from "@storybook/react";
import { ExecutiveCollection } from "./ExecutiveCollection";
import { Executive } from "@/payload-types";

const meta: Meta<typeof ExecutiveCollection> = {
  title: "Contact/Collection",
  component: ExecutiveCollection,
  argTypes: {
    executives: { control: "object" },
  },
};

export default meta;

const executives: Executive[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    type: "main",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://via.placeholder.com/120",
    backContent: "This is the back of the card.",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
];

export const Default: StoryObj<typeof ExecutiveCollection> = {
  args: {
    executives,
    gutter: "md",
    outerPaddingTop: "",
    outerPaddingBottom: "",
    outerPaddingLeft: "",
    outerPaddingRight: "",
    innerPaddingTop: "",
    innerPaddingBottom: "",
    innerPaddingLeft: "",
    innerPaddingRight: "",
  },
};
