
import TeamList from '@/ui/contact/TeamList'
import ContactForm from '@/ui/contact/ContactForm';

export default function Contact() {
  return (
    <div>
      <section id="meet-the-team">
        <TeamList/>
      </section>
      <section id="contact-form" style={{paddingBottom: '8em'}}>
        <ContactForm/>
      </section>
    </div>
  );
}
