
import TeamList from '@/ui/contact/TeamList'
import ContactForm from '@/ui/contact/ContactForm';
import Image from "next/image";
import HeroBanner from "../../../public/ContactsHeroBanner.png"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ASPA - Contact Us",
  description: "ASPA Contact Us: Meet the Team and Contact ASPA Team for any of your inquiry",
};

export default function Contact() {
  return (
    <div>
      {/* <section id="hero-banner" style={{position: 'relative', height:'32em', overflow: "hidden"}}>
        <Image 
          src="/ContactsHeroBanner.png"
          alt="Hero banner for contacts page"
          fill
          objectFit= "cover"
          quality={100}
        />
      </section> */}
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
      <section id="meet-the-team">
        <TeamList />
      </section>
      <section id="contact-form" style={{ paddingBottom: '8em' }}>
        <h1 style={{
          fontFamily: 'Zilla Slab',
          fontWeight: 'bold',
          textDecoration: 'underline 5px',
          color: '#FBF5F0',
          fontSize: '90px',
          width: '100%',
          textShadow: '8px 8px #5E4127',
          textUnderlineOffset: '9px',
          textAlign: 'center',
          marginBottom: '0.2em'
        }}>
          Contact Us
        </h1>
        <ContactForm />
      </section>
    </div>
  );
}
