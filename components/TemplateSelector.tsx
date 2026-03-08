'use client'

import { useResumeStore, TemplateType } from '@/lib/resumeStore'
import styles from './TemplateSelector.module.css'

export default function TemplateSelector() {
  const { template, setTemplate } = useResumeStore()

  const templates: { id: TemplateType; name: string; description: string }[] = [
    { id: 'classic', name: 'Classic', description: 'Traditional serif style' },
    { id: 'modern', name: 'Modern', description: 'Clean sans-serif' },
    { id: 'minimal', name: 'Minimal', description: 'Ultra-clean layout' }
  ]

  return (
    <div className={styles.container}>
      <label className={styles.label}>Template</label>
      <div className={styles.options}>
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => setTemplate(t.id)}
            className={`${styles.option} ${template === t.id ? styles.active : ''}`}
          >
            <span className={styles.name}>{t.name}</span>
            <span className={styles.description}>{t.description}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
