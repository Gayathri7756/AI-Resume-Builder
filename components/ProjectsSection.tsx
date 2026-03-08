'use client'

import { useState } from 'react'
import { useResumeStore } from '@/lib/resumeStore'
import TagInput from './TagInput'
import styles from './ProjectsSection.module.css'

export default function ProjectsSection() {
  const { projects, addProject, updateProject, removeProject } = useResumeStore()
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleAddProject = () => {
    const newProject = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: [],
      liveUrl: '',
      githubUrl: ''
    }
    addProject(newProject)
    setExpandedId(newProject.id)
  }

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Projects</h2>
        <button onClick={handleAddProject} className={styles.addBtn}>
          + Add Project
        </button>
      </div>

      {projects.map((project) => {
        const isExpanded = expandedId === project.id
        const charCount = project.description.length

        return (
          <div key={project.id} className={styles.projectCard}>
            <button
              onClick={() => toggleExpand(project.id)}
              className={styles.projectHeader}
              type="button"
            >
              <span className={styles.projectTitle}>
                {project.name || 'Untitled Project'}
              </span>
              <span className={styles.expandIcon}>
                {isExpanded ? '▼' : '▶'}
              </span>
            </button>

            {isExpanded && (
              <div className={styles.projectContent}>
                <div className={styles.field}>
                  <label>Project Title</label>
                  <input
                    type="text"
                    placeholder="E-commerce Platform"
                    value={project.name}
                    onChange={(e) => updateProject(project.id, { name: e.target.value })}
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label>
                    Description
                    <span className={styles.charCount}>
                      {charCount}/200
                    </span>
                  </label>
                  <textarea
                    placeholder="Built full-stack platform with 40% performance improvement..."
                    value={project.description}
                    onChange={(e) => {
                      if (e.target.value.length <= 200) {
                        updateProject(project.id, { description: e.target.value })
                      }
                    }}
                    className={styles.textarea}
                    rows={3}
                    maxLength={200}
                  />
                </div>

                <div className={styles.field}>
                  <label>Tech Stack</label>
                  <TagInput
                    tags={project.technologies}
                    onAdd={(tech) => updateProject(project.id, {
                      technologies: [...project.technologies, tech]
                    })}
                    onRemove={(tech) => updateProject(project.id, {
                      technologies: project.technologies.filter(t => t !== tech)
                    })}
                    placeholder="Add technology and press Enter..."
                  />
                </div>

                <div className={styles.field}>
                  <label>Live URL (optional)</label>
                  <input
                    type="text"
                    placeholder="https://myproject.com"
                    value={project.liveUrl}
                    onChange={(e) => updateProject(project.id, { liveUrl: e.target.value })}
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label>GitHub URL (optional)</label>
                  <input
                    type="text"
                    placeholder="https://github.com/username/project"
                    value={project.githubUrl}
                    onChange={(e) => updateProject(project.id, { githubUrl: e.target.value })}
                    className={styles.input}
                  />
                </div>

                <button
                  onClick={() => removeProject(project.id)}
                  className={styles.deleteBtn}
                  type="button"
                >
                  Delete Project
                </button>
              </div>
            )}
          </div>
        )
      })}
    </section>
  )
}
