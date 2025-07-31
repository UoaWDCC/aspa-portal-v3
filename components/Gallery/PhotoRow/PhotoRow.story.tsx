import { Meta, StoryObj } from '@storybook/react';
import PhotoRow from './photoRow';

const samplePhotos = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  src: '/event_example.svg',
  alt: `Photo ${i + 1}`,
}));

const meta: Meta<typeof PhotoRow> = {
  title: 'Gallery/PhotoRow',
  component: PhotoRow,
  argTypes: {},
};

export default meta;

export const Default: StoryObj<typeof PhotoRow> = {
  args: {
    photoListChunk: samplePhotos,
    style: true,
    onImageClick: () => {},
  },
};
