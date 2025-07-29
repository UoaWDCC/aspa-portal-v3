import type { Meta, StoryObj } from "@storybook/react";
import { HeaderTitle } from "./HeaderTitle";

const meta: Meta<typeof HeaderTitle> = {
  title: "Shared/HeaderTitle",
  component: HeaderTitle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An animated title component with floating animation and layered text shadow effects.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "The text content to display in the animated title",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the component",
    },
    shadowLayers: {
      control: { type: "range", min: 0, max: 14, step: 1 },
      description: "The number of shadow layers to display (0-14)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "BRAND",
  },
};

export const LongText: Story = {
  args: {
    text: "COMPANY",
  },
};

export const ShortText: Story = {
  args: {
    text: "GO",
  },
};

export const CustomText: Story = {
  args: {
    text: "HERO",
  },
};

export const WithCustomClass: Story = {
  args: {
    text: "STYLED",
    className: "custom-animated-title",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing how to apply custom CSS classes to the component.",
      },
    },
  },
};

export const CustomShadows: Story = {
  args: {
    text: "SHADOWS",
    shadowLayers: 5,
  },
};

export const Playground: Story = {
  args: {
    text: "EDIT ME",
    shadowLayers: 14,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground - edit the text and shadow layers to see how it looks with different content.",
      },
    },
  },
};
