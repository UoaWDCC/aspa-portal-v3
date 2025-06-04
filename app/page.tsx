"use client";
import { use, useEffect, useState } from "react";
import { Banner, BannerProps } from "@/components/Home/Banner/Banner";
import { PastEvent } from "@/components/Home/PastEvents/PastEvent";
import { TestimonialGroup } from "@/components/Home/Testimonials/Group/TestimonialGroup";
import { Testimonial } from "@/components/Home/Testimonials/Card/TestimonialCard";

import { HomeContent } from "@/lib/cms-api/home-content";

const ExampleBannerArguments: BannerProps = {
  // title: "Welcome to Auckland Student Pool Association!",
  // description:
  //   "Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
  buttonText: "Current Events",
  groupText: "dolor sit amet, consectetur",
  titleImageSrc: "/aspa_title.svg",
  titleImageAlt: "ASPA Title",
};

export default function HomePage() {
  const [testimonials, setTestimonial] = useState<Testimonial[]>([]);
  const [events, setEvents] = useState<PastEvent>({ events: [] });

	const [homeContent, setHomeContent] = useState<HomeContent | null>(null);

	 useEffect(() => {
			const fetchHomeContent = async () => {
				try {
					const res = await fetch("/api/home-content");
					const data = await res.json();
					setHomeContent(data);
				} catch (err) {
					console.error("Failed to fetch home content data:", err);
				}
			};
	
			fetchHomeContent();
		}, []);

  return (
    <>
      <Banner
				title={homeContent?.mainTitle}
				description={homeContent?.mainDescription}
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
