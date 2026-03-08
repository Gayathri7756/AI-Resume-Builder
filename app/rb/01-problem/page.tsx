'use client'

import { useRouter } from 'next/navigation'
import PremiumLayout from '@/components/PremiumLayout'
import BuildPanel from '@/components/BuildPanel'
import { useBuildStore } from '@/lib/store'
import styles from '../step.module.css'

const ARTIFACT_CONTENT = `# AI Resume Builder - Problem Statement

Build an AI-powered resume builder that helps users create professional resumes using AI assistance.

Key Problems to Solve:
- Users struggle to write compelling resume content
- Formatting and design consistency is difficult
- Tailoring resumes for specific jobs is time-consuming
- ATS optimization is complex

Target Users:
- Job seekers
- Career changers
- Recent graduates
- Professionals updating resumes`

export default function ProblemPage() {
  const router = useRouter()
  const { addArtifact, hasArtifact } = useBuildStore()
  const stepNumber = 1
  const hasCurrentArtifact = hasArtifact(stepNumber)

  const handleArtifactUpload = (file: File) => {
    addArtifact(stepNumber, file.name)
  }

  const handleNext = () => {
    router.push('/rb/02-market')
  }

  const handlePrevious = () => {
    router.push('/rb/01-problem')
  }

  return (
    <PremiumLayout
      currentStep={1}
      totalSteps={8}
      contextHeader="Step 1: Problem Definition"
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
        <h1>Define the Problem</h1>
        
        <section className={styles.section}>
          <h3>What problem are we solving?</h3>
          <p>
            Creating a professional resume is challenging for most people. They struggle with:
          </p>
          <ul>
            <li>Writing compelling, achievement-focused content</li>
            <li>Choosing the right format and design</li>
            <li>Optimizing for Applicant Tracking Systems (ATS)</li>
            <li>Tailoring content for specific job applications</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Who experiences this problem?</h3>
          <p>
            Our target users include job seekers at all career stages, from recent graduates 
            to experienced professionals looking to advance their careers.
          </p>
        </section>

        <section className={styles.section}>
          <h3>Why does this matter?</h3>
          <p>
            A well-crafted resume is often the difference between getting an interview and 
            being overlooked. AI can democratize access to professional resume writing expertise.
          </p>
        </section>

        <div className={styles.instructions}>
          <h4>Instructions:</h4>
          <ol>
            <li>Review the problem statement in the Build Panel</li>
            <li>Copy the content into Lovable</li>
            <li>Create a problem definition document</li>
            <li>Upload a screenshot or artifact to proceed</li>
          </ol>
        </div>
      </div>
    </PremiumLayout>
  )
}
