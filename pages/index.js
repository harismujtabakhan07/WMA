import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <nav>
        <h2>Personal Portfolio</h2>

        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <main className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.welcome}>WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Haris Mujtaba Khan</span>
          </h1>

          <h2>Frontend Developer</h2>

          <p>
            I am a passionate developer interested in creating
            modern, responsive and user-friendly websites.
          </p>

          <div className={styles.buttons}>
            <Link href="/projects">View My Projects</Link>
            <Link href="/contact">Contact Me</Link>
          </div>
        </div>
      </main>
    </>
  );
}