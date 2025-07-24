"use client"
import EventTitle from '@/components/Gallery/EventTitle/eventTitle';
import PhotoRow from '@/components/Gallery/photoRow/photoRow';
import { Box } from '@mantine/core';
import { useEffect, useState } from 'react';

type Photo = {
  id: number,
  src: string,
  alt: string,
}

type Details = { 
  year: number
  month: string
  day: number
  location: string
}

type Event = {
  title: string,
  details: Details,
  photos: Photo[]
}

const placeholderEvents: Record<string, Event> = {
  event1: {
    title: "CASUAL NIGHT @ AKL CBD",
    details: {
      year: 2025,
      month: "October",
      day: 1,
      location: "Orange pool club (9 city road)",
    },
    photos: [
      {
        id: 1,
        src: "/event_example.svg",
        alt: "Photo 1"
      },
      {
        id: 2,
        src: "/event_example.svg",
        alt: "Photo 2"
      },
      {
        id: 3,
        src: "/event_example.svg",
        alt: "Photo 3"
      },
      {
        id: 4,
        src: "/event_example.svg",
        alt: "Photo 4"
      },
      {
        id: 5,
        src: "/event_example.svg",
        alt: "Photo 5"
      },
      {
        id: 6,
        src: "/event_example.svg",
        alt: "Photo 6"
      },
      {
        id: 7,
        src: "/event_example.svg",
        alt: "Photo 7"
      },
    ]
  }
}
const Gallery = () => {
  return (
    <div>
      {}
      <PhotoRow photoListChunk={photoListChunk} />
    </div>
  );
};
export default function GalleryEventPage({ params }: { params: { eventId: string } }) {
  const event = placeholderEvents[params.eventId];
  if (!event) return <h1>Invalid Event</h1>;

  const DEFAULT_PHOTOS = 7;
  const MOBILE_PHOTOS = 2;
  const GALLERY_ROWS = 5;
  const [numberOfPhotos, setNumberOfPhotos] = useState(DEFAULT_PHOTOS);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setNumberOfPhotos(MOBILE_PHOTOS)
      } else {
        setNumberOfPhotos(DEFAULT_PHOTOS)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const photoListChunk = event.photos.slice(0, numberOfPhotos);

  return (
    <Box style={{ backgroundColor: '#1A1A1A', padding: '90px 0 0 0' }}> {/* padding for navbar displacement*/}
      <EventTitle event={event} />
      {}
      <PhotoRow photoListChunk={photoListChunk} />
    </Box>
  );
}