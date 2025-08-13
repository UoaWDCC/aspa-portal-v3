import { Meta, StoryObj } from '@storybook/react';
import GalleryPage from './galleryPage';

const samplePhotos = Array.from({ length: 21 }, (_, i) => ({
  id: i + 1,
  src: '/event_example.svg',
  alt: `Photo ${i + 1}`,
}));

const meta: Meta<typeof GalleryPage> = {
  title: 'Gallery/GalleryPage',
  component: GalleryPage,
  argTypes: {},
};

export default meta;

export const Default: StoryObj<typeof GalleryPage> = {
  args: {
    photoList: samplePhotos,
    photosPerRow: 7,
    alternate: true,
    backgroundColor: '#1A1A1A',
  },
};
