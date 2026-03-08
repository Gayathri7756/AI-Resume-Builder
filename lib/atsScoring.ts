import { PersonalInfo, Education, Experience, Project, Links } from './resumeStore'

export interface ATSResult {
  score: number
  suggestions: string[]
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

function hasNumbers(text: string): boolean {
  return /\d+[%kK]?|\d+\.\d+/.test(text)
}

export function calculateATSScore(
  summary: string,
  education: Education[],
  experience: Experience[],
  projects: Project[],
  skills: string,
  links: Links
): ATSResult {
  let score = 0
  const suggestions: string[] = []

  // Summary: 40-120 words (+15 points)
  const summaryWords = countWords(summary)
  if (summaryWords >= 40 && summaryWords <= 120) {
    score += 15
  } else if (summaryWords < 40) {
    suggestions.push('Write a stronger summary (40–120 words).')
  } else if (summaryWords > 120) {
    suggestions.push('Shorten your summary to 40–120 words.')
  }

  // Projects: at least 2 (+15 points)
  if (projects.length >= 2) {
    score += 15
  } else {
    suggestions.push('Add at least 2 projects.')
  }

  // Experience: at least 1 entry (+15 points)
  if (experience.length >= 1) {
    score += 15
  } else {
    suggestions.push('Add at least 1 work experience entry.')
  }

  // Skills: at least 8 items (+15 points)
  const skillsList = skills.split(',').map(s => s.trim()).filter(Boolean)
  if (skillsList.length >= 8) {
    score += 15
  } else {
    suggestions.push('Add more skills (target 8+).')
  }

  // Links: GitHub or LinkedIn (+10 points)
  if (links.github || links.linkedin) {
    score += 10
  } else {
    suggestions.push('Add your GitHub or LinkedIn profile.')
  }

  // Measurable impact: numbers in experience/projects (+15 points)
  const hasImpact = 
    experience.some(exp => hasNumbers(exp.description)) ||
    projects.some(proj => hasNumbers(proj.description))
  
  if (hasImpact) {
    score += 15
  } else {
    suggestions.push('Add measurable impact (numbers) in bullets.')
  }

  // Education: complete fields (+15 points)
  const hasCompleteEducation = education.some(edu => 
    edu.school && edu.degree && edu.field && edu.startDate && edu.endDate
  )
  
  if (hasCompleteEducation) {
    score += 15
  } else if (education.length > 0) {
    suggestions.push('Complete all education fields.')
  } else {
    suggestions.push('Add your education background.')
  }

  // Cap at 100
  score = Math.min(score, 100)

  // Return top 3 suggestions
  return {
    score,
    suggestions: suggestions.slice(0, 3)
  }
}
