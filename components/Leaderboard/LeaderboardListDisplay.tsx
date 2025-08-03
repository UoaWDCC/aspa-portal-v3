"use client";

import React from "react";
import styles from "./LeaderboardListDisplay.module.css";

interface LeaderboardEntry {
  rank: number;
  name: string;
  soloWon: number;
  duoWon: number;
  points: number;
}

interface LeaderboardListDisplayProps {
  leaderboard: LeaderboardEntry[];
}

export const LeaderboardListDisplay: React.FC<LeaderboardListDisplayProps> = ({ leaderboard }) => {
  return (
    <div className={styles.container}>
      {leaderboard.map((entry) => (
        <div
          key={entry.rank}
          className={`${styles.row} ${entry.rank % 2 === 0 ? styles.darkRow : styles.lightRow}`}
        >
          <div className={styles.rank}>{entry.rank}.</div>

          <div className={styles.name}>{entry.name}</div>

          <div className={styles.wins}>
            <div>Solo won: {entry.soloWon}</div>
            <div>Duo won: {entry.duoWon}</div>
          </div>

          <div className={styles.points}>{entry.points}</div>
        </div>
      ))}
    </div>
  );
};

// Example usage
const sampleData: LeaderboardEntry[] = [
  { rank: 1, name: "Person 1", soloWon: 14, duoWon: 1, points: 150 },
  { rank: 2, name: "Person 12", soloWon: 12, duoWon: 2, points: 140 },
  { rank: 3, name: "Person 51", soloWon: 12, duoWon: 0, points: 120 },
  { rank: 4, name: "Person 17", soloWon: 10, duoWon: 2, points: 120 },
  { rank: 5, name: "Person 7", soloWon: 10, duoWon: 1, points: 110 },
  { rank: 6, name: "Person 20", soloWon: 9, duoWon: 3, points: 100 },
  { rank: 7, name: "Person 25", soloWon: 8, duoWon: 4, points: 95 },
];

export default function LeaderboardPage() {
  return <LeaderboardListDisplay leaderboard={sampleData} />;
}
