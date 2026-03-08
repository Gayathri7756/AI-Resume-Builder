'use client'

import { useState } from 'react'
import { useResumeStore, SkillCategories } from '@/lib/resumeStore'
import TagInput from './TagInput'
import styles from './SkillsSection.module.css'

export default function SkillsSection() {
  const { skills, addSkill, removeSkill, suggestSkills } = useResumeStore()
  const [loading, setLoading] = useState(false)

  const handleSuggest = () => {
    setLoading(true)
    setTimeout(() => {
      suggestSkills()
      setLoading(false)
    }, 1000)
  }

  const categories: { key: keyof SkillCategories; label: string }[] = [
    { key: 'technical', label: 'Technical Skills' },
    { key: 'soft', label: 'Soft Skills' },
    { key: 'tools', label: 'Tools & Technologies' }
  ]

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Skills</h2>
        <button
          onClick={handleSuggest}
          disabled={loading}
          className={styles.suggestBtn}
        >
          {loading ? '⏳ Loading...' : '✨ Suggest Skills'}
        </button>
      </div>

      {categories.map(({ key, label }) => {
        const skillArray = skills[key] || []
        return (
          <div key={key} className={styles.category}>
            <label className={styles.label}>
              {label} ({skillArray.length})
            </label>
            <TagInput
              tags={skillArray}
              onAdd={(skill) => addSkill(key, skill)}
              onRemove={(skill) => removeSkill(key, skill)}
              placeholder={`Add ${label.toLowerCase()}...`}
            />
          </div>
        )
      })}
    </section>
  )
}
