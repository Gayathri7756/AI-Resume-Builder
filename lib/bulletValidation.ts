const ACTION_VERBS = [
  'built', 'developed', 'designed', 'implemented', 'led', 'improved',
  'created', 'optimized', 'automated', 'managed', 'launched', 'delivered',
  'achieved', 'increased', 'reduced', 'established', 'coordinated',
  'executed', 'streamlined', 'enhanced', 'architected', 'spearheaded',
  'initiated', 'drove', 'collaborated', 'analyzed', 'resolved'
]

export function startsWithActionVerb(text: string): boolean {
  if (!text || !text.trim()) return true // Don't validate empty
  const firstWord = text.trim().split(/\s+/)[0].toLowerCase().replace(/[^a-z]/g, '')
  return ACTION_VERBS.includes(firstWord)
}

export function hasNumbers(text: string): boolean {
  if (!text || !text.trim()) return true // Don't validate empty
  return /\d+[%kK]?|\d+\.\d+/.test(text)
}

export interface BulletSuggestion {
  needsActionVerb: boolean
  needsNumbers: boolean
}

export function validateBullet(text: string): BulletSuggestion {
  return {
    needsActionVerb: !startsWithActionVerb(text),
    needsNumbers: !hasNumbers(text)
  }
}
