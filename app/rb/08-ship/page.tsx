'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import PremiumLayout from '@/components/PremiumLayout'
import BuildPanel from '@/components/BuildPanel'
import { useBuildStore } from '@/lib/store'
import styles from '../step.module.css'

const ARTIFACT_CONTENT = `# AI Resume Builder - Ship Phase

Deployment Checklist:

Pre-Launch:
✓ All tests passing
✓ Environment variables configured
✓ API keys secured
✓ Error tracking set up (Sentry)
✓ Analytics configured

Deployment:
✓ Build production bundle
✓ Deploy to Vercel/Netlify
✓ Configure custom domain
✓ Set up SSL certificate
✓ Test production environment

Post-Launch:
✓ Monitor error logs
✓ Track user analytics
✓ Gather user feedback
✓ Plan iteration roadmap

Next Steps:
- Add more templates
- Improve AI prompts
- Add collaboration features
- Build mobile app`

export default function ShipPage() {
  const router = useRouter()
  const { addArtifact, hasArtifact } = useBuildStore()
  const stepNumber = 8

  useEffect(() => {
    if (!hasArtifact(7)) {
      router.push('/rb/07-test')
    }
  }, [hasArtifact, router])

  const hasCurrentArtifact = hasArtifact(stepNumber)

  const handleArtifactUpload = (file: File) => {
    addArtifact(stepNumber, file.name)
  }

  const handleNext = () => {
    router.push('/rb/proof')
  }

  const handlePrevious = () => {
    router.push('/rb/07-test')
  }

  return (
    <PremiumLayout
      currentStep={8}
      totalSteps={8}
      contextHeader="Step 8: Ship & Deploy"
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
        <h1>Ship & Deploy</h1>
        
        <section className={styles.section}>
          <h3>Pre-Launch Checklist</h3>
          <ul>
            <li>All test suites passing with 100% critical path coverage</li>
            <li>Environment variables properly configured</li>
            <li>API keys secured and not exposed in client code</li>
            <li>Error tracking set up (Sentry or similar)</li>
            <li>Analytics configured (Google Analytics, Mixpanel, etc.)</li>
            <li>SEO meta tags and Open Graph images</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Deployment Steps</h3>
          <ol>
            <li>Build production bundle and verify no errors</li>
            <li>Deploy to hosting platform (Vercel, Netlify, etc.)</li>
            <li>Configure custom domain if available</li>
            <li>Ensure SSL certificate is active</li>
            <li>Test production environment thoroughly</li>
            <li>Set up CI/CD pipeline for future updates</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h3>Post-Launch Activities</h3>
          <ul>
            <li>Monitor error logs and fix critical issues immediately</li>
            <li>Track user analytics and behavior patterns</li>
            <li>Gather user feedback through surveys or interviews</li>
            <li>Plan iteration roadmap based on data</li>
            <li>Document lessons learned</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Future Enhancements</h3>
          <ul>
            <li>Add more professional templates</li>
            <li>Improve AI prompts based on user feedback</li>
            <li>Add collaboration features for team reviews</li>
            <li>Build native mobile applications</li>
            <li>Integrate with job boards</li>
          </ul>
        </section>

        <div className={styles.instructions}>
          <h4>Instructions:</h4>
          <ol>
            <li>Complete deployment to production</li>
            <li>Upload deployment proof (screenshots, links)</li>
            <li>Proceed to Proof page to submit final project</li>
          </ol>
        </div>
      </div>
    </PremiumLayout>
  )
}
