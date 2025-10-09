"use client";

import React from "react";
import styles from "./LeaderboardListDisplay.module.css";

// Constants for styling
export const ROW_HEIGHT_VW = 5;
export const VISIBLE_ROWS = 5;
export const MAX_HEIGHT_VW = ROW_HEIGHT_VW * VISIBLE_ROWS;

export const LIGHT_ROW_COLOR = "#7a7f87";
export const DARK_ROW_COLOR = "#111111";

// highlighting specific user's row
export const HIGHLIGHT_COLOR = "#DD995B";

export const RANK_WIDTH_VW = 3;
export const POINTS_WIDTH_VW = 4;
export const PADDING_X_VW = 2;
export const PADDING_Y_VW = 1;

interface LeaderboardEntry {
  rank: number;
  name: string;
  soloWon: number;
  duoWon: number;
  points: number;
}

interface LeaderboardListDisplayProps {
  leaderboard: LeaderboardEntry[];
  // prop for highlighting & user sticky row
  currentUserRank?: number;
}

export const LeaderboardListDisplay: React.FC<LeaderboardListDisplayProps> = ({
  leaderboard,
  currentUserRank,
}) => {
  const currentUserEntry = leaderboard.find(
    (entry) => entry.rank === currentUserRank,
  );

  return (
    <div
      className={styles.container}
      style={{ maxHeight: `${MAX_HEIGHT_VW}vw` }}
    >
      {currentUserEntry && (
        <div
          className={styles.stickyRow}
          style={{
            backgroundColor: HIGHLIGHT_COLOR,
            padding: `${PADDING_Y_VW}vw ${PADDING_X_VW}vw`,
          }}
        >
          <div className={styles.rank} style={{ width: `${RANK_WIDTH_VW}vw` }}>
            {currentUserEntry.rank}.
          </div>
          <div className={styles.name}>{currentUserEntry.name}</div>
          <div className={styles.wins}>
            <div>Solo won: {currentUserEntry.soloWon}</div>
            <div>Duo won: {currentUserEntry.duoWon}</div>
          </div>
          <div
            className={styles.points}
            style={{ width: `${POINTS_WIDTH_VW}vw` }}
          >
            {currentUserEntry.points}
          </div>
        </div>
      )}

      <div className={styles.scrollArea}>
        {leaderboard.map((entry) => (
          <div
            key={entry.rank}
            className={styles.row}
            style={{
              backgroundColor:
                entry.rank % 2 === 0 ? DARK_ROW_COLOR : LIGHT_ROW_COLOR,
              padding: `${PADDING_Y_VW}vw ${PADDING_X_VW}vw`,
            }}
          >
            <div
              className={styles.rank}
              style={{ width: `${RANK_WIDTH_VW}vw` }}
            >
              {entry.rank}.
            </div>
            <div className={styles.name}>{entry.name}</div>
            <div className={styles.wins}>
              <div>Solo won: {entry.soloWon}</div>
              <div>Duo won: {entry.duoWon}</div>
            </div>
            <div
              className={styles.points}
              style={{ width: `${POINTS_WIDTH_VW}vw` }}
            >
              {entry.points}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
