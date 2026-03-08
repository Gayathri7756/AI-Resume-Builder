'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import PremiumLayout from '@/components/PremiumLayout'
import BuildPanel from '@/components/BuildPanel'
import { useBuildStore } from '@/lib/store'
import styles from '../step.module.css'

const ARTIFACT_CONTENT = `# AI Resume Builder - Low Level Design

Component Structure:
- App
  - Layout
    - Header
    - Sidebar
  - Pages
    - Dashboard
    - ResumeBuilder
      - PersonalInfoForm
      - ExperienceForm
      - EducationForm
      - SkillsForm
    - Preview
  - Components
    - AIAssistant
    - TemplateSelector
    - ATSChecker
    - PDFExporter

API Endpoints:
- POST /api/ai/generate - Generate content
- GET /api/resumes - List user resumes
- POST /api/resumes - Create resume
- PUT /api/resumes/:id - Update resume
- GET /api/resumes/:id/pdf - Export PDF

State Management:
- useResumeStore (Zustand)
  - currentResume
  - sections
  - template
  - actions (update, save, export)`

export default function LLDPage() {
  const router = useRouter()
  const { addArtifact, hasArtifact } = useBuildStore()
  const stepNumber = 5

  useEffect(() => {
    if (!hasArtifact(4)) {
      router.push('/rb/04-hld')
    }
  }, [hasArtifact, router])

  const hasCurrentArtifact = hasArtifact(stepNumber)

  const handleArtifactUpload = (file: File) => {
    addArtifact(stepNumber, file.name)
  }

  const handleNext = () => {
    router.push('/rb/06-build')
  }

  const handlePrevious = () => {
    router.push('/rb/04-hld')
  }

  return (
    <PremiumLayout
      currentStep={5}
      totalSteps={8}
      contextHeader="Step 5: Low Level Design"
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
        <h1>Low Level Design</h1>
        
        <section className={styles.section}>
          <h3>Component Hierarchy</h3>
          <ul>
            <li><strong>App:</strong> Root component with routing</li>
            <li><strong>Layout:</strong> Header, sidebar, navigation</li>
            <li><strong>Pages:</strong>
              <ul>
                <li>Dashboard - Resume list and management</li>
                <li>ResumeBuilder - Multi-step form with sections</li>
                <li>Preview - Live resume preview</li>
              </ul>
            </li>
            <li><strong>Components:</strong>
              <ul>
                <li>AIAssistant - Content generation interface</li>
                <li>TemplateSelector - Choose resume design</li>
                <li>ATSChecker - Compatibility analysis</li>
                <li>PDFExporter - Download functionality</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>API Design</h3>
          <ul>
            <li><strong>POST /api/ai/generate:</strong> Generate AI content for sections</li>
            <li><strong>GET /api/resumes:</strong> Fetch all user resumes</li>
            <li><strong>POST /api/resumes:</strong> Create new resume</li>
            <li><strong>PUT /api/resumes/:id:</strong> Update existing resume</li>
            <li><strong>GET /api/resumes/:id/pdf:</strong> Export resume as PDF</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>State Management</h3>
          <p>Using Zustand for global state:</p>
          <ul>
            <li>currentResume - Active resume being edited</li>
            <li>sections - Array of resume sections</li>
            <li>template - Selected design template</li>
            <li>Actions: update, save, export, generateAI</li>
          </ul>
        </section>

        <div className={styles.instructions}>
          <h4>Instructions:</h4>
          <ol>
            <li>Review the detailed component structure</li>
            <li>Copy into Lovable and create component diagrams</li>
            <li>Upload your LLD artifact</li>
          </ol>
        </div>
      </div>
    </PremiumLayout>
  )
}
