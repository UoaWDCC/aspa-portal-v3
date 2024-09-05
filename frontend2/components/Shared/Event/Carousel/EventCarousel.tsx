'use client';
import { Carousel } from '@mantine/carousel';
import { EventCard, Event } from '../Card/EventCard';

interface EventCarouselProps {
  events: Event[];
}

export function EventCarousel({ events }: EventCarouselProps) {
  return (
    <Carousel withIndicators loop slidesToScroll={3} slideSize="33.333333%" slideGap="xl" align="start">
      {events.map((event, index) => (
        <Carousel.Slide key={index}>
          <EventCard event={event} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}