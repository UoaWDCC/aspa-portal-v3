"use client";
import React, { useState, useEffect } from "react";
import { Event } from "@/payload-types";
import { EventCard } from "@/components/Shared/Event/Card/SingleEventCard";

// Client-side fetch function
async function fetchEvents(): Promise<Event[]> {
  try {
    const response = await fetch("/api/events");
    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true);
        const fetchedEvents = await fetchEvents();
        setEvents(fetchedEvents);
      } catch (err) {
        setError("Failed to load events");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "2rem", paddingTop: "7vw" }}>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          Loading events...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "2rem", paddingTop: "7vw" }}>
        <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
          {error}
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div style={{ padding: "2rem", paddingTop: "7vw" }}>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h2>No events found</h2>
          <p>Check back later for upcoming events!</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", paddingTop: "7vw" }}>
      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
