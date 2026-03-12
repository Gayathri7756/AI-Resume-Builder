'use client'

import { useState } from 'react'
import { useBuildStore } from '@/lib/store'
import styles from './proof.module.css'

// URL validation function
const isValidUrl = (url: string): boolean => {
  if (!url) return false
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export default function ProofPage() {
  const { 
    artifacts, 
    lovableLink, 
    githubLink, 
    deployLink,
    checklistPassed,
    setLovableLink,
    setGithubLink,
    setDeployLink,
    setChecklistPassed
  } = useBuildStore()

  const [copied, setCopied] = useState(false)
  const [lovableError, setLovableError] = useState('')
  const [githubError, setGithubError] = useState('')
  const [deployError, setDeployError] = useState('')

  const steps = [
    { number: 1, name: 'Problem Definition' },
    { number: 2, name: 'Market Research' },
    { number: 3, name: 'System Architecture' },
    { number: 4, name: 'High Level Design' },
    { number: 5, name: 'Low Level Design' },
    { number: 6, name: 'Build Implementation' },
    { number: 7, name: 'Testing & QA' },
    { number: 8, name: 'Ship & Deploy' },
  ]

  const getStepStatus = (stepNumber: number) => {
    return artifacts.some(a => a.stepNumber === stepNumber)
  }

  const allStepsComplete = steps.every(step => getStepStatus(step.number))
  const allLinksValid = isValidUrl(lovableLink) && isValidUrl(githubLink) && isValidUrl(deployLink)
  const canShip = allStepsComplete && checklistPassed && allLinksValid

  const handleLovableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    setLovableLink(url)
    if (url && !isValidUrl(url)) {
      setLovableError('Invalid URL format')
    } else {
      setLovableError('')
    }
  }

  const handleGithubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    setGithubLink(url)
    if (url && !isValidUrl(url)) {
      setGithubError('Invalid URL format')
    } else {
      setGithubError('')
    }
  }

  const handleDeployChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    setDeployLink(url)
    if (url && !isValidUrl(url)) {
      setDeployError('Invalid URL format')
    } else {
      setDeployError('')
    }
  }

  const generateSubmission = () => {
    return `------------------------------------------
AI Resume Builder — Final Submission

Lovable Project: ${lovableLink}
GitHub Repository: ${githubLink}
Live Deployment: ${deployLink}

Core Capabilities:
- Structured resume builder
- Deterministic ATS scoring
- Template switching
- PDF export with clean formatting
- Persistence + validation checklist
------------------------------------------`
  }

  const handleCopySubmission = () => {
    navigator.clipboard.writeText(generateSubmission())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>AI Resume Builder</h1>
        <p className={styles.subtitle}>Project 3 - Final Proof</p>
        {canShip && (
          <div className={styles.shippedBadge}>
            ✓ Project Shipped Successfully
          </div>
        )}
      </header>

      <main className={styles.main}>
        {/* Step Completion Overview */}
        <section className={styles.section}>
          <h2>Step Completion Overview</h2>
          <div className={styles.stepGrid}>
            {steps.map(step => (
              <div 
                key={step.number}
                className={`${styles.stepCard} ${getStepStatus(step.number) ? styles.complete : styles.incomplete}`}
              >
                <div className={styles.stepNumber}>
                  {getStepStatus(step.number) ? '✓' : step.number}
                </div>
                <div className={styles.stepName}>{step.name}</div>
              </div>
            ))}
          </div>
          <p className={styles.stepStatus}>
            {allStepsComplete ? '✓ All 8 steps completed' : `${artifacts.length}/8 steps completed`}
          </p>
        </section>

        {/* Artifact Collection */}
        <section className={styles.section}>
          <h2>Artifact Collection (Required to mark Shipped)</h2>
          <div className={styles.linkInputs}>
            <div className={styles.inputGroup}>
              <label>Lovable Project Link</label>
              <input
                type="url"
                placeholder="https://lovable.dev/projects/..."
                value={lovableLink}
                onChange={handleLovableChange}
                className={`${styles.input} ${lovableError ? styles.inputError : ''}`}
              />
              {lovableError && <span className={styles.errorText}>{lovableError}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label>GitHub Repository Link</label>
              <input
                type="url"
                placeholder="https://github.com/username/repo"
                value={githubLink}
                onChange={handleGithubChange}
                className={`${styles.input} ${githubError ? styles.inputError : ''}`}
              />
              {githubError && <span className={styles.errorText}>{githubError}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label>Deployed URL</label>
              <input
                type="url"
                placeholder="https://your-app.vercel.app"
                value={deployLink}
                onChange={handleDeployChange}
                className={`${styles.input} ${deployError ? styles.inputError : ''}`}
              />
              {deployError && <span className={styles.errorText}>{deployError}</span>}
            </div>
          </div>

          <div className={styles.checklistSection}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={checklistPassed}
                onChange={(e) => setChecklistPassed(e.target.checked)}
                className={styles.checkbox}
              />
              <span>All 10 checklist tests passed</span>
            </label>
          </div>
        </section>

        {/* Final Submission Export */}
        <section className={styles.section}>
          <h2>Final Submission Export</h2>
          <div className={styles.submissionBox}>
            <pre className={styles.submissionText}>{generateSubmission()}</pre>
          </div>
          <button
            onClick={handleCopySubmission}
            disabled={!canShip}
            className={styles.btnSubmit}
          >
            {copied ? '✓ Copied to Clipboard!' : 'Copy Final Submission'}
          </button>
          {!canShip && (
            <p className={styles.warning}>
              {!allStepsComplete && '• Complete all 8 steps'}
              {!checklistPassed && '\n• Mark all 10 checklist tests as passed'}
              {!allLinksValid && '\n• Provide valid URLs for all 3 links'}
            </p>
          )}
        </section>

        {/* Shipped Status */}
        {canShip && (
          <section className={styles.successSection}>
            <h2>Project 3 Shipped Successfully</h2>
            <p>Your AI Resume Builder is ready for submission.</p>
          </section>
        )}
      </main>
    </div>
  )
}
