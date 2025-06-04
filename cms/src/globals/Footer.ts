import { GlobalConfig } from 'payload';

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    read: () => true,
  },
  fields: [
		{
			name: 'organizationName',
      type: 'text',
      label: 'Organization Name',
      required: true,
		},
		{
			name: 'organizationDescription',
      type: 'textarea',
      label: 'Organization Description',
      required: true,
			admin: {
				rows: 4,
				description: 'Brief description of the organization shown in the footer.',
			},
		},
    {
      name: 'twitterUrl',
      type: 'text',
      label: 'Twitter URL',
      required: true,
    },
    {
      name: 'facebookUrl',
      type: 'text',
      label: 'Facebook URL',
      required: true,
    },
    {
      name: 'instagramUrl',
      type: 'text',
      label: 'Instagram URL',
      required: true,
    },
  ],
};
