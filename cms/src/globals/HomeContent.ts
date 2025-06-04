import { GlobalConfig } from 'payload';

export const HomeContent: GlobalConfig = {
  slug: 'home_content',
  label: 'Home Content',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Title',
      required: true,
    },
    {
      name: ',mainDescription',
      type: 'textarea',
      label: 'Main Description',
    }
  ],
};
