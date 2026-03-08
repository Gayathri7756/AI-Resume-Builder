'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import PremiumLayout from '@/components/PremiumLayout'
import BuildPanel from '@/components/BuildPanel'
import { useBuildStore } from '@/lib/store'
import styles from '../step.module.css'

const ARTIFACT_CONTENT = `# AI Resume Builder - Architecture

Tech Stack:
- Frontend: React + TypeScript
- Styling: Tailwind CSS
- AI: OpenAI GPT-4 API
- Storage: LocalStorage / Supabase
- Export: PDF generation library

Architecture Layers:
1. Presentation Layer (UI Components)
2. Business Logic Layer (Resume Builder)
3. AI Integration Layer (Content Generation)
4. Data Layer (Storage & Persistence)

Key Components:
- Resume Editor
- AI Content Generator
- Template Engine
- ATS Analyzer
- PDF Exporter`

export default function ArchitecturePage() {
  const router = useRouter()
  const { addArtifact, hasArtifact } = useBuildStore()
  const stepNumber = 3

  useEffect(() => {
    if (!hasArtifact(2)) {
      router.push('/rb/02-market')
    }
  }, [hasArtifact, router])

  const hasCurrentArtifact = hasArtifact(stepNumber)

  const handleArtifactUpload = (file: File) => {
    addArtifact(stepNumber, file.name)
  }

  const handleNext = () => {
    router.push('/rb/04-hld')
  }

  const handlePrevious = () => {
    router.push('/rb/02-market')
  }

  return (
    <PremiumLayout
      currentStep={3}
      totalSteps={8}
      contextHeader="Step 3: System Architecture"
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
        <h1>System Architecture</h1>
        
        <section className={styles.section}>
          <h3>Technology Stack</h3>
          <ul>
            <li><strong>Frontend:</strong> React with TypeScript for type safety</li>
            <li><strong>Styling:</strong> Tailwind CSS for rapid UI development</li>
            <li><strong>AI:</strong> OpenAI GPT-4 API for content generation</li>
            <li><strong>Storage:</strong> LocalStorage for MVP, Supabase for production</li>
            <li><strong>Export:</strong> PDF generation library (react-pdf or similar)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Architecture Layers</h3>
          <ol>
            <li><strong>Presentation Layer:</strong> React components, UI/UX</li>
            <li><strong>Business Logic Layer:</strong> Resume building logic, validation</li>
            <li><strong>AI Integration Layer:</strong> API calls, prompt engineering</li>
            <li><strong>Data Layer:</strong> State management, persistence</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h3>Core Components</h3>
          <ul>
            <li>Resume Editor - Rich text editing interface</li>
            <li>AI Content Generator - Intelligent content suggestions</li>
            <li>Template Engine - Multiple resume layouts</li>
            <li>ATS Analyzer - Compatibility scoring</li>
            <li>PDF Exporter - High-quality document generation</li>
          </ul>
        </section>

        <div className={styles.instructions}>
          <h4>Instructions:</h4>
          <ol>
            <li>Review the architecture design</li>
            <li>Copy into Lovable and create an architecture diagram</li>
            <li>Upload your artifact to continue</li>
          </ol>
        </div>
      </div>
    </PremiumLayout>
  )
}
