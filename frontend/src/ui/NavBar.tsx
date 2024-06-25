import Link from 'next/link'
import styles from './Navbar.module.css'

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.navitem}>
                    <Link className={styles.navlink} href="/home"> Home </Link>
                </li>
                <li className={styles.navitem}>
                    <Link className={styles.navlink} href="/contact"> Talk To Us </Link>
                </li>
                <li className={styles.navitem}>
                    <Link className={styles.navlink} href="/events"> Events </Link>
                </li>
                <li className={styles.navitem}>
                    <Link className={styles.navlink} href="/home/login"> Register/Log In </Link>
                </li>
            </ul>
        </nav>
    )
}
