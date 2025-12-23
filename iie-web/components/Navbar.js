"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.jpg"
                        alt="IIE - International Institute of English"
                        width={180}
                        height={50}
                        priority
                    />
                </Link>

                <button
                    className={styles.menuToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}></span>
                </button>

                <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
                    <li>
                        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link href="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                            Join Now
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
