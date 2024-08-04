'use client';

import Link from 'next/link'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavBar() {
    const pathname = usePathname();
    const [isAuthentication, setIsAuthentication] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false)
    console.log(pathname)

    const handleLogin = () => {
        setIsAuthentication(true)
    }

    const handleLogout = () => {
        setIsAuthentication(false)
        setIsAdmin(false)
    }

    const links = [
        { name: 'Home', href: '/home', text: 'Home' },
        { name: 'Contact', href: '/contact', text: 'Talk To Us' },
        { name: 'Events', href: '/events', text: 'Events'},
    ]

    return (
        <nav className={styles.nav}>
            <ul>
                {links.map((link) => {
                    return (
                        <li className={styles.navitem}>
                            <Link 
                                key={link.name}
                                className={`${styles.navlink} ${pathname.includes(link.href) ? styles.currentpage : ""}`}
                                href={link.href}
                            >{link.text}
                            </Link>
                        </li>
                    );
                })}

                {/* <li className={styles.navitem}>
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
                </li> */}
                {isAuthentication ? (
                    <>
                        <li className={styles.navitem}>
                            <Link className={`${styles.navlink} ${pathname === "/profile-page" ? styles.currentpage : ""}`} href="/profile-page">
                                Profile
                            </Link>
                        </li>
                        {isAdmin && (
                            <li className={styles.navitem}>
                                <Link className={`${styles.navlink} ${pathname === "/member-data" ? styles.currentpage : ""}`} href="/member-data">
                                    Member Data
                                </Link>
                            </li>                           
                        )}
                        <li className={styles.navitem}>
                            <button className={styles.navlink} onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <li className={styles.navitem}>
                        <Link className={`${styles.navlink} ${pathname === "/home/login" ? styles.currentpage : ""}` } href="/home/login">
                            Register/Log In
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}
