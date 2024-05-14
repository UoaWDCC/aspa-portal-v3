import styles from './Navbar.module.css'

export default function NavBar() {
    return (
        <>
            <div className={styles.register}>

                <ul className={styles.nav}>

                    <li className={styles.navitem}>
                        <a className={styles.navlink} href="/"> Home </a>
                    </li>

                    <li className={styles.navitem}>
                        <a className={styles.navlink} href="/"> Talk To Us </a>
                    </li>

                    <li className={styles.navitem}>
                        <a className={styles.navlink} href="/"> Event </a>
                    </li>

                    <li className={styles.navitem}>
                        <a className={styles.navlink} href="/"> Log In </a>
                    </li>

                </ul>

            </div>
        </>
    )
}