"use client";
import { useEffect, useState } from 'react';
import { Banner, BannerProps } from '@/components/Home/Banner/Banner';
import { PastEvent } from '@/components/Home/PastEvents/PastEvent';
import { TestimonialGroup } from '@/components/Home/Testimonials/Group/TestimonialGroup';
import { Testimonial } from '@/components/Home/Testimonials/Card/TestimonialCard';
import { getTestimonials } from '@/data/service/testimonial';

const ExampleBannerArguments : BannerProps = {
  title: 'Welcome to Auckland Student Pool Association!',
  description: 'Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
  buttonText: 'Current Events',
  groupText: 'dolor sit amet, consectetur',
  titleImageSrc: '/aspa_title.svg',
  titleImageAlt: 'ASPA Title'
}

const ExampleEvent : PastEvent = {
  events: [
    {
        eventName: 'Lorem ipsum',
        eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgUrl: '/event_example.svg'
    },
    {
        eventName: 'Lorem ipsum',
        eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgUrl: '/event_example.svg'
    },
    {
        eventName: 'Lorem ipsum',
        eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgUrl: '/event_example.svg'
    },
    {
        eventName: 'Lorem ipsum',
        eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgUrl: '/event_example.svg'
    },
    {
        eventName: 'Lorem ipsum',
        eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgUrl: '/event_example.svg'
    },
    {
        eventName: 'Lorem ipsum',
        eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgUrl: '/event_example.svg'
    },

  ]
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



export default function HomePage() {
  const [testimonials, setTestimonial] = useState<Testimonial[]>([]);

  useEffect(() => {
    console.log('useEffect is running');
    testimonialsHandler().then((testimonials) => {
      setTestimonial(testimonials);
    })
  }, []);

  return (
    <>
      <Banner  {...ExampleBannerArguments} paddingTop="12vw" paddingleft="8vw" paddingRight="8vw" paddingBottom="8vw" />
      <PastEvent {...ExampleEvent} paddingTop="8vw" paddingleft="8vw" paddingRight="8vw"/>
      <TestimonialGroup testimonials={testimonials} paddingTop="8vw" paddingleft="8vw" paddingRight="8vw" paddingBottom="8vw" paddingBetween="1vw" delay={1000}/>

    </>
  );
}
