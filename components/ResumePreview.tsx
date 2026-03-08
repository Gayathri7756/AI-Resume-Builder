'use client'

import { useResumeStore } from '@/lib/resumeStore'
import styles from './ResumePreview.module.css'

export default function ResumePreview() {
  const {
    personalInfo,
    summary,
    education,
    experience,
    projects,
    skills,
    links
  } = useResumeStore()

  return (
    <div className={styles.resume}>
      {/* Header */}
      <header className={styles.header}>
        <h1>{personalInfo.name || 'Your Name'}</h1>
        <div className={styles.contact}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
        {(links.github || links.linkedin || links.portfolio) && (
          <div className={styles.links}>
            {links.github && <span>{links.github}</span>}
            {links.linkedin && <span>{links.linkedin}</span>}
            {links.portfolio && <span>{links.portfolio}</span>}
          </div>
        )}
      </header>

      {/* Summary */}
      {summary && (
        <section className={styles.section}>
          <h2>Summary</h2>
          <p>{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className={styles.section}>
          <h2>Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className={styles.item}>
              <div className={styles.itemHeader}>
                <strong>{exp.position || 'Position'}</strong>
                <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <div className={styles.itemSubheader}>
                <span>{exp.company || 'Company'}</span>
                {exp.location && <span>{exp.location}</span>}
              </div>
              {exp.description && <p>{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className={styles.section}>
          <h2>Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className={styles.item}>
              <div className={styles.itemHeader}>
                <strong>{edu.degree || 'Degree'} in {edu.field || 'Field'}</strong>
                <span>{edu.startDate} - {edu.endDate}</span>
              </div>
              <div className={styles.itemSubheader}>
                <span>{edu.school || 'School'}</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className={styles.section}>
          <h2>Projects</h2>
          {projects.map((proj) => (
            <div key={proj.id} className={styles.item}>
              <div className={styles.itemHeader}>
                <strong>{proj.name || 'Project Name'}</strong>
                {proj.link && <span className={styles.link}>{proj.link}</span>}
              </div>
              {proj.description && <p>{proj.description}</p>}
              {proj.technologies && (
                <p className={styles.tech}>{proj.technologies}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && (
        <section className={styles.section}>
          <h2>Skills</h2>
          <p>{skills}</p>
        </section>
      )}
    </div>
  )
}
