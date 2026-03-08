'use client'

import { useResumeStore } from '@/lib/resumeStore'
import classicStyles from './ResumePreview.module.css'
import modernStyles from './ResumePreview.modern.module.css'
import minimalStyles from './ResumePreview.minimal.module.css'

export default function ResumePreview() {
  const {
    personalInfo,
    summary,
    education,
    experience,
    projects,
    skills,
    links,
    template
  } = useResumeStore()

  // Select styles based on template
  const styles = template === 'modern' ? modernStyles : 
                 template === 'minimal' ? minimalStyles : 
                 classicStyles

  const hasPersonalInfo = personalInfo.name || personalInfo.email || personalInfo.phone || personalInfo.location
  const hasLinks = links.github || links.linkedin || links.portfolio
  const hasContent = hasPersonalInfo || summary || education.length > 0 || experience.length > 0 || projects.length > 0 || skills || hasLinks

  if (!hasContent) {
    return (
      <div className={styles.empty || classicStyles.empty}>
        <p>Start filling out the form to see your resume preview</p>
      </div>
    )
  }

  return (
    <div className={styles.resume}>
      {/* Header */}
      {hasPersonalInfo && (
        <header className={styles.header}>
          <h1>{personalInfo.name || 'Your Name'}</h1>
          {(personalInfo.email || personalInfo.phone || personalInfo.location) && (
            <div className={styles.contact || classicStyles.contact}>
              {personalInfo.email && <span>{personalInfo.email}</span>}
              {personalInfo.phone && <span>{personalInfo.phone}</span>}
              {personalInfo.location && <span>{personalInfo.location}</span>}
            </div>
          )}
          {hasLinks && (
            <div className={styles.links || classicStyles.links}>
              {links.github && <span>{links.github}</span>}
              {links.linkedin && <span>{links.linkedin}</span>}
              {links.portfolio && <span>{links.portfolio}</span>}
            </div>
          )}
        </header>
      )}

      {/* Summary */}
      {summary && (
        <section className={styles.section || classicStyles.section}>
          <h2>Summary</h2>
          <p>{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && experience.some(exp => exp.position || exp.company) && (
        <section className={styles.section || classicStyles.section}>
          <h2>Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className={styles.item || classicStyles.item}>
              <div className={styles.itemHeader || classicStyles.itemHeader}>
                <strong>{exp.position || 'Position'}</strong>
                {(exp.startDate || exp.endDate) && (
                  <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                )}
              </div>
              {(exp.company || exp.location) && (
                <div className={styles.itemSubheader || classicStyles.itemSubheader}>
                  {exp.company && <span>{exp.company}</span>}
                  {exp.location && <span>{exp.location}</span>}
                </div>
              )}
              {exp.description && <p>{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && education.some(edu => edu.degree || edu.school) && (
        <section className={styles.section || classicStyles.section}>
          <h2>Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className={styles.item || classicStyles.item}>
              <div className={styles.itemHeader || classicStyles.itemHeader}>
                <strong>
                  {edu.degree && edu.field 
                    ? `${edu.degree} in ${edu.field}`
                    : edu.degree || edu.field || 'Degree'}
                </strong>
                {(edu.startDate || edu.endDate) && (
                  <span>{edu.startDate} - {edu.endDate}</span>
                )}
              </div>
              {edu.school && (
                <div className={styles.itemSubheader || classicStyles.itemSubheader}>
                  <span>{edu.school}</span>
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && projects.some(proj => proj.name) && (
        <section className={styles.section || classicStyles.section}>
          <h2>Projects</h2>
          {projects.map((proj) => (
            <div key={proj.id} className={styles.item || classicStyles.item}>
              <div className={styles.itemHeader || classicStyles.itemHeader}>
                <strong>{proj.name || 'Project Name'}</strong>
              </div>
              {proj.description && <p>{proj.description}</p>}
              {proj.technologies && proj.technologies.length > 0 && (
                <div className={styles.techStack || classicStyles.techStack}>
                  {proj.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.pill || classicStyles.pill}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {(proj.liveUrl || proj.githubUrl) && (
                <div className={styles.projectLinks || classicStyles.projectLinks}>
                  {proj.liveUrl && (
                    <span className={styles.linkIcon || classicStyles.linkIcon}>
                      🔗 {proj.liveUrl}
                    </span>
                  )}
                  {proj.githubUrl && (
                    <span className={styles.linkIcon || classicStyles.linkIcon}>
                      💻 {proj.githubUrl}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {(skills.technical.length > 0 || skills.soft.length > 0 || skills.tools.length > 0) && (
        <section className={styles.section || classicStyles.section}>
          <h2>Skills</h2>
          {skills.technical.length > 0 && (
            <div className={styles.skillCategory || classicStyles.skillCategory}>
              <strong className={styles.categoryLabel || classicStyles.categoryLabel}>
                Technical Skills:
              </strong>
              <div className={styles.skillPills || classicStyles.skillPills}>
                {skills.technical.map((skill, idx) => (
                  <span key={idx} className={styles.pill || classicStyles.pill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div className={styles.skillCategory || classicStyles.skillCategory}>
              <strong className={styles.categoryLabel || classicStyles.categoryLabel}>
                Soft Skills:
              </strong>
              <div className={styles.skillPills || classicStyles.skillPills}>
                {skills.soft.map((skill, idx) => (
                  <span key={idx} className={styles.pill || classicStyles.pill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          {skills.tools.length > 0 && (
            <div className={styles.skillCategory || classicStyles.skillCategory}>
              <strong className={styles.categoryLabel || classicStyles.categoryLabel}>
                Tools & Technologies:
              </strong>
              <div className={styles.skillPills || classicStyles.skillPills}>
                {skills.tools.map((skill, idx) => (
                  <span key={idx} className={styles.pill || classicStyles.pill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  )
}
