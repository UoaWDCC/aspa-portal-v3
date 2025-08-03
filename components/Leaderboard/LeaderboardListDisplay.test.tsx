import React from "react";
import { render, screen } from "@testing-library/react";
import { LeaderboardListDisplay } from "./LeaderboardListDisplay";

const mockLeaderboard = [
  { rank: 1, name: "Person 1", soloWon: 14, duoWon: 1, points: 150 },
  { rank: 2, name: "Person 12", soloWon: 12, duoWon: 2, points: 140 },
  { rank: 3, name: "Person 51", soloWon: 12, duoWon: 0, points: 120 },
  { rank: 4, name: "Person 17", soloWon: 10, duoWon: 2, points: 120 },
  { rank: 5, name: "Person 7", soloWon: 10, duoWon: 1, points: 110 },
  { rank: 6, name: "Person 20", soloWon: 9, duoWon: 3, points: 100 },
  { rank: 7, name: "You", soloWon: 8, duoWon: 4, points: 95 },
  { rank: 8, name: "Person 30", soloWon: 7, duoWon: 3, points: 90 },
];

describe("LeaderboardListDisplay", () => {
  it("renders all leaderboard entries", () => {
    render(
      <LeaderboardListDisplay leaderboard={mockLeaderboard} />
    );

    mockLeaderboard.forEach((entry) => {
      expect(screen.getByText(entry.name)).toBeInTheDocument();
      expect(screen.getByText(`${entry.points}`)).toBeInTheDocument();
    });
  });

  it("renders the sticky row for the current user", () => {
    render(
      <LeaderboardListDisplay
        leaderboard={mockLeaderboard}
        currentUserRank={7}
      />
    );

    // Sticky row should contain current user info
    const stickyRow = screen.getAllByText("You")[0];
    expect(stickyRow).toBeInTheDocument();

    // Points in sticky row
    expect(screen.getAllByText("95")[0]).toBeInTheDocument();

    // Solo/Duo won info in sticky row
    expect(screen.getAllByText(/Solo won: 8/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Duo won: 4/i)[0]).toBeInTheDocument();
  });

  it("highlights the sticky row with a custom background color", () => {
    const { container } = render(
      <LeaderboardListDisplay
        leaderboard={mockLeaderboard}
        currentUserRank={7}
      />
    );

    const stickyRowEl = container.querySelector(`.${"stickyRow"}`);
    expect(stickyRowEl).toBeTruthy();

    // Inline style should include background-color from constants
    expect(stickyRowEl?.getAttribute("style")).toMatch(/background-color/i);
  });

  it("should allow scrolling when more than 5 entries", () => {
    const { container } = render(
      <LeaderboardListDisplay leaderboard={mockLeaderboard} />
    );

    const scrollArea = container.querySelector(`.${"scrollArea"}`);
    expect(scrollArea).toHaveStyle("overflow-y: auto");
  });
});
