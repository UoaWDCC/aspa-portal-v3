import { CollectionConfig } from "payload";

const Executives: CollectionConfig = {
  slug: "executives",
  admin: {
    useAsTitle: "firstName",
    defaultColumns: ["firstName", "title", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "firstName",
      type: "text",
      required: true,
      admin: {
        description: "First name of the executive",
      },
    },
    {
      name: "lastName",
      type: "text",
      required: true,
      admin: {
        description: "Last name of the executive",
      },
    },
    {
      name: "type",
      type: "select",
      options: [
        { label: "Main", value: "main" },
        { label: "Marketing", value: "marketing" },
        { label: "Events", value: "events" },
      ],
      required: true,
      admin: {
        description: "Type of executive (Main, Marketing, Events)",
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
      type: "text",
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
