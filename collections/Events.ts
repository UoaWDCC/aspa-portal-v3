import { CollectionConfig } from 'payload';

const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'primaryColor',
      type: 'text',
    },
    {
      name: 'secondaryColor',
      type: 'text',
    },
  ],
};

export default Events;
