import { CollectionConfig } from "payload";

const Executives: CollectionConfig = {
  slug: "executives",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "title", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      admin: {
        description: "Full name of the executive",
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        description: "Job title or position",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      admin: {
        description: "Brief description or bio",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Executive headshot or profile image",
      },
    },
    {
      name: "backContent",
      type: "richText",
      required: true,
      admin: {
        description:
          "Content for the back side (detailed bio, achievements, etc.)",
      },
    },
  ],
  timestamps: true,
};

export default Executives;
