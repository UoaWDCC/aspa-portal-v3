"use client";

import EventTitle, {
  EventTitleProps,
} from "@/components/Gallery/EventTitle/eventTitle";
import GalleryRow from "@/components/Gallery/GalleryPage/galleryRow";
import { Box } from "@mantine/core";
import React, { JSX, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import photos from "./photos.json";

type Photo = { id: number; src: string; alt: string };
type Event = {
  title: string;
  year: number;
  month: string;
  day: string;
  location: string;
  photos: Photo[];
};

const placeholderEvents: Record<string, Event> = {
  event1: {
    title: "CASUAL NIGHT @ AKL CBD",
    year: 2025,
    month: "October",
    day: "1st",
    location: "Orange Pool Club (9 City Road)",
    photos,
  },
  event2: {
    title: "ASPA 2024",
    year: 2024,
    month: "November",
    day: "15th",
    location: "ASPA Headquarters",
    photos,
  },
};

export default function GalleryEventPage(): JSX.Element {
  const params = useParams();
  const eventId = params.eventId as string;
  const event = placeholderEvents[eventId];

  if (!event) {
    return (
      <div style={{ color: "white", padding: "2rem" }}>Event not found</div>
    );
  }

  // --- Responsive photo count per row ---
  const DEFAULT_PHOTOS = 7;
  const TABLET_PHOTOS = 5;
  const MOBILE_PHOTOS = 2;
  const TOTAL_ROWS = 5;

  const [photosPerRow, setPhotosPerRow] = useState<number>(DEFAULT_PHOTOS);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth <= 600) {
        setPhotosPerRow(MOBILE_PHOTOS);
      } else if (window.innerWidth <= 900) {
        setPhotosPerRow(TABLET_PHOTOS);
      } else {
        setPhotosPerRow(DEFAULT_PHOTOS);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Build rows ---
  const paddedPhotos: Photo[] = [...event.photos];
  while (paddedPhotos.length < photosPerRow * TOTAL_ROWS) {
    paddedPhotos.push(...event.photos);
  }

  const photoRows: Photo[][] = [];
  for (let i = 0; i < paddedPhotos.length; i += photosPerRow) {
    photoRows.push(paddedPhotos.slice(i, i + photosPerRow));
  }

  const titleProps: EventTitleProps = {
    titleText: event.title,
    year: event.year.toString(),
    month: event.month,
    day: event.day,
    location: event.location,
    titleTextSize: "48.8px",
    titleTextFont: '"Nova Square", sans-serif',
    titleTextColor: "#717882",
    titlePadding: "0 30px",
    eventDetailsGap: "20px 50px",
    eventDetailsPadding: "0 30px",
    eventDetailsColor: "#EBEBEB",
  };

  return (
    <Box style={{ backgroundColor: "#1A1A1A", paddingBottom: "50px" }}>
      <EventTitle {...titleProps} />

      {photoRows.slice(0, TOTAL_ROWS).map((row, index) => (
        <GalleryRow
          key={index}
          rowIndex={index} // pass row index for “View All”
          event={{
            name: `${event.title} - Row ${index + 1}`,
            date: `${event.day} ${event.month}`,
            year: event.year.toString(),
            location: event.location,
            images: row.map((p) => p.src),
            eventId,
          }}
        />
      ))}

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <button
          type="button"
          onClick={(): void => window.history.back()}
          style={{
            border: "1px solid #EBEBEB",
            background: "transparent",
            borderRadius: "25px",
            color: "#EBEBEB",
            padding: "10px 25px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Back to Gallery
        </button>
      </div>
    </Box>
  );
}
