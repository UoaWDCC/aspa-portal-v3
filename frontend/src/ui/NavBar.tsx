'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';
import billairdBall from '../../public/billiard.png';
import Image from 'next/image';

export default function NavBar() {
    const pathname = usePathname();
    const [isAuthentication, setIsAuthentication] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [open, setOpen] = useState(false);
    console.log(pathname);

    const handleLogin = () => {
        setIsAuthentication(true);
    };

    const handleLogout = () => {
        setIsAuthentication(false);
        setIsAdmin(false);
    };

    const handleMenu = () => {
        setOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    const links = [
        { name: 'Home', href: '/home' },
        { name: 'Contact', href: '/contact' },
        { name: 'Events', href: '/events' },
        { name: 'Register/Login', href: '/home/login' },
    ];

    return (
        <nav className={styles.nav}>
            <div className={styles.image}>
                <Image src={billairdBall} alt='Billiard Ball' layout="fill" objectFit="cover" />
            </div>

            <div className={styles.navlinksContainer}>
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className={`${styles.navlink} ${pathname === link.href ? styles.active : ''}`}>
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Hamburger Button */}
            <div className={styles.hamburgerButton}>
                <button type='button' onClick={handleMenu}>
                    <FaBars size={30} color='black' />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className={styles.mobileMenu}>
                    <button type='button' onClick={handleMenu}>
                        <FaTimes size={30} color='black' />
                    </button>

                    <div className={styles.image}>
                        <Image src={billairdBall} alt='Billiard Ball' layout="fill" objectFit="cover" />
                    </div>

                    {links.map((link, index) => (
                        <Link key={index} href={link.href} className={`${styles.navlink} ${pathname === link.href ? styles.active : ''}`} onClick={closeMenu}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
