'use client';
import EventTitle from '@/components/Gallery/EventTitle/eventTitle';
import GalleryPage from '@/components/Gallery/GalleryPage/galleryPage';
import { Box } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import photos from './photos.json'; // Temp photo data

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
    title: 'CASUAL NIGHT @ AKL CBD',
    year: 2025,
    month: 'October',
    day: '1st',
    location: 'Orange pool club (9 city road)',
    photos: photos,
  },
  event2: {
    title: 'ASPA 2024',
    year: 2024,
    month: 'November',
    day: '15th',
    location: 'ASPA Headquarters',
    photos: photos,
  },
};

export default function GalleryEventPage({ params }: { params: Promise<{ eventId: string }> }) {
  const { eventId } = React.use(params);
  const event = eventId ? placeholderEvents[eventId] : null;
  if (!event) {
    return;
  }
  console.log('event', event.photos);

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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(currentPage * (photosPerRow * GALLERY_ROWS));

  const photoList = event.photos.slice(
    (currentPage - 1) * (photosPerRow * GALLERY_ROWS),
    currentPage * (photosPerRow * GALLERY_ROWS)
  );

  return (
    <Box style={{ backgroundColor: '#1A1A1A', padding: '90px 0 0 0' }}>
      {' '}
      {/* padding for navbar displacement*/}
      <EventTitle event={event} />
      <GalleryPage photoList={photoList} photosPerRow={photosPerRow} />
    </Box>
  );
}
