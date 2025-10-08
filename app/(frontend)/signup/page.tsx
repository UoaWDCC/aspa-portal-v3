"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const serverURL =
      process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

    try {
      const res = await fetch(`${serverURL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstname,
          lastname,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Account created successfully! Redirecting to login...");
        // Optionally, log the user in directly or redirect to login
        router.push("/admin"); // Redirect to Payload admin login page
      } else {
        setError(
          data.errors?.[0]?.message ||
            data.message ||
            "Failed to create account.",
        );
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div
      style={{
        paddingTop: "100px",
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Create Account
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <div>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="firstname"
            style={{ display: "block", marginBottom: "5px" }}
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="lastname"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}
      {success && (
        <p style={{ color: "green", marginTop: "15px" }}>{success}</p>
      )}
    </div>
  );
}
