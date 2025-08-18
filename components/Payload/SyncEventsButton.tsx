"use client";

import React, { useState } from "react";
import { Button } from "@payloadcms/ui";

interface SyncResult {
  success: number;
  errors: string[];
  created: number;
  updated: number;
}

const SyncEventsButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SyncResult | null>(null);
  const [error, setError] = useState<string>("");

  const handleSync = async () => {
    setIsLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await fetch("/api/sync-events", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.result);
        setTimeout(() => window.location.reload(), 3000);
      } else {
        setError(data.message || "Sync failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", borderBottom: "1px solid #e5e5e5" }}>
      <div style={{ marginBottom: "10px" }}>
        <Button onClick={handleSync} disabled={isLoading} buttonStyle="primary">
          {isLoading ? "Syncing Events..." : "Sync from Humanitix"}
        </Button>
      </div>

      {result && (
        <div
          style={{
            padding: "12px",
            backgroundColor: "#e8f5e8",
            borderRadius: "4px",
            fontSize: "14px",
            border: "1px solid #4caf50",
          }}
        >
          <div>
            ✅ <strong>Sync completed successfully!</strong>
          </div>
          <div>
            📊 {result.created} created, {result.updated} updated
          </div>
          {result.errors.length > 0 && (
            <div style={{ marginTop: "8px", color: "#d73027" }}>
              ⚠️ {result.errors.length} errors occurred
            </div>
          )}
        </div>
      )}

      {error && (
        <div
          style={{
            padding: "12px",
            backgroundColor: "#fee",
            borderRadius: "4px",
            color: "#d73027",
            fontSize: "14px",
            border: "1px solid #f44336",
          }}
        >
          ❌ {error}
        </div>
      )}
    </div>
  );
};

export default SyncEventsButton;
