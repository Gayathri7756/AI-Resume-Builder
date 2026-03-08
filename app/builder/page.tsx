'use client'

import Link from 'next/link'
import { useResumeStore } from '@/lib/resumeStore'
import ResumeForm from '@/components/ResumeForm'
import ResumePreview from '@/components/ResumePreview'
import styles from './builder.module.css'

export default function BuilderPage() {
  const { loadSampleData } = useResumeStore()

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>AI Resume Builder</Link>
          <div className={styles.navLinks}>
            <Link href="/builder" className={styles.active}>Builder</Link>
            <Link href="/preview">Preview</Link>
            <Link href="/proof">Proof</Link>
          </div>
        </div>
      </nav>

      <div className={styles.toolbar}>
        <button onClick={loadSampleData} className={styles.btnSample}>
          Load Sample Data
        </button>
      </div>

      <main className={styles.main}>
        <div className={styles.formPanel}>
          <ResumeForm />
        </div>
        <div className={styles.previewPanel}>
          <div className={styles.previewSticky}>
            <h3>Live Preview</h3>
            <ResumePreview />
          </div>
        </div>
      </main>
    </div>
  )
}
