import { CollectionConfig } from 'payload';

const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
};

export default Media;
