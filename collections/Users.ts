import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Customers',
  },
  fields: [
    {
      name: 'firstname',
      type: 'text',
    },
    {
      name: 'lastname',
      type: 'text',
    },
    {
      name: 'elo',
      type: 'number',
      defaultValue: 0,
    },
  ],
};

export default Users;
