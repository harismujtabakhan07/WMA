import Link from "next/link";
import styles from "../styles/About.module.css";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Python",
    "Git & GitHub",
  ];

  return (
    <>
      <nav>
        <h2>Haris Portfolio</h2>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <main className={styles.container}>
        <h1>About Me</h1>

        <div className={styles.profile}>
          <img src="/images/profile.jpg" alt="Haris profile" />

          <div>
            <h2>Haris Mujtaba Khan</h2>

            <p>
              I am a passionate technology learner and aspiring
              frontend developer. I enjoy learning modern web
              technologies and building creative applications.
            </p>

            <h3>My Interests</h3>
            <p>
              Web Development, Programming, Artificial Intelligence
              and Technology.
            </p>
          </div>
        </div>

        <h2 className={styles.heading}>My Skills</h2>

        <div className={styles.skills}>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </main>
    </>
  );
}