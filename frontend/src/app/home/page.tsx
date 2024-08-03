import PastEvents from "@/ui/PastEvents";
import Description from "@/ui/home/Description";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASPA - Auckland Student Pool Association",
  description: "ASPA Home: View ASPA Landing Page",
};

export default function Home() {
  return (
    <div>
      <section id="description">
        <Description />
      </section>
      <section id="past-events">
        <PastEvents />
      </section>
    </div>
  );
}
