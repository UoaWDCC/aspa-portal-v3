"use client";
import { use, useEffect, useState } from "react";
import { Banner, BannerProps } from "@/components/Home/Banner/Banner";
import { PastEvent } from "@/components/Home/PastEvents/PastEvent";
import { TestimonialGroup } from "@/components/Home/Testimonials/Group/TestimonialGroup";
import { Testimonial } from "@/components/Home/Testimonials/Card/TestimonialCard";
import { EventDisplay } from "@/components/Events/EventDisplay/EventDisplay";

const ExampleBannerArguments: BannerProps = {
  title: "Welcome to Auckland Student Pool Association!",
  description:
    "Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
  buttonText: "Current Events",
  groupText: "dolor sit amet, consectetur",
  titleImageSrc: "/aspa_title.svg",
  titleImageAlt: "ASPA Title",
};

const eventsList = [
  {
    id: "3",
    name: "ASPA Hackathon @ GRID AKL",
    date: "SAT & SUN 10:00-8:00pm",
    price: 10,
    location: "GridAKL [101 Pakenham St W]",
    description:
      "WDCC and SESA are so excited to announce our flagship hackathon for 2025. Join us for a two-day event where you alongside other students will work together to design and build unique applications - inspired by our surprise theme revealed on the day. Win from a prize pool of OVER $1.5k and grab some awesome sponsor merch along the way. Get mentored by experienced industry professionals - who will be on site ready to support your team!",
    imageUrl:
      "https://www.bartonmcgill.co.nz/wp-content/uploads/2023/12/51S4Ow-YSgL-_AC_SL1500_.jpg",
    buttonText: "Sign Up Now",
  },
  {
    id: "1",
    name: "CASUAL NIGHT @ AKL CBD",
    date: "TUES & THUR 6:30-8:00PM",
    price: 6,
    location: "Orange Pool Club [9 City Road]",
    description: "Join us for a casual night out at the Orange Pool Club!",
    imageUrl:
      "https://www.bartonmcgill.co.nz/wp-content/uploads/2023/12/51S4Ow-YSgL-_AC_SL1500_.jpg",
    buttonText: "See Details",
  },
  {
    id: "2",
    name: "KARAOKE NIGHT @ AKL CBD",
    date: "FRI 8:00-11:00PM",
    price: 10,
    location: "Orange Pool Club [9 City Road]",
    description: "Show off your singing skills at our Karaoke Night!",
    imageUrl:
      "https://gamesforfun.com/wp-content/uploads/2018/05/mini-ball-set-replacement-2-ball.jpg",
    buttonText: "See Details",
  },
];

export default function HomePage() {
  const [testimonials, setTestimonial] = useState<Testimonial[]>([]);
  const [events, setEvents] = useState<PastEvent>({ events: [] });

  return (
    <>
      <Banner
        {...ExampleBannerArguments}
        paddingTop="12vw"
        paddingleft="8vw"
        paddingRight="8vw"
        paddingBottom="8vw"
      />
      <PastEvent
        events={events.events}
        paddingTop="8vw"
        paddingleft="8vw"
        paddingRight="8vw"
      />
      <TestimonialGroup
        testimonials={testimonials}
        paddingTop="8vw"
        paddingleft="8vw"
        paddingRight="8vw"
        paddingBottom="8vw"
        paddingBetween="1vw"
        delay={1000}
      />
      <EventDisplay
        events={eventsList}
        title="Upcoming Events"
        buttonText="Click Me"
      />
    </>
  );
}
