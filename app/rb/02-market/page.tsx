'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import PremiumLayout from '@/components/PremiumLayout'
import BuildPanel from '@/components/BuildPanel'
import { useBuildStore } from '@/lib/store'
import styles from '../step.module.css'

const ARTIFACT_CONTENT = `# AI Resume Builder - Market Research

Competitive Landscape:
- Resume.io - Template-based, limited AI
- Zety - Strong templates, basic suggestions
- Rezi - ATS-focused, keyword optimization
- Kickresume - AI writing assistant

Our Differentiation:
- Advanced AI content generation
- Real-time ATS scoring
- Job-specific tailoring
- Modern, clean interface

Market Opportunity:
- 50M+ job seekers in US annually
- $2B resume services market
- Growing AI adoption in career tools`

export default function MarketPage() {
  const router = useRouter()
  const { addArtifact, hasArtifact } = useBuildStore()
  const stepNumber = 2

  useEffect(() => {
    if (!hasArtifact(1)) {
      router.push('/rb/01-problem')
    }
  }, [hasArtifact, router])

  const hasCurrentArtifact = hasArtifact(stepNumber)

  const handleArtifactUpload = (file: File) => {
    addArtifact(stepNumber, file.name)
  }

  const handleNext = () => {
    router.push('/rb/03-architecture')
  }

  const handlePrevious = () => {
    router.push('/rb/01-problem')
  }

  return (
    <PremiumLayout
      currentStep={2}
      totalSteps={8}
      contextHeader="Step 2: Market Research"
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
        <h1>Market Analysis</h1>
        
        <section className={styles.section}>
          <h3>Competitive Landscape</h3>
          <p>Several players exist in the resume building space:</p>
          <ul>
            <li><strong>Resume.io</strong> - Template-based with limited AI features</li>
            <li><strong>Zety</strong> - Strong template library with basic content suggestions</li>
            <li><strong>Rezi</strong> - Focused on ATS optimization and keyword matching</li>
            <li><strong>Kickresume</strong> - Offers AI writing assistant for content</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Our Differentiation</h3>
          <p>We'll stand out through:</p>
          <ul>
            <li>Advanced AI that understands context and generates tailored content</li>
            <li>Real-time ATS compatibility scoring</li>
            <li>Job description analysis for targeted resume optimization</li>
            <li>Clean, modern interface focused on user experience</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Market Opportunity</h3>
          <p>
            The resume services market is valued at over $2B annually, with 50M+ job seekers 
            in the US alone. AI-powered tools are seeing rapid adoption in the career space.
          </p>
        </section>

        <div className={styles.instructions}>
          <h4>Instructions:</h4>
          <ol>
            <li>Copy the market research into Lovable</li>
            <li>Create a competitive analysis document</li>
            <li>Upload your artifact to unlock the next step</li>
          </ol>
        </div>
      </div>
    </PremiumLayout>
  )
}
