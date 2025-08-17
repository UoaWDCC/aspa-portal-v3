'use client';

import { Executive } from '@/components/Contact/Card/ExecutiveCardDisplay';
import { ExecutiveCollection } from '@/components/Contact/Collection/ExecutiveCollection';
import { useState } from 'react';

export default function ContactPage() {
  const [mainExecs] = useState<Executive[]>([
    {
      name: 'Johnny Shen',
      title: 'President',
      description: 'Leads the team with a strong vision and strategy. Tap to see more.',
      imageUrl: '/images/johnny.jpg',
      backContent: 'Johnny has been leading the team since 2020.',
    },
    {
      name: 'Ryan Fraser',
      title: 'Vice President',
      description: 'Oversees internal operations and project coordination.',
      imageUrl: '/images/ryan.jpg',
      backContent: 'Ryan has a background in logistics and leadership.',
    },
    {
      name: 'Amado Manaois III',
      title: 'Secretary',
      description: 'Leads the team with a strong vision and strategy.',
      imageUrl: '/images/Amado.jpg',
      backContent: 'Amado has been leading the team since 2020.',
    },
    {
      name: 'Ping An Qiu',
      title: 'Photographer & Treasurer',
      description: 'Oversees internal operations and project coordination.',
      imageUrl: '/images/Ping.jpg',
      backContent: 'Ping has a background in logistics and leadership.',
    },
    {
      name: 'Sky Zhang',
      title: 'Senior Advisor',
      description: 'Leads the team with a strong vision and strategy.',
      imageUrl: '/images/sky.jpg',
      backContent: 'Sky has been leading the team since 2020.',
    },
    {
      name: 'Zen Dogra',
      title: 'Financial Advisor',
      description: 'Oversees internal operations and project coordination.',
      imageUrl: '/images/zen.jpg',
      backContent: 'Zen has a background in logistics and leadership.',
    },
  ]);

  const [marketingExecs] = useState<Executive[]>([
    {
      name: 'Anya Cheng',
      title: 'Marketing (Designer)',
      description: 'Handles branding and social outreach.',
      imageUrl: '/images/anya.jpg',
      backContent: 'Anya grew our engagement by 200% in 2024.',
    },
    {
      name: 'Jessica Park',
      title: 'Marketing (Social Media)',
      description: 'Creates and schedules online content.',
      imageUrl: '/images/jess.jpg',
      backContent: 'jess keeps our socials fun and fresh.',
    },
    {
      name: 'Jasmine Cheung',
      title: 'Marketing (Manager)',
      description: 'Creates and schedules online content.',
      imageUrl: '/images/jasmine.jpg',
      backContent: 'Jasmine keeps our socials fun and fresh.',
    },
  ]);

  const [eventsExecs] = useState<Executive[]>([
    {
      name: 'Tony Feng',
      title: 'Events Team Lead',
      description: 'Coordinates club events and logistics.',
      imageUrl: '/images/tony.jpg',
      backContent: 'Tony organized the 2024 Welcome Gala.',
    },
    {
      name: 'Doris Shen',
      title: 'Events Coordinator',
      description: 'Creates and schedules online content.',
      imageUrl: '/images/doris.jpg',
      backContent: 'Doris keeps our events running smoothly.',
    },
  ]);

  const [coachExecs] = useState<Executive[]>([
    {
      name: 'Jeremy Ho',
      title: 'Coach',
      description: 'Guides training and team development.',
      imageUrl: '/images/jeremy.jpg',
      backContent: 'Former national team player and coach.',
    },
    {
      name: 'Henry Nguyen',
      title: 'Coach',
      description: 'Creates and schedules online content.',
      imageUrl: '/images/henry.jpg',
      backContent: 'Henry keeps our socials fun and fresh.',
    },
  ]);

  return (
    <div
      style={{
        paddingTop: '180px',
        backgroundColor: '#000000ff',
        paddingBottom: '30px',
      }}
    >
      <ExecutiveCollection executives={mainExecs} sectionTitle="Meet The Team" />
      <ExecutiveCollection executives={marketingExecs} sectionTitle="Marketing" />
      <ExecutiveCollection executives={eventsExecs} sectionTitle="Events" />
      <ExecutiveCollection executives={coachExecs} sectionTitle="Coach" />
    </div>
  );
}
