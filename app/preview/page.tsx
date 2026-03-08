'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useResumeStore } from '@/lib/resumeStore'
import ResumePreview from '@/components/ResumePreview'
import TemplateSelector from '@/components/TemplateSelector'
import { generatePlainTextResume, validateResumeCompleteness, copyToClipboard, triggerPrint } from '@/lib/exportUtils'
import styles from './preview.module.css'

export default function PreviewPage() {
  const {
    personalInfo,
    summary,
    education,
    experience,
    projects,
    skills,
    links
  } = useResumeStore()

  const [showWarning, setShowWarning] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  const handlePrint = () => {
    const { isComplete, warnings } = validateResumeCompleteness(personalInfo, experience, projects)
    
    if (!isComplete) {
      setShowWarning(true)
      // Show warning for a moment before printing
      setTimeout(() => {
        triggerPrint()
        // Keep warning visible for 5 seconds total
        setTimeout(() => setShowWarning(false), 4000)
      }, 1000)
    } else {
      // No warnings, print immediately
      triggerPrint()
    }
  }

  const handleCopyText = async () => {
    const plainText = generatePlainTextResume(
      personalInfo,
      summary,
      education,
      experience,
      projects,
      skills,
      links
    )
    
    const success = await copyToClipboard(plainText)
    if (success) {
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    }
  }

  return (
    <div className={styles.container}>
      <nav className={`${styles.nav} no-print`}>
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
        <div className={`${styles.actions} no-print`}>
          <Link href="/builder" className={styles.btnBack}>
            ← Back to Builder
          </Link>
          <div className={styles.templateWrapper}>
            <TemplateSelector />
          </div>
        </div>

        {showWarning && (
          <div className={`${styles.warning} no-print`}>
            ⚠️ Your resume may look incomplete. Consider adding your name and at least one project or experience.
          </div>
        )}

        <div className={`${styles.exportButtons} no-print`}>
          <button onClick={handlePrint} className={styles.btnExport}>
            🖨️ Print / Save as PDF
          </button>
          <button onClick={handleCopyText} className={styles.btnExport}>
            {copySuccess ? '✓ Copied!' : '📋 Copy Resume as Text'}
          </button>
        </div>

        <div className={`${styles.previewContainer} resume-preview`}>
          <ResumePreview />
        </div>
      </main>
    </div>
  )
}
