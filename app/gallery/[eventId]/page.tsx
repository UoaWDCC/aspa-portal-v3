import EventTitle from '@/components/Gallery/EventTitle/eventTitle';
import PhotoRow from '@/components/Gallery/photoRow/photoRow';

type Photo = {
  id: number,
  src: String,
  alt: String,
}

type Details = { 
  year: number
  month: string
  day: number
  location?: string
  description: string
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
      location: "Orange pool club (9 city road)4",
      description: "description of event1"
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
    ]
  }
}

export default function GalleryEventPage({ params }: { params: { eventId: string } }) {
  const event = placeholderEvents[params.eventId];

  if (!event) return <h1>Invalid Event</h1>;

  return (
    <div style={{ padding: '90px 0 0 0' }}> {/* This padding for navbar displacement*/}
      <EventTitle event={event} />
      <PhotoRow event={event} />
    </div>
  );
}