"use client";
import EventTitle, {
  EventTitleProps,
} from "@/components/Gallery/EventTitle/eventTitle";
import GalleryPage, {
  GalleryPageProps,
} from "@/components/Gallery/GalleryPage/galleryPage";
import { Box } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import photos from "./photos.json"; // Temp photo data

type Photo = {
  id: number;
  src: string;
  alt: string;
};

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
    location: "Orange pool club (9 city road)",
    photos: photos,
  },
  event2: {
    title: "ASPA 2024",
    year: 2024,
    month: "November",
    day: "15th",
    location: "ASPA Headquarters",
    photos: photos,
  },
};

export default function GalleryEventPage() {
  const params = useParams();
  const eventId = params.eventId as string;
  const event = eventId ? placeholderEvents[eventId] : null;

  if (!event) {
    return null;
  }

  const DEFAULT_PHOTOS = 7;
  const TABLET_PHOTOS = 5;
  const MOBILE_PHOTOS = 2;
  const GALLERY_ROWS = 5;
  const [photosPerRow, setPhotosPerRow] = useState(DEFAULT_PHOTOS);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const photoList = event.photos.slice(
    (currentPage - 1) * (photosPerRow * GALLERY_ROWS),
    currentPage * (photosPerRow * GALLERY_ROWS),
  );

  const testTitleProps: EventTitleProps = {
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

  const galleryPageProps: GalleryPageProps = {
    photoList: photoList,
    photosPerRow: photosPerRow,
    backgroundColor: "#717882",
    alternate: true,
  };

  return (
    <Box style={{ backgroundColor: "#1A1A1A" }}>
      <EventTitle {...testTitleProps} />
      <GalleryPage {...galleryPageProps} />
    </Box>
  );
}
