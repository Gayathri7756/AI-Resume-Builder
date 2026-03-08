'use client'

import Link from 'next/link'
import styles from './home.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>AI Resume Builder</Link>
          <div className={styles.navLinks}>
            <Link href="/builder">Builder</Link>
            <Link href="/preview">Preview</Link>
            <Link href="/proof">Proof</Link>
          </div>
        </div>
      </nav>

      <main className={styles.hero}>
        <h1>Build a Resume That Gets Read.</h1>
        <p>Create professional resumes with AI assistance. Clean, modern, and ATS-friendly.</p>
        <Link href="/builder" className={styles.cta}>
          Start Building
        </Link>
      </main>

      <footer className={styles.footer}>
        <Link href="/rb/01-problem" className={styles.footerLink}>
          → Access Build System
        </Link>
      </footer>
    </div>
  )
}
