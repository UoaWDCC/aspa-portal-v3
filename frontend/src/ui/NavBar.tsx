'use client';

import Link from 'next/link'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();
    console.log(pathname)

    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.navitem}>
                    <Link className={`${styles.navlink} ${pathname === "/home" ? styles.currentpage : ""}`} href="/home">
                        Home
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link className={`${styles.navlink} ${pathname === "/contact" ? styles.currentpage : ""}`} href="/contact">
                        Talk To Us
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link className={`${styles.navlink} ${pathname === "/events" ? styles.currentpage : ""}`} href="/events">
                        Events
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link className={`${styles.navlink} ${pathname === "/home/login" ? styles.currentpage : ""}`} href="/home/login">
                        Register/Log In
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
