'use client'

import { useResumeStore } from '@/lib/resumeStore'
import BulletGuidance from './BulletGuidance'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
import styles from './ResumeForm.module.css'

export default function ResumeForm() {
  const {
    personalInfo,
    summary,
    education,
    experience,
    links,
    setPersonalInfo,
    setSummary,
    addEducation,
    updateEducation,
    removeEducation,
    addExperience,
    updateExperience,
    removeExperience,
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
            <input
              type="text"
              placeholder="School"
              value={edu.school}
              onChange={(e) => updateEducation(edu.id, { school: e.target.value })}
              className={styles.input}
            />
            <div className={styles.grid}>
              <input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Field of Study"
                value={edu.field}
                onChange={(e) => updateEducation(edu.id, { field: e.target.value })}
                className={styles.input}
              />
            </div>
            <div className={styles.grid}>
              <input
                type="text"
                placeholder="Start Year"
                value={edu.startDate}
                onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
                className={styles.input}
              />
              <input
                type="text"
                placeholder="End Year"
                value={edu.endDate}
                onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
                className={styles.input}
              />
            </div>
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
            <input
              type="text"
              placeholder="Position"
              value={exp.position}
              onChange={(e) => updateExperience(exp.id, { position: e.target.value })}
              className={styles.input}
            />
            <div className={styles.grid}>
              <input
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Location"
                value={exp.location}
                onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                className={styles.input}
              />
            </div>
            <div className={styles.grid}>
              <input
                type="text"
                placeholder="Start Year"
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                className={styles.input}
              />
              <input
                type="text"
                placeholder="End Year (or Present)"
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                className={styles.input}
              />
            </div>
            <textarea
              placeholder="Description (include numbers and metrics for better ATS score)"
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
              className={styles.textarea}
              rows={3}
            />
            <BulletGuidance text={exp.description} />
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
      <ProjectsSection />

      {/* Skills */}
      <SkillsSection />

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
