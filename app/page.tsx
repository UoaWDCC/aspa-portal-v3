"use client";
import { use, useEffect, useState } from 'react';
import { Banner, BannerProps } from '@/components/Home/Banner/Banner';
import { PastEvent } from '@/components/Home/PastEvents/PastEvent';
import { TestimonialGroup } from '@/components/Home/Testimonials/Group/TestimonialGroup';
import { Testimonial } from '@/components/Home/Testimonials/Card/TestimonialCard';
import { getTestimonials } from '@/data/service/testimonial';
import { getEvents } from '@/data/service/events';

const ExampleBannerArguments : BannerProps = {
  title: 'Welcome to Auckland Student Pool Association!',
  description: 'Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
  buttonText: 'Current Events',
  groupText: 'dolor sit amet, consectetur',
  titleImageSrc: '/aspa_title.svg',
  titleImageAlt: 'ASPA Title'
}




async function testimonialsHandler() : Promise<Testimonial[]> {
  try {
    const testimonials = await getTestimonials();
    console.log('Testimonials:', testimonials);
    return testimonials;
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    return [];
  }
}

async function eventsHandler() : Promise<PastEvent> {
  try {
    const all_events = await getEvents();
    console.log('Events:', all_events);

    const current_events = all_events.map((event: any) => {
      return {
          id: event.id,
          eventName: event.title,
          eventDescription: event.description,
          imgUrl: event.image,
      };
    });

    const events : PastEvent = {
      events: current_events
    }
    return events;
  } catch (error) {
    console.error('Error fetching events:', error);
    return {events: []};
  }
}



export default function HomePage() {
  const [testimonials, setTestimonial] = useState<Testimonial[]>([]);
  const [events, setEvents] = useState<PastEvent>({events: []});

  useEffect(() => {
    console.log('useEffect is running');
    testimonialsHandler().then((testimonials) => {
      setTestimonial(testimonials);
    })
  }, []);

  useEffect(() => {
    console.log('useEffect is running');
    eventsHandler().then((events) => {
      setEvents(events);
    })
  }
  , []);


  return (
    <>
      <Banner  {...ExampleBannerArguments} paddingTop="12vw" paddingleft="8vw" paddingRight="8vw" paddingBottom="8vw" />
      <PastEvent events={events.events} paddingTop="8vw" paddingleft="8vw" paddingRight="8vw"/>
      <TestimonialGroup testimonials={testimonials} paddingTop="8vw" paddingleft="8vw" paddingRight="8vw" paddingBottom="8vw" paddingBetween="1vw" delay={1000}/>

    </>
  );
}
