"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, this would send to a backend
        console.log("Form submitted:", formData);
        setSubmitted(true);
    };

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <h1>Contact <span className="text-gradient">Us</span></h1>
                    <p>Ready to start thinking in English? Get in touch with us today.</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className={`section ${styles.contact}`}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Contact Info */}
                        <div className={styles.contactInfo}>
                            <h2>Get in Touch</h2>
                            <p className={styles.contactIntro}>
                                Have questions about our courses? Want to know which level is right for you?
                                We&apos;re here to help you start your journey to English fluency.
                            </p>

                            <div className={styles.infoCards}>
                                <div className={styles.infoCard}>
                                    <span className={styles.infoIcon}>📍</span>
                                    <div>
                                        <h4>Location</h4>
                                        <p>Colombo, Sri Lanka</p>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <span className={styles.infoIcon}>📧</span>
                                    <div>
                                        <h4>Email</h4>
                                        <p>info@iie.lk</p>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <span className={styles.infoIcon}>📞</span>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+94 11 XXX XXXX</p>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <span className={styles.infoIcon}>🕐</span>
                                    <div>
                                        <h4>Hours</h4>
                                        <p>Mon - Sat: 9AM - 6PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.contactForm}>
                            {submitted ? (
                                <div className={styles.successMessage}>
                                    <span className={styles.successIcon}>✅</span>
                                    <h3>Thank you for your message!</h3>
                                    <p>We&apos;ll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <h3>Send us a Message</h3>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+94 XX XXX XXXX"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="course">Interested Course</label>
                                        <select
                                            id="course"
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select a course</option>
                                            <option value="level-01">Think in English Level 01</option>
                                            <option value="level-02">Think in English Level 02</option>
                                            <option value="level-03">Think in English Level 03</option>
                                            <option value="ielts">IELTS Support</option>
                                            <option value="consultation">Free Consultation</option>
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="Tell us about your English learning goals..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
