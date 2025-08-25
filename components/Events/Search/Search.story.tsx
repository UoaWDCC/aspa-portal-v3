import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Search } from "./Search";
import { Event } from "@/payload-types";
import { EventCard } from "@/components/Shared/Event/Card/SingleEventCard";

const meta: Meta<typeof Search> = {
  title: "Events/Search",
  component: Search,
};
export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  render: () => {
    const [filter, setFilter] = useState("");
    const [year, setYear] = useState("Any");
    const [month, setMonth] = useState("Any");
    const [location, setLocation] = useState("Any");

    const mockEvents: Event[] = [
      {
        id: "1",
        name: "Test Event 1",
        description: "This is a test event",
        dateTime: "2022-10-01T10:00:00Z",
        location: "Orange Pool Club",
        updatedAt: "2021-09-01T10:00:00Z",
        createdAt: "2021-09-01T09:00:00Z",
      },
      {
        id: "2",
        name: "Test Event 2",
        description: "This is another test event",
        dateTime: "2022-03-02T12:00:00Z",
        location: "University of Auckland",
        updatedAt: "2023-09-02T12:00:00Z",
        createdAt: "2023-09-02T11:00:00Z",
      },
      {
        id: "3",
        name: "Spring Festival",
        description: "Celebrate the new season!",
        dateTime: "2024-09-15T15:00:00Z",
        location: "Orange Pool Club",
        updatedAt: "2024-08-01T10:00:00Z",
        createdAt: "2024-08-01T09:00:00Z",
      },
    ];

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

    const filtered = filterEvents(mockEvents);

    return (
      <div style={{ width: "100vw", padding: "2rem", background: "#f8f8f8" }}>
        <Search
          filter={filter}
          setFilter={setFilter}
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          location={location}
          setLocation={setLocation}
        />
        <div style={{ marginTop: "2rem" }}>
          <h3>Filtered Events</h3>
          {filtered.length === 0 ? (
            <div>No events found.</div>
          ) : (
            <ul>
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  },
};
