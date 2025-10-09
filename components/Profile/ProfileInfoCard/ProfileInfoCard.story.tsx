import { Meta, StoryObj } from "@storybook/react";
import ProfileInfoCard from "@/components/Profile/ProfileInfoCard/ProfileInfoCard";

const meta: Meta<typeof ProfileInfoCard> = {
  title: "Profile/ProfileInfoCard",
  component: ProfileInfoCard,
  argTypes: {
    email: { control: "text" },
    username: { control: "text" },
    firstname: { control: "text" },
    lastname: { control: "text" },
    elo: { control: { type: "number", min: 0, max: 5000 } },
  },
};

export default meta;

export const Default: StoryObj<typeof ProfileInfoCard> = {
  args: {
    firstname: "Jane",
    lastname: "Doe",
    university: "University of Auckland",
    upi: "abcd123",
    email: "jane.doe@example.com",
    contactNum: "0123456789",
    skillLevel: "Intermediate",
  },
};
