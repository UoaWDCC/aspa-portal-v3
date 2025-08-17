"use client";
import React from "react";
import { Event } from "@/payload-types";
import { EventCard } from "@/components/Shared/Event/Card/SingleEventCard";

const sampleEvent: Event = {
  id: 0,
  updatedAt: new Date().toISOString(),
  createdAt: new Date().toISOString(),
  name: "CASUAL NIGHT @ AKL CBD",
  description: "Fun games at night!",
  imageUrl: "/images/aspa-casual-night.png",
  dateTime: "Tuesday & Thursday, 6:30 - 8:00 PM",
  price: "$6",
  location: "Orange Pool Club [9 City Road]",
  date: null,
};

export default function EventsPage() {
  return (
    <div style={{ padding: "2rem", paddingTop: "7vw" }}>
      <EventCard event={sampleEvent} />
    </div>
  );
}
