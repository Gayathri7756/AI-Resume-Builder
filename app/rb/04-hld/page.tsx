'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import PremiumLayout from '@/components/PremiumLayout'
import BuildPanel from '@/components/BuildPanel'
import { useBuildStore } from '@/lib/store'
import styles from '../step.module.css'

const ARTIFACT_CONTENT = `# AI Resume Builder - High Level Design

User Flow:
1. Landing → Sign Up/Login
2. Dashboard → New Resume / Edit Existing
3. Resume Builder → Sections (Personal, Experience, Education, Skills)
4. AI Assistant → Generate content for each section
5. Preview → Real-time resume preview
6. Export → Download PDF

Key Features:
- Multi-step resume builder
- AI-powered content generation
- Real-time preview
- Multiple templates
- ATS score checker
- PDF export

Data Models:
- User (id, email, name)
- Resume (id, userId, title, template)
- Section (id, resumeId, type, content)
- AIPrompt (id, sectionType, prompt, response)`

export default function HLDPage() {
  const router = useRouter()
  const { addArtifact, hasArtifact } = useBuildStore()
  const stepNumber = 4

  useEffect(() => {
    if (!hasArtifact(3)) {
      router.push('/rb/03-architecture')
    }
  }, [hasArtifact, router])

  const hasCurrentArtifact = hasArtifact(stepNumber)

  const handleArtifactUpload = (file: File) => {
    addArtifact(stepNumber, file.name)
  }

  const handleNext = () => {
    router.push('/rb/05-lld')
  }

  const handlePrevious = () => {
    router.push('/rb/03-architecture')
  }

  return (
    <PremiumLayout
      currentStep={4}
      totalSteps={8}
      contextHeader="Step 4: High Level Design"
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
        <h1>High Level Design</h1>
        
        <section className={styles.section}>
          <h3>User Flow</h3>
          <ol>
            <li>User lands on homepage and signs up/logs in</li>
            <li>Dashboard shows existing resumes or option to create new</li>
            <li>Resume builder with sections: Personal Info, Experience, Education, Skills</li>
            <li>AI assistant available for each section to generate content</li>
            <li>Real-time preview shows formatted resume</li>
            <li>Export to PDF when complete</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h3>Core Features</h3>
          <ul>
            <li><strong>Multi-step Builder:</strong> Guided process for creating resumes</li>
            <li><strong>AI Content Generation:</strong> Smart suggestions based on job role</li>
            <li><strong>Live Preview:</strong> See changes in real-time</li>
            <li><strong>Template Selection:</strong> Multiple professional designs</li>
            <li><strong>ATS Checker:</strong> Score and optimize for applicant tracking systems</li>
            <li><strong>PDF Export:</strong> High-quality downloadable resumes</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Data Models</h3>
          <ul>
            <li><strong>User:</strong> Authentication and profile data</li>
            <li><strong>Resume:</strong> Top-level resume document</li>
            <li><strong>Section:</strong> Individual resume sections with content</li>
            <li><strong>AIPrompt:</strong> Track AI interactions and responses</li>
          </ul>
        </section>

        <div className={styles.instructions}>
          <h4>Instructions:</h4>
          <ol>
            <li>Study the high-level design</li>
            <li>Copy into Lovable and create flow diagrams</li>
            <li>Upload your HLD artifact</li>
          </ol>
        </div>
      </div>
    </PremiumLayout>
  )
}
