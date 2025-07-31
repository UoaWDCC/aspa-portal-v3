import { GlobalConfig } from 'payload/types';

const Styles: GlobalConfig = {
  slug: 'styles',
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
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

export default Styles;
