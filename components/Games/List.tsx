// components/Games/GamesList.tsx
"use client";
import { useState, useEffect } from "react";

interface Game {
  id: string;
  player1: any;
  player2: any;
  status: string;
  player1Confirmation: string;
  player2Confirmation: string;
  winner?: any;
  eloChange?: number;
}

interface GamesListProps {
  userId: string;
}

export default function GamesList({ userId }: GamesListProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await fetch(`/api/games/list?userId=${userId}`);
      const data = await response.json();
      if (response.ok) {
        setGames(data.games);
      }
    } catch (error) {
      console.error("Error fetching games:", error);
    } finally {
      setLoading(false);
    }
  };

  const acceptGame = async (gameId: string) => {
    try {
      const response = await fetch("/api/games/accept", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gameId }),
      });

      if (response.ok) {
        fetchGames();
      }
    } catch (error) {
      console.error("Error accepting game:", error);
    }
  };

  const confirmResult = async (gameId: string, winner: string) => {
    try {
      const response = await fetch("/api/games/confirm-result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gameId, winner }),
      });

      if (response.ok) {
        fetchGames();
      }
    } catch (error) {
      console.error("Error confirming result:", error);
    }
  };

  if (loading) {
    return <div>Loading games...</div>;
  }

  return (
    <div style={{ marginBottom: "30px" }}>
      <h3>Your Games</h3>
      {games.length === 0 ? (
        <p>No games found.</p>
      ) : (
        games.map((game) => (
          <div
            key={game.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "15px",
              backgroundColor: "#fff",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <strong>
                {game.player1.username} vs {game.player2.username}
              </strong>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: "4px",
                  backgroundColor:
                    game.status === "completed"
                      ? "#d4edda"
                      : game.status === "accepted"
                        ? "#fff3cd"
                        : "#f8d7da",
                  color:
                    game.status === "completed"
                      ? "#155724"
                      : game.status === "accepted"
                        ? "#856404"
                        : "#721c24",
                }}
              >
                {game.status.charAt(0).toUpperCase() + game.status.slice(1)}
              </span>
            </div>

            {game.status === "pending" && game.player2.id === userId && (
              <button
                onClick={() => acceptGame(game.id)}
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Accept Challenge
              </button>
            )}

            {game.status === "accepted" && (
              <div>
                <p>Confirm the result:</p>
                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}
                >
                  <button
                    onClick={() => confirmResult(game.id, "player1")}
                    style={{
                      backgroundColor: "#007cba",
                      color: "white",
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    {game.player1.username} Won
                  </button>
                  <button
                    onClick={() => confirmResult(game.id, "player2")}
                    style={{
                      backgroundColor: "#007cba",
                      color: "white",
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    {game.player2.username} Won
                  </button>
                </div>
                <div
                  style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}
                >
                  <p>
                    Your confirmation:{" "}
                    {game.player1.id === userId
                      ? game.player1Confirmation
                      : game.player2Confirmation}
                  </p>
                  <p>
                    Opponent's confirmation:{" "}
                    {game.player1.id === userId
                      ? game.player2Confirmation
                      : game.player1Confirmation}
                  </p>
                </div>
              </div>
            )}

            {game.status === "completed" && (
              <div style={{ marginTop: "10px" }}>
                <p>
                  <strong>Winner:</strong> {game.winner.username}
                </p>
                <p>
                  <strong>ELO Change:</strong> ±{game.eloChange}
                </p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
