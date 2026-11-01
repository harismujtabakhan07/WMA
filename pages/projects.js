import Link from "next/link";
import styles from "../styles/Projects.module.css";

import projects from "../data/projects.json";

export async function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }) {
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
        <h1>My Projects</h1>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div className={styles.card} key={project.id}>
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}