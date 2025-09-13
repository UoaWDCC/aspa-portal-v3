"use client";
import { useEffect, useState } from "react";
import { Banner, BannerProps } from "@/components/Home/Banner/Banner";
//import { TestimonialGroup } from "@/components/Home/Testimonials/Group/TestimonialGroup";
import { Testimonial } from "@/components/Home/Testimonials/Card/TestimonialCard";

const ExampleBannerArguments: BannerProps = {
  title: "Welcome to Auckland Student Pool Association!",
  description:
    "Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
  buttonText: "Current Events",
  groupText: "dolor sit amet, consectetur",
};

export default function HomePage() {
  const [testimonials, setTestimonial] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonial([
      {
        quote:
          "ASPA has been a fantastic way to meet new people and improve my pool skills. The events are always well-organized and a lot of fun!",
        author: "John Does, Club Member",
      },
      {
        quote:
          "I joined ASPA in my first year, and it's been one of the best decisions I've made at uni. The community is incredibly welcoming.",
        author: "Jane Smith, Social Player",
      },
      {
        quote:
          "The competitive tournaments are a blast! It's a great environment to test your abilities and learn from other skilled players.",
        author: "Alex Johnson, Competitive Player",
      },
    ]);
  }, []);

  return (
    <>
      <Banner
        {...ExampleBannerArguments}
        paddingTop="12vw"
        paddingleft="8vw"
        paddingRight="8vw"
        paddingBottom="8vw"
      />
      {/* <TestimonialGroup
        testimonials={testimonials}
        paddingTop="8vw"
        paddingleft="8vw"
        paddingRight="8vw"
        paddingBottom="8vw"
        paddingBetween="1vw"
        delay={1000}
      /> */}
      {/* <EventDisplay
        events={eventsList}
        title="Upcoming Events"
        buttonText="Click Me"
        displayTypes={[displayType.Secondary]}
        props={[]}
      /> */}
    </>
  );
}
