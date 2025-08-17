import { CollectionConfig } from "payload";

const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "date",
      type: "date",
    },
    {
      name: "dateTime",
      type: "text",
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "price",
      type: "text",
    },
    {
      name: "imageUrl",
      type: "text",
    },
    {
      name: "primaryColor",
      type: "text",
    },
    {
      name: "secondaryColor",
      type: "text",
    },
  ],
};

export default Events;
