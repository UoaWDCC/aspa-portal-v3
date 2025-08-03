"use client";

import React from "react";
import styles from "./LeaderboardListDisplay.module.css";

// Styling constants
export const ROW_HEIGHT = 80; 
export const VISIBLE_ROWS = 5; 
export const MAX_HEIGHT = ROW_HEIGHT * VISIBLE_ROWS; 

export const LIGHT_ROW_COLOR = "#7a7f87";
export const DARK_ROW_COLOR = "#111111";

export const RANK_WIDTH = 40;
export const POINTS_WIDTH = 50;
export const PADDING_X = 20;
export const PADDING_Y = 12;

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
    <div
      className={styles.container}
      style={{ maxHeight: `${MAX_HEIGHT}px` }} // Uses constant
    >
      {leaderboard.map((entry) => (
        <div
          key={entry.rank}
          className={styles.row}
          style={{
            backgroundColor: entry.rank % 2 === 0 ? DARK_ROW_COLOR : LIGHT_ROW_COLOR,
            padding: `${PADDING_Y}px ${PADDING_X}px`,
          }}
        >
          <div className={styles.rank} style={{ width: `${RANK_WIDTH}px` }}>
            {entry.rank}.
          </div>

          <div className={styles.name}>{entry.name}</div>

          <div className={styles.wins}>
            <div>Solo won: {entry.soloWon}</div>
            <div>Duo won: {entry.duoWon}</div>
          </div>

          <div className={styles.points} style={{ width: `${POINTS_WIDTH}px` }}>
            {entry.points}
          </div>
        </div>
      ))}
    </div>
  );
};
