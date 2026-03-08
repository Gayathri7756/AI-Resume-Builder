'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface PersonalInfo {
  name: string
  email: string
  phone: string
  location: string
}

export interface Education {
  id: string
  school: string
  degree: string
  field: string
  startDate: string
  endDate: string
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string
  link: string
}

export interface Links {
  github: string
  linkedin: string
  portfolio: string
}

interface ResumeStore {
  personalInfo: PersonalInfo
  summary: string
  education: Education[]
  experience: Experience[]
  projects: Project[]
  skills: string
  links: Links
  
  setPersonalInfo: (info: PersonalInfo) => void
  setSummary: (summary: string) => void
  addEducation: (edu: Education) => void
  updateEducation: (id: string, edu: Partial<Education>) => void
  removeEducation: (id: string) => void
  addExperience: (exp: Experience) => void
  updateExperience: (id: string, exp: Partial<Experience>) => void
  removeExperience: (id: string) => void
  addProject: (proj: Project) => void
  updateProject: (id: string, proj: Partial<Project>) => void
  removeProject: (id: string) => void
  setSkills: (skills: string) => void
  setLinks: (links: Links) => void
  loadSampleData: () => void
  reset: () => void
}

const initialState = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: ''
  },
  summary: '',
  education: [],
  experience: [],
  projects: [],
  skills: '',
  links: {
    github: '',
    linkedin: '',
    portfolio: ''
  }
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      ...initialState,
      
      setPersonalInfo: (info) => set({ personalInfo: info }),
      setSummary: (summary) => set({ summary }),
      
      addEducation: (edu) => set((state) => ({
        education: [...state.education, edu]
      })),
      updateEducation: (id, edu) => set((state) => ({
        education: state.education.map(e => e.id === id ? { ...e, ...edu } : e)
      })),
      removeEducation: (id) => set((state) => ({
        education: state.education.filter(e => e.id !== id)
      })),
      
      addExperience: (exp) => set((state) => ({
        experience: [...state.experience, exp]
      })),
      updateExperience: (id, exp) => set((state) => ({
        experience: state.experience.map(e => e.id === id ? { ...e, ...exp } : e)
      })),
      removeExperience: (id) => set((state) => ({
        experience: state.experience.filter(e => e.id !== id)
      })),
      
      addProject: (proj) => set((state) => ({
        projects: [...state.projects, proj]
      })),
      updateProject: (id, proj) => set((state) => ({
        projects: state.projects.map(p => p.id === id ? { ...p, ...proj } : p)
      })),
      removeProject: (id) => set((state) => ({
        projects: state.projects.filter(p => p.id !== id)
      })),
      
      setSkills: (skills) => set({ skills }),
      setLinks: (links) => set({ links }),
      
      loadSampleData: () => set({
        personalInfo: {
          name: 'John Doe',
          email: 'john.doe@email.com',
          phone: '(555) 123-4567',
          location: 'San Francisco, CA'
        },
        summary: 'Experienced software engineer with 5+ years building scalable web applications. Passionate about clean code and user experience.',
        education: [{
          id: '1',
          school: 'University of California',
          degree: 'Bachelor of Science',
          field: 'Computer Science',
          startDate: '2015',
          endDate: '2019'
        }],
        experience: [{
          id: '1',
          company: 'Tech Corp',
          position: 'Senior Software Engineer',
          location: 'San Francisco, CA',
          startDate: '2021',
          endDate: 'Present',
          description: 'Led development of customer-facing web applications. Improved performance by 40% through optimization.'
        }],
        projects: [{
          id: '1',
          name: 'E-commerce Platform',
          description: 'Built full-stack e-commerce platform with React and Node.js',
          technologies: 'React, Node.js, PostgreSQL, AWS',
          link: 'github.com/johndoe/ecommerce'
        }],
        skills: 'JavaScript, TypeScript, React, Node.js, Python, SQL, AWS, Docker',
        links: {
          github: 'github.com/johndoe',
          linkedin: 'linkedin.com/in/johndoe',
          portfolio: 'johndoe.dev'
        }
      }),
      
      reset: () => set(initialState)
    }),
    {
      name: 'resumeBuilderData'
    }
  )
)
