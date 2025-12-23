import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.footerGrid}>
                    <div className={styles.footerBrand}>
                        <h3>International Institute of English</h3>
                        <p>We don&apos;t teach English. We train you to think in English.</p>
                    </div>

                    <div className={styles.footerLinks}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/courses">Courses</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerLinks}>
                        <h4>Our Courses</h4>
                        <ul>
                            <li><Link href="/courses">Think in English Level 01</Link></li>
                            <li><Link href="/courses">Think in English Level 02</Link></li>
                            <li><Link href="/courses">Think in English Level 03</Link></li>
                            <li><Link href="/courses">IELTS Support</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerContact}>
                        <h4>Get in Touch</h4>
                        <p>Colombo, Sri Lanka</p>
                        <p>info@iie.lk</p>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {currentYear} International Institute of English. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
