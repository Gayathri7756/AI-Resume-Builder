'use client'

import { useEffect } from 'react'
import styles from './Toast.module.css'

interface ToastProps {
  message: string
  onClose: () => void
  duration?: number
}

export default function Toast({ message, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div className={styles.toast}>
      <span className={styles.icon}>✓</span>
      <span className={styles.message}>{message}</span>
    </div>
  )
}
