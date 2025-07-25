"use client"
import EventTitle from '@/components/Gallery/EventTitle/eventTitle';
import GalleryPage from '@/components/Gallery/GalleryPage/galleryPage';
import { Box } from '@mantine/core';
import React, { useEffect, useState, } from 'react';

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
      {
        id: 8,
        src: "/event_example.svg",
        alt: "Photo 8"
      },
      {
        id: 9,
        src: "/event_example.svg",
        alt: "Photo 9"
      },
      {
        id: 10,
        src: "/event_example.svg",
        alt: "Photo 10"
      },
      {
        id: 11,
        src: "/event_example.svg",
        alt: "Photo 11"
      },
      {
        id: 12,
        src: "/event_example.svg",
        alt: "Photo 12"
      },
      {
        id: 13,
        src: "/event_example.svg",
        alt: "Photo 13"
      },
      {
        id: 14,
        src: "/event_example.svg",
        alt: "Photo 14"
      },
      {
        id: 15,
        src: "/aspa_logo.svg",
        alt: "Photo 15"
      },
      {
        id: 16,
        src: "/event_example.svg",
        alt: "Photo 16"
      },
      {
        id: 17,
        src: "/event_example.svg",
        alt: "Photo 17"
      },
      {
        id: 18,
        src: "/event_example.svg",
        alt: "Photo 18"
      },
      {
        id: 19,
        src: "/event_example.svg",
        alt: "Photo 19"
      },
      {
        id: 20,
        src: "/event_example.svg",
        alt: "Photo 20"
      },
      {
        id: 21,
        src: "/event_example.svg",
        alt: "Photo 21"
      },
      {
        id: 22,
        src: "/aspa_title.svg",
        alt: "Photo 22"
      },
      {
        id: 23,
        src: "/event_example.svg",
        alt: "Photo 23"
      },
      {
        id: 24,
        src: "/event_example.svg",
        alt: "Photo 24"
      },
      {
        id: 25,
        src: "/event_example.svg",
        alt: "Photo 25"
      },
      {
        id: 26,
        src: "/event_example.svg",
        alt: "Photo 26"
      },
      {
        id: 27,
        src: "/event_example.svg",
        alt: "Photo 27"
      },
      {
        id: 28,
        src: "/event_example.svg",
        alt: "Photo 28"
      },
      {
        id: 29,
        src: "/event_example.svg",
        alt: "Photo 29"
      },
      {
        id: 30,
        src: "/event_example.svg",
        alt: "Photo 30"
      },
      {
        id: 31,
        src: "/event_example.svg",
        alt: "Photo 31"
      },
      {
        id: 32,
        src: "/event_example.svg",
        alt: "Photo 32"
      },
      {
        id: 33,
        src: "/event_example.svg",
        alt: "Photo 33"
      },
      {
        id: 34,
        src: "/event_example.svg",
        alt: "Photo 34"
      },
      {
        id: 35,
        src: "/event_example.svg",
        alt: "Photo 35"
      },
      {
        id: 36,
        src: "/event_example.svg",
        alt: "Photo 36"
      },
    ]
  },
  event2: {
    title: "ASPA 2024",
    details: {  
      year: 2024,
      month: "November",
      day: 15,
      location: "ASPA Headquarters",
    },
    photos: [
      {
        id: 1,
        src: "/aspa_logo.svg",
        alt: "ASPA Logo"
      }
    ]
  }
}

export default function GalleryEventPage({ params }: { params: Promise<{ eventId: string }> }) {
  const { eventId } = React.use(params);
  const event = eventId ? placeholderEvents[eventId] : null;
  if (!event) {
    return
  }
  console.log('event', event.photos)

  const DEFAULT_PHOTOS = 7;
  const TABLET_PHOTOS = 5;
  const MOBILE_PHOTOS = 2;
  const GALLERY_ROWS = 5;
  const [photosPerRow, setPhotosPerRow] = useState(DEFAULT_PHOTOS);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setPhotosPerRow(MOBILE_PHOTOS)
      } else if (window.innerWidth <= 900) {
        setPhotosPerRow(TABLET_PHOTOS)
      } else {
        setPhotosPerRow(DEFAULT_PHOTOS)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  console.log(currentPage * (photosPerRow * GALLERY_ROWS))

  const photoList = event.photos.slice((currentPage - 1) * (photosPerRow * GALLERY_ROWS), currentPage * (photosPerRow * GALLERY_ROWS));
  
  return (
    <Box style={{ backgroundColor: '#1A1A1A', padding: '90px 0 0 0' }}> {/* padding for navbar displacement*/}
      <EventTitle event={event} />
      <GalleryPage photoList={photoList} photosPerRow={photosPerRow}/>
    </Box>
  );
}