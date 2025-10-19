// app/executives/page.tsx
export const dynamic = "force-dynamic";
import { getPayload } from "payload";
import config from "@payload-config";
import { Executive } from "@/payload-types";
import { ExecutiveCollection } from "@/components/Contact/Collection/ExecutiveCollection";

async function getAllExecutives(): Promise<{
  main: Executive[];
  marketing: Executive[];
  events: Executive[];
}> {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "executives",
    where: {
      type: {
        in: ["main", "marketing", "events"],
      },
    },
    sort: "lastName",
    limit: 100,
  });

  const executives = result.docs;

  return {
    main: executives.filter((exec) => exec.type === "main"),
    marketing: executives.filter((exec) => exec.type === "marketing"),
    events: executives.filter((exec) => exec.type === "events"),
  };
}

export default async function ExecutivesPage() {
  const {
    main: mainExecs,
    marketing: marketingExecs,
    events: eventsExecs,
  } = await getAllExecutives();

  return (
    <div
      style={{
        paddingTop: "180px",
        backgroundColor: "#000000ff",
        paddingBottom: "30px",
      }}
    >
      {mainExecs.length > 0 && (
        <ExecutiveCollection
          executives={mainExecs}
          sectionTitle="Meet The Team"
        />
      )}
      {marketingExecs.length > 0 && (
        <ExecutiveCollection
          executives={marketingExecs}
          sectionTitle="Marketing"
        />
      )}
      {eventsExecs.length > 0 && (
        <ExecutiveCollection executives={eventsExecs} sectionTitle="Events" />
      )}
    </div>
  );
}
