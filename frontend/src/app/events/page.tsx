import Image from 'next/image';
import HeroBanner from "../../../public/EventsHeroBanner.png"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ASPA - Event",
  description: "ASPA Events: View All the Event ASPA has to offer",
};


export default function Events() {
  return (
    <div>
      <section id="hero-banner" >
        <Image
          src={HeroBanner}
          alt="Hero banner for contacts page"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </section>
    </div>
  );
}
