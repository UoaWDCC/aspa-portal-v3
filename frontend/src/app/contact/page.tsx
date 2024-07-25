
import TeamList from '@/ui/contact/TeamList'
import ContactForm from '@/ui/contact/ContactForm';
import Image from "next/image";
import HeroBanner from "../../../public/ContactsHeroBanner.png"

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
        <TeamList/>
      </section>
      <section id="contact-form" style={{paddingBottom: '8em'}}>
        <ContactForm/>
      </section>
    </div>
  );
}
