'use client'

import { useState } from 'react'
import styles from './BuildPanel.module.css'

interface BuildPanelProps {
  artifactContent: string
  onArtifactUpload: (file: File) => void
  hasArtifact: boolean
}

export default function BuildPanel({ artifactContent, onArtifactUpload, hasArtifact }: BuildPanelProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(artifactContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onArtifactUpload(file)
    }
  }

  return (
    <div className={styles.panel}>
      <h3>Build Panel</h3>
      
      <div className={styles.section}>
        <label className={styles.label}>Copy This Into Lovable</label>
        <textarea 
          className={styles.textarea}
          value={artifactContent}
          readOnly
          rows={8}
        />
        <button 
          onClick={handleCopy}
          className={styles.btnCopy}
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>

      <div className={styles.section}>
        <a 
          href="https://lovable.dev" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.btnLovable}
        >
          Build in Lovable →
        </a>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Upload Result</label>
        <div className={styles.uploadOptions}>
          <label className={styles.uploadBtn}>
            <input 
              type="file" 
              onChange={handleFileUpload}
              accept="image/*,.pdf,.zip"
              style={{ display: 'none' }}
            />
            {hasArtifact ? '✓ It Worked' : '📎 Add Screenshot'}
          </label>
          {hasArtifact && (
            <span className={styles.successBadge}>Artifact Uploaded</span>
          )}
        </div>
      </div>
    </div>
  )
}
