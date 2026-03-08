'use client'

import Link from 'next/link'
import styles from './proof.module.css'

export default function ProofPage() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>AI Resume Builder</Link>
          <div className={styles.navLinks}>
            <Link href="/builder">Builder</Link>
            <Link href="/preview">Preview</Link>
            <Link href="/proof" className={styles.active}>Proof</Link>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <h1>Project Artifacts</h1>
        <p className={styles.subtitle}>
          Upload screenshots and links to demonstrate your completed resume builder.
        </p>

        <section className={styles.section}>
          <h2>Screenshots</h2>
          <div className={styles.uploadArea}>
            <p>Drag and drop screenshots here or click to upload</p>
            <input type="file" accept="image/*" multiple style={{ display: 'none' }} />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Project Links</h2>
          <div className={styles.inputGroup}>
            <label>GitHub Repository</label>
            <input
              type="url"
              placeholder="https://github.com/username/repo"
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Live Demo</label>
            <input
              type="url"
              placeholder="https://your-app.vercel.app"
              className={styles.input}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Build System Access</h2>
          <Link href="/rb/01-problem" className={styles.btnBuildSystem}>
            → Go to Build System
          </Link>
        </section>
      </main>
    </div>
  )
}
