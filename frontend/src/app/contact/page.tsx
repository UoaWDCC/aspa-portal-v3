
import TeamList from '@/ui/contact/TeamList'
import ContactForm from '@/ui/contact/ContactForm';
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <section id="hero-banner" style={{position: 'relative', width: '100%', height: '32rem'}}>
        <Image 
          src="/ContactsHeroBanner.png"
          alt="Hero banner for contacts page"
          layout="fill"
          objectFit='contain'
        />
      </section>
      <section id="meet-the-team">
        <TeamList/>
      </section>
      <section id="contact-form" style={{paddingBottom: '8em'}}>
        <ContactForm/>
      </section>
    </div>
  );
}
