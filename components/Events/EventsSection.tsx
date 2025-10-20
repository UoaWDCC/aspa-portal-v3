import {
  EventDisplay,
  displayType,
} from "@/components/Events/EventDisplay/EventDisplay";
import { getPayload } from "payload";
import config from "@payload-config";

export async function EventsSection() {
  const payload = await getPayload({
    config,
  });
  const result = await payload.find({
    collection: "events",
    sort: "-dateTime", // Sort by date descending
    limit: 3, // Get latest 3 events for display
  });

  if (!result.docs.length) {
    return null;
  }

  return (
    <EventDisplay
      events={result.docs}
      title="Upcoming Events"
      buttonText="View All Events"
      displayTypes={[displayType.Main]}
      props={[
        {
          bg_color: "rgba(113, 120, 130, 1)",
          font_color: "rgba(255, 255, 255, 1)",
          title_fs: "3vh",
          info_fs: "2vh",
        },
      ]}
    />
  );
}
