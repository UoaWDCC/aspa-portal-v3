import { CollectionConfig } from 'payload/types';

const Admins: CollectionConfig = {
  slug: 'admins',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [],
};

export default Admins;
