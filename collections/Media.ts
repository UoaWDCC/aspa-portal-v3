import { CollectionConfig } from 'payload/types';

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
