import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>🎓 Now Enrolling for 2025</span>
            <h1>
              Think in English,<br />
              <span className="text-gradient">Not About English</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We don&apos;t teach English. We train you to think in English.
              Break free from mental translation and speak naturally, confidently, fluently.
            </p>
            <div className={styles.heroCta}>
              <Link href="/courses" className="btn btn-primary">
                Explore Courses
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.cardIcon}>💡</div>
              <h3>Input-Based Learning</h3>
              <p>Learn English the way you learned your first language — naturally, through immersion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={`section ${styles.problem}`}>
        <div className="container">
          <h2 className="section-title">The Problem We Solve</h2>
          <p className="section-subtitle">
            Most Sri Lankan English learners struggle despite years of studying. Sound familiar?
          </p>

          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <span className={styles.problemIcon}>🔄</span>
              <h3>Mental Translation</h3>
              <p>You think in Sinhala first, then translate to English. This causes hesitation and unnatural speech.</p>
            </div>
            <div className={styles.problemCard}>
              <span className={styles.problemIcon}>📚</span>
              <h3>Grammar Overload</h3>
              <p>Years of memorizing rules, but still can&apos;t speak fluently in real conversations.</p>
            </div>
            <div className={styles.problemCard}>
              <span className={styles.problemIcon}>😰</span>
              <h3>Lack of Confidence</h3>
              <p>Fear of making mistakes holds you back from speaking up in professional settings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={`section bg-gradient ${styles.solution}`}>
        <div className="container">
          <h2 className="section-title">Our Unique Method</h2>
          <p className="section-subtitle">
            A comprehensive input-based approach that actually works
          </p>

          <div className={styles.solutionGrid}>
            <div className={styles.solutionStep}>
              <div className={styles.stepNumber}>01</div>
              <h3>TV Series Immersion</h3>
              <p>Watch carefully selected English TV series episodes that expose you to real, natural conversations.</p>
            </div>
            <div className={styles.solutionStep}>
              <div className={styles.stepNumber}>02</div>
              <h3>Comprehensible Input</h3>
              <p>Read synopses, discuss content, and absorb English the way children acquire their first language.</p>
            </div>
            <div className={styles.solutionStep}>
              <div className={styles.stepNumber}>03</div>
              <h3>Natural Acquisition</h3>
              <p>Massive exposure to contextual English bypasses the mental translation barrier completely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Ready to Think in English?</h2>
            <p>Join thousands of Sri Lankans who&apos;ve transformed their English fluency with our proven method.</p>
            <Link href="/courses" className="btn btn-primary">
              View Our Courses →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
