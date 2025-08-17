"use client";
import { useState } from "react";

export default function GameRequest() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/games/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ opponentUsername: username }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Game request sent successfully!");
        setUsername("");
      } else {
        setMessage(data.error || "Failed to send game request");
      }
    } catch (error) {
      setMessage("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        marginBottom: "30px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      <h3>Challenge a Player</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: "#007cba",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Sending..." : "Send Challenge"}
        </button>
      </form>
      {message && (
        <p
          style={{
            marginTop: "10px",
            color: message.includes("success") ? "green" : "red",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
