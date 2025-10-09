import type { Meta, StoryObj } from "@storybook/react";
import MatchFound from "./MatchFound";

const meta: Meta<typeof MatchFound> = {
  title: "Matchmaking/MatchFound",
  component: MatchFound,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onStart: { action: "start clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof MatchFound>;

export const Default: Story = {
  args: {
    eventName: "EVENT NAME",
    player1Name: "Alejandro",
    player1Ball: 4,
    player2Name: "Alexander",
    player2Ball: 4,
  },
};
