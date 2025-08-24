"use client";
import React, { useState, useEffect } from "react";
import { SearchBar } from "@/components/Events/Search/Search";
import { Event } from "@/payload-types";
import { EventCard } from "@/components/Shared/Event/Card/SingleEventCard";
import { Select, TextInput, Text, Group } from "@mantine/core";

//test events function
function testFetchEvents(): Promise<Event[]> {
  return Promise.resolve([
    {
      id: "1",
      name: "Test Event 1",
      description: "This is a test event",
      dateTime: "2021-10-01T10:00:00Z",
      location: "Orange Pool Club",
      updatedAt: "2021-09-01T10:00:00Z",
      createdAt: "2021-09-01T09:00:00Z",
    },
    {
      id: "2",
      name: "Test Event 2",
      description: "This is another test event",
      dateTime: "2023-10-02T12:00:00Z",
      location: "University of Auckland",
      updatedAt: "2023-09-02T12:00:00Z",
      createdAt: "2023-09-02T11:00:00Z",
    },
  ]);
}

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

  // search/filter state
  const [filter, setFilter] = useState<string>("");
  const [year, setYear] = useState<string>("Any");
  const [month, setMonth] = useState<string>("Any");
  const [location, setLocation] = useState<string>("Any");

  const filterEvents = (events: Event[]) => {
    return events.filter((event) => {
      const eventMonth =
        event.dateTime &&
        new Date(event.dateTime).toLocaleString("default", {
          month: "long",
        });
      const eventYear =
        event.dateTime && new Date(event.dateTime).getFullYear().toString();
      return (
        (filter === "" ||
          event.name.toLowerCase().includes(filter.toLowerCase())) &&
        (year === "Any" || eventYear === year) &&
        (month === "Any" || eventMonth === month) &&
        (location === "Any" || event.location === location)
      );
    });
  };

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true);
        const fetchedEvents = await testFetchEvents();
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
      <div>
        <SearchBar
          filter={filter}
          setFilter={setFilter}
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          location={location}
          setLocation={setLocation}
        />
      </div>
      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {filterEvents(events).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
