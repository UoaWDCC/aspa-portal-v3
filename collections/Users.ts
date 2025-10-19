import { CollectionConfig } from "payload";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    group: "Customers",
  },
  fields: [
    {
      name: "username",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "firstname",
      type: "text",
    },
    {
      name: "lastname",
      type: "text",
    },
    {
      name: "elo",
      type: "number",
      defaultValue: 1200, // Standard starting ELO
    },
  ],
};

export default Users;
