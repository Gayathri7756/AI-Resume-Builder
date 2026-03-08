'use client'

import { useState, KeyboardEvent } from 'react'
import styles from './TagInput.module.css'

interface TagInputProps {
  tags: string[]
  onAdd: (tag: string) => void
  onRemove: (tag: string) => void
  placeholder?: string
}

export default function TagInput({ tags, onAdd, onRemove, placeholder = 'Type and press Enter' }: TagInputProps) {
  const [input, setInput] = useState('')

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault()
      if (!tags.includes(input.trim())) {
        onAdd(input.trim())
      }
      setInput('')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
            <button
              type="button"
              onClick={() => onRemove(tag)}
              className={styles.removeBtn}
              aria-label={`Remove ${tag}`}
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  )
}
