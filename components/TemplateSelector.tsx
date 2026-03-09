'use client'

import { useResumeStore, TemplateType, ColorTheme } from '@/lib/resumeStore'
import styles from './TemplateSelector.module.css'

const colorThemes: { id: ColorTheme; name: string; color: string }[] = [
  { id: 'teal', name: 'Teal', color: 'hsl(168, 60%, 40%)' },
  { id: 'navy', name: 'Navy', color: 'hsl(220, 60%, 35%)' },
  { id: 'burgundy', name: 'Burgundy', color: 'hsl(345, 60%, 35%)' },
  { id: 'forest', name: 'Forest', color: 'hsl(150, 50%, 30%)' },
  { id: 'charcoal', name: 'Charcoal', color: 'hsl(0, 0%, 25%)' }
]

export default function TemplateSelector() {
  const { template, setTemplate, colorTheme, setColorTheme } = useResumeStore()

  const templates: { id: TemplateType; name: string; description: string }[] = [
    { id: 'classic', name: 'Classic', description: 'Traditional single-column' },
    { id: 'modern', name: 'Modern', description: 'Two-column with sidebar' },
    { id: 'minimal', name: 'Minimal', description: 'Clean and spacious' }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <label className={styles.label}>Template Style</label>
        <div className={styles.templates}>
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className={`${styles.templateCard} ${template === t.id ? styles.active : ''}`}
              title={t.description}
            >
              <div className={styles.thumbnail}>
                {t.id === 'classic' && (
                  <svg viewBox="0 0 120 140" className={styles.svg}>
                    <rect x="10" y="10" width="100" height="8" fill="currentColor" />
                    <rect x="10" y="22" width="60" height="3" fill="currentColor" opacity="0.5" />
                    <line x1="10" y1="30" x2="110" y2="30" stroke="currentColor" strokeWidth="1" />
                    <rect x="10" y="35" width="100" height="4" fill="currentColor" />
                    <rect x="10" y="42" width="100" height="2" fill="currentColor" opacity="0.3" />
                    <rect x="10" y="46" width="100" height="2" fill="currentColor" opacity="0.3" />
                    <line x1="10" y1="54" x2="110" y2="54" stroke="currentColor" strokeWidth="1" />
                    <rect x="10" y="59" width="100" height="4" fill="currentColor" />
                    <rect x="10" y="66" width="100" height="2" fill="currentColor" opacity="0.3" />
                  </svg>
                )}
                {t.id === 'modern' && (
                  <svg viewBox="0 0 120 140" className={styles.svg}>
                    <rect x="10" y="10" width="35" height="120" fill="currentColor" opacity="0.2" />
                    <rect x="15" y="15" width="25" height="4" fill="currentColor" />
                    <rect x="15" y="22" width="20" height="2" fill="currentColor" opacity="0.5" />
                    <rect x="15" y="30" width="25" height="3" fill="currentColor" />
                    <rect x="50" y="10" width="60" height="6" fill="currentColor" />
                    <rect x="50" y="20" width="60" height="2" fill="currentColor" opacity="0.3" />
                    <rect x="50" y="24" width="60" height="2" fill="currentColor" opacity="0.3" />
                    <rect x="50" y="32" width="60" height="4" fill="currentColor" />
                    <rect x="50" y="39" width="60" height="2" fill="currentColor" opacity="0.3" />
                  </svg>
                )}
                {t.id === 'minimal' && (
                  <svg viewBox="0 0 120 140" className={styles.svg}>
                    <rect x="20" y="15" width="80" height="6" fill="currentColor" />
                    <rect x="20" y="26" width="50" height="2" fill="currentColor" opacity="0.4" />
                    <rect x="20" y="38" width="80" height="4" fill="currentColor" />
                    <rect x="20" y="46" width="80" height="2" fill="currentColor" opacity="0.3" />
                    <rect x="20" y="50" width="80" height="2" fill="currentColor" opacity="0.3" />
                    <rect x="20" y="62" width="80" height="4" fill="currentColor" />
                    <rect x="20" y="70" width="80" height="2" fill="currentColor" opacity="0.3" />
                  </svg>
                )}
              </div>
              {template === t.id && (
                <div className={styles.checkmark}>✓</div>
              )}
              <div className={styles.templateName}>{t.name}</div>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Accent Color</label>
        <div className={styles.colors}>
          {colorThemes.map((color) => (
            <button
              key={color.id}
              onClick={() => setColorTheme(color.id)}
              className={`${styles.colorCircle} ${colorTheme === color.id ? styles.activeColor : ''}`}
              style={{ backgroundColor: color.color }}
              title={color.name}
              aria-label={`Select ${color.name} color theme`}
            >
              {colorTheme === color.id && (
                <span className={styles.colorCheck}>✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
