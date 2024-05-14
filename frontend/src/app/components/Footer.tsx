import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <>

            <div>
                <ul className={styles.footer}>

                    <li className={styles.footeritem}>
                        <a className={styles.footerlink} href="/"> About Us</a>
                    </li>

                    <li className={styles.footeritem}>
                        <a className={styles.footerlink} href="/"> Contact</a>
                    </li>

                    <li className={styles.footeritem}>
                        <a className={styles.footerlink} href="/"> Socials</a>
                    </li>

                    <li className={styles.footeritem}>
                        <a className={styles.footerlink} href="/"> Events</a>
                    </li>

                </ul>
            </div >

        </>
    )
}