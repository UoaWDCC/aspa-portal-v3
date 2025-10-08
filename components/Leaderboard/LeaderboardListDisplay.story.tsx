import type { Meta, StoryObj } from "@storybook/react";
import { LeaderboardListDisplay } from "./LeaderboardListDisplay";

const meta: Meta<typeof LeaderboardListDisplay> = {
  title: "Components/LeaderboardListDisplay",
  component: LeaderboardListDisplay,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LeaderboardListDisplay>;

const sampleData = [
  { rank: 1, name: "Person 1", soloWon: 14, duoWon: 1, points: 150 },
  { rank: 2, name: "Person 12", soloWon: 12, duoWon: 2, points: 140 },
  { rank: 3, name: "Person 51", soloWon: 12, duoWon: 0, points: 120 },
  { rank: 4, name: "Person 17", soloWon: 10, duoWon: 2, points: 120 },
  { rank: 5, name: "Person 7", soloWon: 10, duoWon: 1, points: 110 },
  { rank: 6, name: "Person 20", soloWon: 9, duoWon: 3, points: 100 },
  { rank: 7, name: "Person 25", soloWon: 8, duoWon: 4, points: 95 },
  { rank: 8, name: "Person 30", soloWon: 7, duoWon: 3, points: 90 },
];

export const Default: Story = {
  args: {
    leaderboard: sampleData,
  },
};

export const FewEntries: Story = {
  args: {
    leaderboard: sampleData.slice(0, 3),
  },
};

export const ManyEntries: Story = {
  args: {
    leaderboard: [
      ...sampleData,
      { rank: 9, name: "Person 35", soloWon: 6, duoWon: 4, points: 85 },
      { rank: 10, name: "Person 40", soloWon: 5, duoWon: 3, points: 80 },
    ],
  },
};
