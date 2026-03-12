'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface StepArtifact {
  stepNumber: number
  fileName: string
  uploadedAt: string
}

interface BuildStore {
  artifacts: StepArtifact[]
  lovableLink: string
  githubLink: string
  deployLink: string
  checklistPassed: boolean
  
  addArtifact: (stepNumber: number, fileName: string) => void
  hasArtifact: (stepNumber: number) => boolean
  setLovableLink: (link: string) => void
  setGithubLink: (link: string) => void
  setDeployLink: (link: string) => void
  setChecklistPassed: (passed: boolean) => void
  reset: () => void
}

export const useBuildStore = create<BuildStore>()(
  persist(
    (set, get) => ({
      artifacts: [],
      lovableLink: '',
      githubLink: '',
      deployLink: '',
      checklistPassed: false,
      
      addArtifact: (stepNumber, fileName) => {
        set((state) => ({
          artifacts: [
            ...state.artifacts.filter(a => a.stepNumber !== stepNumber),
            { stepNumber, fileName, uploadedAt: new Date().toISOString() }
          ]
        }))
      },
      
      hasArtifact: (stepNumber) => {
        return get().artifacts.some(a => a.stepNumber === stepNumber)
      },
      
      setLovableLink: (link) => set({ lovableLink: link }),
      setGithubLink: (link) => set({ githubLink: link }),
      setDeployLink: (link) => set({ deployLink: link }),
      setChecklistPassed: (passed) => set({ checklistPassed: passed }),
      
      reset: () => set({
        artifacts: [],
        lovableLink: '',
        githubLink: '',
        deployLink: '',
        checklistPassed: false
      })
    }),
    {
      name: 'rb-build-store'
    }
  )
)
