import { PersonalInfo, Education, Experience, Project, Links, SkillCategories } from './resumeStore'

export interface ATSResult {
  score: number
  suggestions: string[]
  status: 'needs-work' | 'getting-there' | 'strong'
}

const ACTION_VERBS = [
  'built', 'led', 'designed', 'improved', 'created', 'developed', 'implemented',
  'managed', 'optimized', 'automated', 'launched', 'increased', 'reduced',
  'achieved', 'delivered', 'established', 'enhanced', 'expanded', 'facilitated',
  'generated', 'guided', 'initiated', 'innovated', 'integrated', 'introduced',
  'maximized', 'mentored', 'modernized', 'orchestrated', 'pioneered', 'produced',
  'promoted', 'proposed', 'redesigned', 'restructured', 'revamped', 'scaled',
  'spearheaded', 'streamlined', 'strengthened', 'transformed', 'upgraded'
]

function hasActionVerbs(text: string): boolean {
  const lowerText = text.toLowerCase()
  return ACTION_VERBS.some(verb => lowerText.includes(verb))
}

function hasNumbers(text: string): boolean {
  return /\d+[%kK]?|\d+\.\d+/.test(text)
}

export function calculateATSScore(
  personalInfo: PersonalInfo,
  summary: string,
  education: Education[],
  experience: Experience[],
  projects: Project[],
  skills: SkillCategories,
  links: Links
): ATSResult {
  let score = 0
  const suggestions: string[] = []

  // +10 if name provided
  if (personalInfo.name && personalInfo.name.trim()) {
    score += 10
  } else {
    suggestions.push('Add your full name (+10 points)')
  }

  // +10 if email provided
  if (personalInfo.email && personalInfo.email.trim()) {
    score += 10
  } else {
    suggestions.push('Add your email address (+10 points)')
  }

  // +5 if phone provided
  if (personalInfo.phone && personalInfo.phone.trim()) {
    score += 5
  } else {
    suggestions.push('Add your phone number (+5 points)')
  }

  // +10 if summary > 50 chars
  if (summary && summary.trim().length > 50) {
    score += 10
  } else {
    suggestions.push('Write a professional summary (50+ characters) (+10 points)')
  }

  // +10 if summary contains action verbs
  if (summary && hasActionVerbs(summary)) {
    score += 10
  } else if (summary && summary.trim().length > 0) {
    suggestions.push('Use action verbs in your summary (+10 points)')
  }

  // +15 if at least 1 experience entry with bullets
  const hasExperienceWithBullets = experience.some(exp => 
    exp.position && exp.company && exp.description && exp.description.trim()
  )
  if (hasExperienceWithBullets) {
    score += 15
  } else {
    suggestions.push('Add work experience with descriptions (+15 points)')
  }

  // +10 if at least 1 education entry
  const hasEducation = education.some(edu => edu.school && edu.degree)
  if (hasEducation) {
    score += 10
  } else {
    suggestions.push('Add your education background (+10 points)')
  }

  // +10 if at least 5 skills added
  const totalSkills = (skills?.technical?.length || 0) + (skills?.soft?.length || 0) + (skills?.tools?.length || 0)
  if (totalSkills >= 5) {
    score += 10
  } else {
    suggestions.push(`Add more skills (need ${5 - totalSkills} more) (+10 points)`)
  }

  // +10 if at least 1 project added
  const hasProjects = projects.some(proj => proj.name && proj.name.trim())
  if (hasProjects) {
    score += 10
  } else {
    suggestions.push('Add at least 1 project (+10 points)')
  }

  // +5 if LinkedIn provided
  if (links.linkedin && links.linkedin.trim()) {
    score += 5
  } else {
    suggestions.push('Add your LinkedIn profile (+5 points)')
  }

  // +5 if GitHub provided
  if (links.github && links.github.trim()) {
    score += 5
  } else {
    suggestions.push('Add your GitHub profile (+5 points)')
  }

  // Cap at 100
  score = Math.min(score, 100)

  // Determine status
  let status: 'needs-work' | 'getting-there' | 'strong'
  if (score <= 40) {
    status = 'needs-work'
  } else if (score <= 70) {
    status = 'getting-there'
  } else {
    status = 'strong'
  }

  // Return top 3 suggestions
  return {
    score,
    suggestions: suggestions.slice(0, 3),
    status
  }
}
