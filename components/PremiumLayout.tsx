'use client'

import { ReactNode } from 'react'
import styles from './PremiumLayout.module.css'

interface PremiumLayoutProps {
  children: ReactNode
  currentStep: number
  totalSteps: number
  contextHeader: string
  buildPanel: ReactNode
  onNext?: () => void
  onPrevious?: () => void
  nextDisabled?: boolean
}

export default function PremiumLayout({
  children,
  currentStep,
  totalSteps,
  contextHeader,
  buildPanel,
  onNext,
  onPrevious,
  nextDisabled = false
}: PremiumLayoutProps) {
  return (
    <div className={styles.container}>
      {/* Top Bar */}
      <header className={styles.topBar}>
        <div className={styles.topBarLeft}>AI Resume Builder</div>
        <div className={styles.topBarCenter}>
          Project 3 — Step {currentStep} of {totalSteps}
        </div>
        <div className={styles.topBarRight}>
          <span className={styles.statusBadge}>In Progress</span>
        </div>
      </header>

      {/* Context Header */}
      <div className={styles.contextHeader}>
        <h2>{contextHeader}</h2>
      </div>

      {/* Main Content Area */}
      <div className={styles.mainContent}>
        {/* Main Workspace (70%) */}
        <main className={styles.workspace}>
          {children}
        </main>

        {/* Build Panel (30%) */}
        <aside className={styles.buildPanel}>
          {buildPanel}
        </aside>
      </div>

      {/* Proof Footer */}
      <footer className={styles.proofFooter}>
        <button 
          onClick={onPrevious}
          disabled={currentStep === 1}
          className={styles.btnSecondary}
        >
          ← Previous
        </button>
        <div className={styles.footerCenter}>
          Step {currentStep}/{totalSteps}
        </div>
        <button 
          onClick={onNext}
          disabled={nextDisabled || currentStep === totalSteps}
          className={styles.btnPrimary}
        >
          Next →
        </button>
      </footer>
    </div>
  )
}
