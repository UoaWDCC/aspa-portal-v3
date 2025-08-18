import { CollectionConfig } from "payload";

const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "name",
    components: {
      beforeList: ["@/components/Payload/SyncEventsButton"],
    },
  },
  fields: [
    {
      name: "id",
      type: "text",
      unique: true,
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
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
      name: "lastSyncedAt",
      type: "date",
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
  ],
};

export default Events;
