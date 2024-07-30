import MemberForm from '@/ui/contact-admin/MemberForm';
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <section id="adding-member-form" style={{paddingBottom: '8em'}}>
        <MemberForm/>
      </section>
    </div>
  );
}