import { CollectionConfig } from "payload";

const Admins: CollectionConfig = {
  slug: "admins",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [],
};

export default Admins;
