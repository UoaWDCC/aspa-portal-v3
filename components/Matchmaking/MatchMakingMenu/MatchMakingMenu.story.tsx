import type { Meta, StoryObj } from "@storybook/react";
import MatchmakingMenu from "./MatchMakingMenu";

const meta: Meta<typeof MatchmakingMenu> = {
  title: "Matchmaking/MatchmakingMenu",
  component: MatchmakingMenu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onMatchSelect: { action: "match selected" },
  },
};

export default meta;
type Story = StoryObj<typeof MatchmakingMenu>;

export const Default: Story = {
  args: {
    eventName: "EVENT NAME",
    playerName: "Alejandro",
    ballNumber: 4,
  },
};
