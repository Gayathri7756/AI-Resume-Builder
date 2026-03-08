'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import PremiumLayout from '@/components/PremiumLayout'
import BuildPanel from '@/components/BuildPanel'
import { useBuildStore } from '@/lib/store'
import styles from '../step.module.css'

const ARTIFACT_CONTENT = `# AI Resume Builder - Testing Phase

Test Cases:

Functional Testing:
✓ User can create new resume
✓ All form fields save correctly
✓ AI generates relevant content
✓ Preview updates in real-time
✓ PDF exports with correct formatting
✓ ATS score calculates accurately

Edge Cases:
✓ Empty fields handled gracefully
✓ Very long content doesn't break layout
✓ Special characters render correctly
✓ API failures show error messages
✓ Offline mode works with localStorage

User Testing:
✓ Navigation is intuitive
✓ AI suggestions are helpful
✓ Export quality is professional
✓ Mobile experience is smooth`

export default function TestPage() {
  const router = useRouter()
  const { addArtifact, hasArtifact } = useBuildStore()
  const stepNumber = 7

  useEffect(() => {
    if (!hasArtifact(6)) {
      router.push('/rb/06-build')
    }
  }, [hasArtifact, router])

  const hasCurrentArtifact = hasArtifact(stepNumber)

  const handleArtifactUpload = (file: File) => {
    addArtifact(stepNumber, file.name)
  }

  const handleNext = () => {
    router.push('/rb/08-ship')
  }

  const handlePrevious = () => {
    router.push('/rb/06-build')
  }

  return (
    <PremiumLayout
      currentStep={7}
      totalSteps={8}
      contextHeader="Step 7: Testing & QA"
      buildPanel={
        <BuildPanel
          artifactContent={ARTIFACT_CONTENT}
          onArtifactUpload={handleArtifactUpload}
          hasArtifact={hasCurrentArtifact}
        />
      }
      onNext={handleNext}
      onPrevious={handlePrevious}
      nextDisabled={!hasCurrentArtifact}
    >
      <div className={styles.content}>
        <h1>Testing Phase</h1>
        
        <section className={styles.section}>
          <h3>Functional Testing</h3>
          <ul>
            <li>User can create and save new resumes</li>
            <li>All form fields persist data correctly</li>
            <li>AI generates contextually relevant content</li>
            <li>Preview updates immediately on changes</li>
            <li>PDF exports with proper formatting and fonts</li>
            <li>ATS score calculation is accurate</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Edge Case Testing</h3>
          <ul>
            <li>Empty or missing fields show appropriate placeholders</li>
            <li>Very long content doesn't break the layout</li>
            <li>Special characters and emojis render correctly</li>
            <li>API failures display user-friendly error messages</li>
            <li>Offline mode works with localStorage fallback</li>
            <li>Browser back/forward navigation maintains state</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>User Experience Testing</h3>
          <ul>
            <li>Navigation flow is intuitive and clear</li>
            <li>AI suggestions are genuinely helpful</li>
            <li>Export quality looks professional</li>
            <li>Mobile and tablet experience is smooth</li>
            <li>Loading states provide clear feedback</li>
            <li>Error messages are actionable</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Performance Testing</h3>
          <ul>
            <li>Page load times under 2 seconds</li>
            <li>AI responses within 5 seconds</li>
            <li>Preview renders without lag</li>
            <li>PDF generation completes quickly</li>
          </ul>
        </section>

        <div className={styles.instructions}>
          <h4>Instructions:</h4>
          <ol>
            <li>Run through all test cases systematically</li>
            <li>Document any bugs or issues found</li>
            <li>Upload test results and bug reports</li>
          </ol>
        </div>
      </div>
    </PremiumLayout>
  )
}
