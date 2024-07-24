'use client';

import Link from 'next/link'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavBar() {
    const pathname = usePathname();
    const [isAuthentication, setIsAuthentication] = useState(true);
    console.log(pathname)

    const handleLogin = () => {
        setIsAuthentication(true)
    }

        const handleLogout = () => {
        setIsAuthentication(false)
    }

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
                {isAuthentication ? (
                    <>
                        <li className={styles.navitem}>
                            <Link className={`${styles.navlink} ${pathname === "/profile" ? styles.currentpage : ""}`} href="/profile">
                                Profile
                            </Link>
                        </li>
                        <li className={styles.navitem}>
                            <button className={styles.navlink} onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <li className={styles.navitem}>
                        <Link className={`${styles.navlink} ${pathname === "/home/login" ? styles.currentpage : ""}`} href="/home/login">
                            Register/Log In
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}
