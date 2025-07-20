import { Meta, StoryObj } from '@storybook/react';
import { TestimonialCard } from './TestimonialCard';

const meta: Meta<typeof TestimonialCard> = {
  title: 'Home/Testimonials/Card',
  component: TestimonialCard,
  argTypes: {
    testimonial: { control: 'object' },
  },
};

export default meta;

export const Default: StoryObj<typeof TestimonialCard> = {
  args: {
    testimonial: {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'John Doe',
    },
  },
};
