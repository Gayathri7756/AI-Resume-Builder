'use client'

import { useResumeStore } from '@/lib/resumeStore'
import { calculateATSScore } from '@/lib/atsScoring'
import styles from './ATSScore.module.css'

export default function ATSScore() {
  const {
    personalInfo,
    summary,
    education,
    experience,
    projects,
    skills,
    links
  } = useResumeStore()

  const { score, suggestions, status } = calculateATSScore(
    personalInfo,
    summary,
    education,
    experience,
    projects,
    skills,
    links
  )

  const getStatusColor = (status: string) => {
    if (status === 'strong') return '#2D5016' // Green
    if (status === 'getting-there') return '#8B6914' // Amber
    return '#8B0000' // Red
  }

  const getStatusLabel = (status: string) => {
    if (status === 'strong') return 'Strong Resume'
    if (status === 'getting-there') return 'Getting There'
    return 'Needs Work'
  }

  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (score / 100) * circumference

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>ATS Readiness Score</h3>
      </div>

      <div className={styles.scoreDisplay}>
        <svg className={styles.circle} viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="45"
            className={styles.circleBg}
          />
          <circle
            cx="60"
            cy="60"
            r="45"
            className={styles.circleFill}
            style={{
              stroke: getStatusColor(status),
              strokeDashoffset: strokeDashoffset
            }}
          />
        </svg>
        <div className={styles.scoreNumber} style={{ color: getStatusColor(status) }}>
          {score}
        </div>
        <div className={styles.scoreLabel}>/ 100</div>
      </div>

      <div className={styles.status} style={{ color: getStatusColor(status) }}>
        {getStatusLabel(status)}
      </div>

      {suggestions.length > 0 && (
        <div className={styles.suggestions}>
          <h4>Top Improvements</h4>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
