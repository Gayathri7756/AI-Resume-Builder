'use client'

import { useResumeStore } from '@/lib/resumeStore'
import { calculateATSScore } from '@/lib/atsScoring'
import styles from './ATSScore.module.css'

export default function ATSScore() {
  const {
    summary,
    education,
    experience,
    projects,
    skills,
    links
  } = useResumeStore()

  const { score, suggestions } = calculateATSScore(
    summary,
    education,
    experience,
    projects,
    skills,
    links
  )

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#2D5016' // Green
    if (score >= 60) return '#8B6914' // Yellow/Gold
    return '#8B0000' // Red
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>ATS Readiness Score</h3>
      </div>

      <div className={styles.scoreDisplay}>
        <div className={styles.scoreNumber} style={{ color: getScoreColor(score) }}>
          {score}
        </div>
        <div className={styles.scoreLabel}>/ 100</div>
      </div>

      <div className={styles.meter}>
        <div 
          className={styles.meterFill}
          style={{ 
            width: `${score}%`,
            backgroundColor: getScoreColor(score)
          }}
        />
      </div>

      {suggestions.length > 0 && (
        <div className={styles.suggestions}>
          <h4>Suggestions</h4>
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
