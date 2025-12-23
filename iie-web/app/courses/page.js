import Link from "next/link";
import styles from "./page.module.css";

const courses = [
    {
        id: 1,
        title: "Think in English Level 01",
        subtitle: "Foundation",
        duration: "8 Weeks",
        description: "Begin your journey to natural English fluency. This foundational course introduces you to input-based learning through carefully selected TV series content. You'll start building the habit of absorbing English naturally, just like you acquired your first language.",
        highlights: [
            "Introduction to immersive learning methodology",
            "Basic comprehension through TV series exposure",
            "Daily input habits formation",
            "Guided discussions in English"
        ],
        level: "Beginner",
        icon: "🌱"
    },
    {
        id: 2,
        title: "Think in English Level 02",
        subtitle: "Development",
        duration: "10 Weeks",
        description: "Build on your foundation with more complex content and deeper immersion. This level focuses on expanding your natural vocabulary and developing fluid expression. You'll engage with more challenging dialogue and start thinking in English spontaneously.",
        highlights: [
            "Advanced TV series with complex storylines",
            "Vocabulary expansion through context",
            "Interactive group discussions",
            "Spontaneous speaking practice"
        ],
        level: "Intermediate",
        icon: "🌿"
    },
    {
        id: 3,
        title: "Think in English Level 03",
        subtitle: "Mastery",
        duration: "12 Weeks",
        description: "Achieve English fluency at a professional level. This advanced course refines your natural English thinking patterns and prepares you for confident communication in any setting — professional meetings, social conversations, or public speaking.",
        highlights: [
            "Professional and academic English contexts",
            "Nuanced expression and idioms",
            "Presentation and public speaking",
            "Cultural fluency and confidence building"
        ],
        level: "Advanced",
        icon: "🌳"
    },
    {
        id: 4,
        title: "IELTS Support",
        subtitle: "Test Preparation",
        duration: "6 Weeks",
        description: "Complement your natural English abilities with targeted IELTS preparation. This support course combines our immersion methodology with strategic test-taking techniques, helping you achieve your target band score while maintaining natural communication skills.",
        highlights: [
            "All four modules: Listening, Reading, Writing, Speaking",
            "Practice tests with detailed feedback",
            "Strategies for each question type",
            "One-on-one speaking mock tests"
        ],
        level: "All Levels",
        icon: "🎯"
    }
];

export const metadata = {
    title: "Courses | IIE - International Institute of English",
    description: "Explore our Think in English courses and IELTS preparation. Learn English naturally through our unique immersion methodology.",
};

export default function CoursesPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <h1>Our <span className="text-gradient">Courses</span></h1>
                    <p>Progressive learning designed to help you think in English naturally</p>
                </div>
            </section>

            {/* Courses Grid */}
            <section className={`section ${styles.courses}`}>
                <div className="container">
                    <div className={styles.coursesGrid}>
                        {courses.map((course) => (
                            <div key={course.id} className={styles.courseCard}>
                                <div className={styles.courseHeader}>
                                    <span className={styles.courseIcon}>{course.icon}</span>
                                    <span className={styles.courseLevel}>{course.level}</span>
                                </div>
                                <h2>{course.title}</h2>
                                <span className={styles.courseSubtitle}>{course.subtitle}</span>
                                <p className={styles.courseDuration}>⏱ {course.duration}</p>
                                <p className={styles.courseDescription}>{course.description}</p>
                                <div className={styles.courseHighlights}>
                                    <h4>What you&apos;ll learn:</h4>
                                    <ul>
                                        {course.highlights.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <Link href="/contact" className={`btn btn-primary ${styles.courseBtn}`}>
                                    Enroll Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.cta}`}>
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2>Not sure which course is right for you?</h2>
                        <p>Contact us for a free consultation and we&apos;ll help you find the perfect starting point.</p>
                        <Link href="/contact" className="btn btn-secondary">
                            Get Free Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
