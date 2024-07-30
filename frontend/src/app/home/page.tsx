import PastEvents from "@/ui/PastEvents";
import Description from "@/ui/home/Description";

export default function Home() {
  return (
    <div>
      <section id="description">
        <Description/>
      </section>
      <section id="past-events">
        <PastEvents/>
      </section>
    </div>
  );
}
