"use client";
import { Carousel } from "@mantine/carousel";
import { EventCard, Event } from "../Card/EventCard";
import { useMediaQuery } from "@mantine/hooks";

interface EventCarouselProps {
  events: Event[];
}

export function EventCarousel({ events }: EventCarouselProps) {
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <Carousel
      withIndicators
      slideSize={matches ? "33.333333%" : "100%"}
      slideGap="xl"
      height={matches ? 400 : 200}
      emblaOptions={{
        loop: true,
        dragFree: false,
        align: "start",
        slidesToScroll: 1,
      }}
    >
      {events.map((event, index) => (
        <Carousel.Slide key={index}>
          <EventCard event={event} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
