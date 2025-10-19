"use client";
import { useState, useEffect } from "react";

interface LeaderboardUser {
  id: string;
  username: string;
  elo: number;
  firstname?: string;
  lastname?: string;
}

export default function Leaderboard() {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await fetch("/api/leaderboard");
      const data = await response.json();
      if (response.ok) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading leaderboard...</div>;
  }

  return (
    <div style={{ marginBottom: "30px" }}>
      <h3>Leaderboard</h3>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #ddd",
        }}
      >
        {users.map((user, index) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              borderBottom:
                index < users.length - 1 ? "1px solid #eee" : "none",
              backgroundColor: index < 3 ? "#f8f9fa" : "transparent",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color:
                    index === 0
                      ? "#ffd700"
                      : index === 1
                        ? "#c0c0c0"
                        : index === 2
                          ? "#cd7f32"
                          : "#666",
                }}
              >
                #{index + 1}
              </span>
              <span style={{ fontWeight: "500" }}>
                {user.firstname && user.lastname
                  ? `${user.firstname} ${user.lastname} (${user.username})`
                  : user.username}
              </span>
            </div>
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              {user.elo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
