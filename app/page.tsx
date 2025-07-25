"use client";
import { use, useEffect, useState } from "react";
import { Banner, BannerProps } from "@/components/Home/Banner/Banner";
import { PastEvent } from "@/components/Home/PastEvents/PastEvent";
import { TestimonialGroup } from "@/components/Home/Testimonials/Group/TestimonialGroup";
import { Testimonial } from "@/components/Home/Testimonials/Card/TestimonialCard";

const ExampleBannerArguments: BannerProps = {
  title: "Welcome to Auckland Student Pool Association!",
  description:
    "Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
  buttonText: "Current Events",
  groupText: "dolor sit amet, consectetur",
  titleImageSrc: "/aspa_title.svg",
  titleImageAlt: "ASPA Title",
};

export default function HomePage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
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
    </>
  );
}
