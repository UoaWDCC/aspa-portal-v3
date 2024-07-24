import Image from 'next/image';

export default function Events() {
    return (
      <div>
        <section id="hero-banner" style={{position: 'relative', width: '100%', height: '32rem'}}>
          <Image 
            src="/EventsHeroBanner.png"
            alt="Hero banner for events page"
            layout="fill"
            objectFit='contain'
          />
        </section>
      </div>
    );
  }
  