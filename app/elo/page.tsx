"use client";

import { LeaderboardListDisplay } from "@/components/Leaderboard/LeaderboardListDisplay";
import { useEffect, useState } from "react";

// Page padding (in vw)
const PAGE_PADDING_TOP_VW = 12;
const PAGE_PADDING_BOTTOM_VW = 2;

interface LeaderboardEntry {
  rank: number;
  name: string;
  soloWon: number;
  duoWon: number;
  points: number;
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const sampleData: LeaderboardEntry[] = [
      { rank: 1, name: "Person 1", soloWon: 14, duoWon: 1, points: 150 },
      { rank: 2, name: "Person 12", soloWon: 12, duoWon: 2, points: 140 },
      { rank: 3, name: "Person 51", soloWon: 12, duoWon: 0, points: 120 },
      { rank: 4, name: "Person 17", soloWon: 10, duoWon: 2, points: 120 },
      { rank: 5, name: "Person 7", soloWon: 10, duoWon: 1, points: 110 },
      { rank: 6, name: "Person 20", soloWon: 9, duoWon: 3, points: 100 },
      { rank: 7, name: "Person 25", soloWon: 8, duoWon: 4, points: 95 },
    ];
    setLeaderboard(sampleData);
  }, []);

  return (
    <div
      style={{
        paddingTop: `${PAGE_PADDING_TOP_VW}vw`,
        paddingBottom: `${PAGE_PADDING_BOTTOM_VW}vw`,
      }}
    >
      <LeaderboardListDisplay leaderboard={leaderboard} />
    </div>
  );
}
