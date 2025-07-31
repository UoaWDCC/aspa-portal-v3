import { Meta, StoryObj } from '@storybook/react';
import Lightbox from './lightbox';

const samplePhotos = [
  { id: 1, src: '/event_example.svg', alt: 'Photo 1' },
  { id: 2, src: '/event_example.svg', alt: 'Photo 2' },
];

const meta: Meta<typeof Lightbox> = {
  title: 'Gallery/Lightbox',
  component: Lightbox,
  argTypes: {},
};

export default meta;

export const Open: StoryObj<typeof Lightbox> = {
  args: {
    open: true,
    photoList: samplePhotos,
    photoIndex: 0,
    close: () => {},
    onPrev: () => {},
    onNext: () => {},
  },
};

export const Closed: StoryObj<typeof Lightbox> = {
  args: {
    open: false,
    photoList: samplePhotos,
    photoIndex: 0,
    close: () => {},
    onPrev: () => {},
    onNext: () => {},
  },
};
