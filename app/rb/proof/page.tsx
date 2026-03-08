'use client'

import { useState } from 'react'
import { useBuildStore } from '@/lib/store'
import styles from './proof.module.css'

export default function ProofPage() {
  const { 
    artifacts, 
    lovableLink, 
    githubLink, 
    deployLink,
    setLovableLink,
    setGithubLink,
    setDeployLink
  } = useBuildStore()

  const [copied, setCopied] = useState(false)

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
  const allLinksProvided = lovableLink && githubLink && deployLink

  const generateSubmission = () => {
    return `AI Resume Builder - Project 3 Submission

Project Links:
- Lovable: ${lovableLink || '[Not provided]'}
- GitHub: ${githubLink || '[Not provided]'}
- Live Deploy: ${deployLink || '[Not provided]'}

Completed Steps:
${steps.map(step => `${getStepStatus(step.number) ? '✓' : '✗'} Step ${step.number}: ${step.name}`).join('\n')}

Artifacts Uploaded: ${artifacts.length}/8

Submission Date: ${new Date().toLocaleDateString()}
`
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
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Step Progress</h2>
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
        </section>

        <section className={styles.section}>
          <h2>Project Links</h2>
          <div className={styles.linkInputs}>
            <div className={styles.inputGroup}>
              <label>Lovable Project Link</label>
              <input
                type="url"
                placeholder="https://lovable.dev/projects/..."
                value={lovableLink}
                onChange={(e) => setLovableLink(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>GitHub Repository Link</label>
              <input
                type="url"
                placeholder="https://github.com/username/repo"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Live Deployment Link</label>
              <input
                type="url"
                placeholder="https://your-app.vercel.app"
                value={deployLink}
                onChange={(e) => setDeployLink(e.target.value)}
                className={styles.input}
              />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Final Submission</h2>
          <div className={styles.submissionBox}>
            <pre className={styles.submissionText}>{generateSubmission()}</pre>
          </div>
          <button
            onClick={handleCopySubmission}
            disabled={!allStepsComplete || !allLinksProvided}
            className={styles.btnSubmit}
          >
            {copied ? '✓ Copied to Clipboard!' : 'Copy Final Submission'}
          </button>
          {(!allStepsComplete || !allLinksProvided) && (
            <p className={styles.warning}>
              Complete all steps and provide all links to enable submission
            </p>
          )}
        </section>

        <section className={styles.verification}>
          <h3>✓ Verify it works</h3>
          <ul>
            <li>Is the background color off-white (#F7F6F3), not pure white?</li>
            <li>Are headings using a serif font with generous spacing?</li>
            <li>Is the accent color deep red (#8B0000), used sparingly?</li>
            <li>Is spacing consistent using 8/16/24/40/64px scale?</li>
            <li>Are there at most 4 colors used across the entire UI?</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
