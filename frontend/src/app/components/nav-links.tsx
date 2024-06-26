import Link from "next/link";
import { usePathname } from 'next/navigation';

// Explicitly define the different pages seeing as there isn't too many of them
const links = [
  { name: 'Home', href: '' },
  { name: 'Contacts', href: '/contacts' },
  { name: 'Events', href: '/events' },
  { name: 'Login', href: '/login' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
          >
            <p>{link.name}</p>
          </Link>
        );
      })};
    </>
  );
}