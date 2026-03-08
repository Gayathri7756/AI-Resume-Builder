'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import PremiumLayout from '@/components/PremiumLayout'
import BuildPanel from '@/components/BuildPanel'
import { useBuildStore } from '@/lib/store'
import styles from '../step.module.css'

const ARTIFACT_CONTENT = `# AI Resume Builder - Build Phase

Implementation Checklist:

Phase 1 - Core UI:
✓ Set up Next.js project
✓ Create layout components
✓ Build resume builder forms
✓ Implement template system

Phase 2 - AI Integration:
✓ Connect OpenAI API
✓ Create prompt templates
✓ Build content generation UI
✓ Add error handling

Phase 3 - Features:
✓ Real-time preview
✓ ATS scoring logic
✓ PDF export functionality
✓ Data persistence

Phase 4 - Polish:
✓ Responsive design
✓ Loading states
✓ Error messages
✓ User feedback`

export default function BuildPage() {
  const router = useRouter()
  const { addArtifact, hasArtifact } = useBuildStore()
  const stepNumber = 6

  useEffect(() => {
    if (!hasArtifact(5)) {
      router.push('/rb/05-lld')
    }
  }, [hasArtifact, router])

  const hasCurrentArtifact = hasArtifact(stepNumber)

  const handleArtifactUpload = (file: File) => {
    addArtifact(stepNumber, file.name)
  }

  const handleNext = () => {
    router.push('/rb/07-test')
  }

  const handlePrevious = () => {
    router.push('/rb/05-lld')
  }

  return (
    <PremiumLayout
      currentStep={6}
      totalSteps={8}
      contextHeader="Step 6: Build Implementation"
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
        <h1>Build Phase</h1>
        
        <section className={styles.section}>
          <h3>Phase 1: Core UI</h3>
          <ul>
            <li>Set up Next.js project with TypeScript</li>
            <li>Create reusable layout components</li>
            <li>Build form components for each resume section</li>
            <li>Implement template selection system</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Phase 2: AI Integration</h3>
          <ul>
            <li>Connect to OpenAI API with proper authentication</li>
            <li>Design prompt templates for different sections</li>
            <li>Build AI assistant UI with loading states</li>
            <li>Implement error handling and retry logic</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Phase 3: Core Features</h3>
          <ul>
            <li>Real-time preview that updates as user types</li>
            <li>ATS scoring algorithm with keyword analysis</li>
            <li>PDF export with proper formatting</li>
            <li>LocalStorage or database persistence</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Phase 4: Polish & UX</h3>
          <ul>
            <li>Responsive design for mobile and tablet</li>
            <li>Loading states and skeleton screens</li>
            <li>Clear error messages and validation</li>
            <li>Success feedback and animations</li>
          </ul>
        </section>

        <div className={styles.instructions}>
          <h4>Instructions:</h4>
          <ol>
            <li>Copy the build checklist into Lovable</li>
            <li>Start implementing the core features</li>
            <li>Upload screenshots of your working build</li>
          </ol>
        </div>
      </div>
    </PremiumLayout>
  )
}
