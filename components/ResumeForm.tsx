'use client'

import { useResumeStore } from '@/lib/resumeStore'
import styles from './ResumeForm.module.css'

export default function ResumeForm() {
  const {
    personalInfo,
    summary,
    education,
    experience,
    projects,
    skills,
    links,
    setPersonalInfo,
    setSummary,
    addEducation,
    removeEducation,
    addExperience,
    removeExperience,
    addProject,
    removeProject,
    setSkills,
    setLinks
  } = useResumeStore()

  return (
    <div className={styles.form}>
      {/* Personal Info */}
      <section className={styles.section}>
        <h2>Personal Information</h2>
        <div className={styles.grid}>
          <input
            type="text"
            placeholder="Full Name"
            value={personalInfo.name}
            onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={personalInfo.email}
            onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
            className={styles.input}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={personalInfo.phone}
            onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Location"
            value={personalInfo.location}
            onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
            className={styles.input}
          />
        </div>
      </section>

      {/* Summary */}
      <section className={styles.section}>
        <h2>Professional Summary</h2>
        <textarea
          placeholder="Brief overview of your experience and skills..."
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className={styles.textarea}
          rows={4}
        />
      </section>

      {/* Education */}
      <section className={styles.section}>
        <h2>Education</h2>
        {education.map((edu) => (
          <div key={edu.id} className={styles.entry}>
            <button
              onClick={() => removeEducation(edu.id)}
              className={styles.btnRemove}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={() => addEducation({
            id: Date.now().toString(),
            school: '',
            degree: '',
            field: '',
            startDate: '',
            endDate: ''
          })}
          className={styles.btnAdd}
        >
          + Add Education
        </button>
      </section>

      {/* Experience */}
      <section className={styles.section}>
        <h2>Work Experience</h2>
        {experience.map((exp) => (
          <div key={exp.id} className={styles.entry}>
            <button
              onClick={() => removeExperience(exp.id)}
              className={styles.btnRemove}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={() => addExperience({
            id: Date.now().toString(),
            company: '',
            position: '',
            location: '',
            startDate: '',
            endDate: '',
            description: ''
          })}
          className={styles.btnAdd}
        >
          + Add Experience
        </button>
      </section>

      {/* Projects */}
      <section className={styles.section}>
        <h2>Projects</h2>
        {projects.map((proj) => (
          <div key={proj.id} className={styles.entry}>
            <button
              onClick={() => removeProject(proj.id)}
              className={styles.btnRemove}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={() => addProject({
            id: Date.now().toString(),
            name: '',
            description: '',
            technologies: '',
            link: ''
          })}
          className={styles.btnAdd}
        >
          + Add Project
        </button>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h2>Skills</h2>
        <input
          type="text"
          placeholder="JavaScript, Python, React, Node.js..."
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className={styles.input}
        />
        <p className={styles.hint}>Separate skills with commas</p>
      </section>

      {/* Links */}
      <section className={styles.section}>
        <h2>Links</h2>
        <input
          type="text"
          placeholder="GitHub URL"
          value={links.github}
          onChange={(e) => setLinks({ ...links, github: e.target.value })}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="LinkedIn URL"
          value={links.linkedin}
          onChange={(e) => setLinks({ ...links, linkedin: e.target.value })}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Portfolio URL"
          value={links.portfolio}
          onChange={(e) => setLinks({ ...links, portfolio: e.target.value })}
          className={styles.input}
        />
      </section>
    </div>
  )
}
