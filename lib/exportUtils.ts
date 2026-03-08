import { PersonalInfo, Education, Experience, Project, Links, SkillCategories } from './resumeStore'

export function generatePlainTextResume(
  personalInfo: PersonalInfo,
  summary: string,
  education: Education[],
  experience: Experience[],
  projects: Project[],
  skills: SkillCategories,
  links: Links
): string {
  let text = ''

  // Name and Contact
  if (personalInfo.name) {
    text += `${personalInfo.name}\n`
  }
  
  const contactParts = [
    personalInfo.email,
    personalInfo.phone,
    personalInfo.location
  ].filter(Boolean)
  
  if (contactParts.length > 0) {
    text += `${contactParts.join(' | ')}\n`
  }

  // Links
  const linkParts = [
    links.github,
    links.linkedin,
    links.portfolio
  ].filter(Boolean)
  
  if (linkParts.length > 0) {
    text += `${linkParts.join(' | ')}\n`
  }

  text += '\n'

  // Summary
  if (summary) {
    text += 'SUMMARY\n'
    text += `${summary}\n\n`
  }

  // Experience
  if (experience.length > 0 && experience.some(exp => exp.position || exp.company)) {
    text += 'EXPERIENCE\n'
    experience.forEach(exp => {
      if (exp.position || exp.company) {
        text += `${exp.position || 'Position'}`
        if (exp.startDate || exp.endDate) {
          text += ` | ${exp.startDate} - ${exp.endDate || 'Present'}`
        }
        text += '\n'
        
        if (exp.company || exp.location) {
          const parts = [exp.company, exp.location].filter(Boolean)
          text += `${parts.join(', ')}\n`
        }
        
        if (exp.description) {
          text += `${exp.description}\n`
        }
        text += '\n'
      }
    })
  }

  // Education
  if (education.length > 0 && education.some(edu => edu.degree || edu.school)) {
    text += 'EDUCATION\n'
    education.forEach(edu => {
      if (edu.degree || edu.school) {
        if (edu.degree && edu.field) {
          text += `${edu.degree} in ${edu.field}`
        } else {
          text += `${edu.degree || edu.field || 'Degree'}`
        }
        
        if (edu.startDate || edu.endDate) {
          text += ` | ${edu.startDate} - ${edu.endDate}`
        }
        text += '\n'
        
        if (edu.school) {
          text += `${edu.school}\n`
        }
        text += '\n'
      }
    })
  }

  // Projects
  if (projects.length > 0 && projects.some(proj => proj.name)) {
    text += 'PROJECTS\n'
    projects.forEach(proj => {
      if (proj.name) {
        text += `${proj.name}`
        if (proj.liveUrl || proj.githubUrl) {
          const links = [proj.liveUrl, proj.githubUrl].filter(Boolean)
          text += ` | ${links.join(' | ')}`
        }
        text += '\n'
        
        if (proj.description) {
          text += `${proj.description}\n`
        }
        
        if (proj.technologies && proj.technologies.length > 0) {
          text += `Technologies: ${proj.technologies.join(', ')}\n`
        }
        text += '\n'
      }
    })
  }

  // Skills
  const hasSkills = skills.technical.length > 0 || skills.soft.length > 0 || skills.tools.length > 0
  if (hasSkills) {
    text += 'SKILLS\n'
    if (skills.technical.length > 0) {
      text += `Technical Skills: ${skills.technical.join(', ')}\n`
    }
    if (skills.soft.length > 0) {
      text += `Soft Skills: ${skills.soft.join(', ')}\n`
    }
    if (skills.tools.length > 0) {
      text += `Tools & Technologies: ${skills.tools.join(', ')}\n`
    }
    text += '\n'
  }

  return text.trim()
}

export function validateResumeCompleteness(
  personalInfo: PersonalInfo,
  experience: Experience[],
  projects: Project[]
): { isComplete: boolean; warnings: string[] } {
  const warnings: string[] = []

  if (!personalInfo.name || !personalInfo.name.trim()) {
    warnings.push('Missing name')
  }

  const hasExperience = experience.length > 0 && experience.some(exp => exp.position || exp.company)
  const hasProjects = projects.length > 0 && projects.some(proj => proj.name)

  if (!hasExperience && !hasProjects) {
    warnings.push('Missing experience or projects')
  }

  return {
    isComplete: warnings.length === 0,
    warnings
  }
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy:', err)
    return false
  }
}

export function triggerPrint(): void {
  window.print()
}
