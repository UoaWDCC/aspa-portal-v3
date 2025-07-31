import { Meta, StoryObj } from '@storybook/react';
import EventTitle from './eventTitle';

const sampleEvent = {
  title: 'CASUAL NIGHT @ AKL CBD',
  year: 2025,
  month: 'October',
  day: '1st',
  location: 'Orange pool club (9 city road)',
  photos: [
    { id: 1, src: '/event_example.svg', alt: 'Photo 1' },
    { id: 2, src: '/event_example.svg', alt: 'Photo 2' },
  ],
};

const meta: Meta<typeof EventTitle> = {
  title: 'Gallery/EventTitle',
  component: EventTitle,
  argTypes: {},
};

export default meta;

export const Default: StoryObj<typeof EventTitle> = {
  args: {
    event: sampleEvent,
  },
};
