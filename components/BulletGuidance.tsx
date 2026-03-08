'use client'

import { validateBullet } from '@/lib/bulletValidation'
import styles from './BulletGuidance.module.css'

interface BulletGuidanceProps {
  text: string
}

export default function BulletGuidance({ text }: BulletGuidanceProps) {
  const { needsActionVerb, needsNumbers } = validateBullet(text)
  
  if (!text || (!needsActionVerb && !needsNumbers)) {
    return null
  }

  return (
    <div className={styles.guidance}>
      {needsActionVerb && (
        <span className={styles.hint}>💡 Start with a strong action verb</span>
      )}
      {needsNumbers && (
        <span className={styles.hint}>💡 Add measurable impact (numbers)</span>
      )}
    </div>
  )
}
