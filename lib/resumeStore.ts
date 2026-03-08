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
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

export interface SkillCategories {
  technical: string[]
  soft: string[]
  tools: string[]
}

export interface Links {
  github: string
  linkedin: string
  portfolio: string
}

export type TemplateType = 'classic' | 'modern' | 'minimal'

interface ResumeStore {
  personalInfo: PersonalInfo
  summary: string
  education: Education[]
  experience: Experience[]
  projects: Project[]
  skills: SkillCategories
  links: Links
  template: TemplateType
  
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
  addSkill: (category: keyof SkillCategories, skill: string) => void
  removeSkill: (category: keyof SkillCategories, skill: string) => void
  suggestSkills: () => void
  setLinks: (links: Links) => void
  setTemplate: (template: TemplateType) => void
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
  skills: {
    technical: [],
    soft: [],
    tools: []
  },
  links: {
    github: '',
    linkedin: '',
    portfolio: ''
  },
  template: 'classic' as TemplateType
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
      
      addSkill: (category, skill) => set((state) => ({
        skills: {
          ...state.skills,
          [category]: [...state.skills[category], skill]
        }
      })),
      
      removeSkill: (category, skill) => set((state) => ({
        skills: {
          ...state.skills,
          [category]: state.skills[category].filter(s => s !== skill)
        }
      })),
      
      suggestSkills: () => set((state) => ({
        skills: {
          technical: [...new Set([...state.skills.technical, 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'GraphQL'])],
          soft: [...new Set([...state.skills.soft, 'Team Leadership', 'Problem Solving'])],
          tools: [...new Set([...state.skills.tools, 'Git', 'Docker', 'AWS'])]
        }
      })),
      
      setLinks: (links) => set({ links }),
      setTemplate: (template) => set({ template }),
      
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
          technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
          liveUrl: 'https://ecommerce-demo.com',
          githubUrl: 'github.com/johndoe/ecommerce'
        }],
        skills: {
          technical: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL'],
          soft: ['Team Leadership', 'Problem Solving', 'Communication'],
          tools: ['Git', 'Docker', 'AWS', 'VS Code']
        },
        links: {
          github: 'github.com/johndoe',
          linkedin: 'linkedin.com/in/johndoe',
          portfolio: 'johndoe.dev'
        }
      }),
      
      reset: () => set(initialState)
    }),
    {
      name: 'resumeBuilderData',
      version: 1,
      migrate: (persistedState: any, version: number) => {
        // Migration logic to handle old data structure
        if (version === 0 || !persistedState) {
          return initialState
        }
        
        // Ensure skills is an object with arrays
        if (typeof persistedState.skills === 'string') {
          const skillsArray = persistedState.skills.split(',').map((s: string) => s.trim()).filter(Boolean)
          persistedState.skills = {
            technical: skillsArray,
            soft: [],
            tools: []
          }
        } else if (!persistedState.skills || typeof persistedState.skills !== 'object') {
          persistedState.skills = {
            technical: [],
            soft: [],
            tools: []
          }
        } else {
          // Ensure all skill categories exist
          persistedState.skills = {
            technical: persistedState.skills.technical || [],
            soft: persistedState.skills.soft || [],
            tools: persistedState.skills.tools || []
          }
        }
        
        // Ensure projects have technologies as array
        if (persistedState.projects && Array.isArray(persistedState.projects)) {
          persistedState.projects = persistedState.projects.map((proj: any) => ({
            ...proj,
            technologies: Array.isArray(proj.technologies) 
              ? proj.technologies 
              : (typeof proj.technologies === 'string' 
                  ? proj.technologies.split(',').map((t: string) => t.trim()).filter(Boolean)
                  : []),
            liveUrl: proj.liveUrl || proj.link || '',
            githubUrl: proj.githubUrl || ''
          }))
        }
        
        return persistedState
      }
    }
  )
)
