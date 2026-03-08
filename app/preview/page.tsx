'use client'

import Link from 'next/link'
import ResumePreview from '@/components/ResumePreview'
import styles from './preview.module.css'

export default function PreviewPage() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>AI Resume Builder</Link>
          <div className={styles.navLinks}>
            <Link href="/builder">Builder</Link>
            <Link href="/preview" className={styles.active}>Preview</Link>
            <Link href="/proof">Proof</Link>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.actions}>
          <Link href="/builder" className={styles.btnBack}>
            ← Back to Builder
          </Link>
        </div>
        <div className={styles.previewContainer}>
          <ResumePreview />
        </div>
      </main>
    </div>
  )
}
