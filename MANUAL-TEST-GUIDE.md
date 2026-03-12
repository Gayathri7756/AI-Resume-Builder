# Manual Testing Guide - Task 8: ATS Resume Scoring

## Quick Start
1. Open browser: http://localhost:3003/builder
2. Follow tests below
3. Report results

---

## VERIFICATION TESTS (4/4)

### ✅ Test 1: Does the resume preview show an ATS score (0–100)?

**Steps**:
1. Go to http://localhost:3003/builder
2. Look at the right sidebar under "Live Preview"
3. You should see a section titled "ATS Readiness Score"
4. There should be a circular progress indicator with a number (0-100)

**Expected Result**: 
- Circular progress indicator visible
- Score displays as number (starts at 0)
- Status label shows "Needs Work" (red)

**Result**: ☐ Pass ☐ Fail

---

### ✅ Test 2: Does the score update as you add/remove content?

**Steps**:
1. Start with empty form (score should be 0)
2. Type your name in "Full Name" field
3. Watch the ATS score - should increase to 10
4. Type your email
5. Watch the ATS score - should increase to 20
6. Type a summary (50+ characters)
7. Watch the ATS score - should increase to 30
8. Delete the name
9. Watch the ATS score - should decrease to 20

**Expected Result**:
- Score increases/decreases in real-time
- Each field adds correct points:
  - Name: +10
  - Email: +10
  - Phone: +5
  - Summary (50+ chars): +10
  - Summary with action verbs: +10

**Result**: ☐ Pass ☐ Fail

---

### ✅ Test 3: Do all form sections (Personal, Summary, Experience, Education, Skills, Projects) save and render?

**Steps**:
1. Fill in all sections:
   - Personal: Name, Email, Phone, Location
   - Summary: Write a professional summary
   - Education: Add a degree
   - Experience: Add a job with description
   - Skills: Add 5+ skills
   - Projects: Add a project
   - Links: Add GitHub/LinkedIn

2. Refresh the page (Ctrl+R)
3. Check if all data is still there

**Expected Result**:
- All data persists after refresh
- No data is lost
- Live preview shows all content

**Result**: ☐ Pass ☐ Fail

---

### ✅ Test 4: Are there zero console errors on all pages?

**Steps**:
1. Open DevTools (F12)
2. Go to Console tab
3. Navigate to each page:
   - http://localhost:3003/ (home)
   - http://localhost:3003/builder (builder)
   - http://localhost:3003/preview (preview)
   - http://localhost:3003/proof (proof)
4. Check for red error messages

**Expected Result**:
- No red error messages in console
- No warnings about missing data
- Clean console output

**Result**: ☐ Pass ☐ Fail

---

## BREAK TESTS (2/2)

### ✅ Break Test 1: Template switching preserves data

**Steps**:
1. Fill resume with complete data
2. Click "Classic" template thumbnail
3. Verify preview layout changes to classic
4. Click "Modern" template thumbnail
5. Verify preview layout changes to modern (sidebar)
6. Click "Minimal" template thumbnail
7. Verify preview layout changes to minimal
8. Check if all data is still there

**Expected Result**:
- All data persists across template switches
- Only layout changes, not content
- No data loss

**Result**: ☐ Pass ☐ Fail

---

### ✅ Break Test 2: Color theme persists after refresh

**Steps**:
1. Click the Burgundy color circle (5th circle)
2. Verify the preview accent color changes to burgundy
3. Refresh the page (Ctrl+R)
4. Check if Burgundy is still selected
5. Verify the accent color is still burgundy

**Expected Result**:
- Color selection persists after refresh
- Burgundy circle shows as selected (blue border + checkmark)
- Preview accent color remains burgundy

**Result**: ☐ Pass ☐ Fail

---

## Summary

### Verification Tests: ___/4 Passed
### Break Tests: ___/2 Passed
### Total: ___/6 Passed

---

## Additional Checks

### ATS Score Calculation
Fill in the following and verify the score:
- Name: +10 points
- Email: +10 points
- Phone: +5 points
- Summary (50+ chars): +10 points
- Summary with action verbs (built, led, designed, etc.): +10 points
- 1+ Experience with description: +15 points
- 1+ Education: +10 points
- 5+ Skills: +10 points
- 1+ Project: +10 points
- LinkedIn: +5 points
- GitHub: +5 points

**Max Score**: 100 points

**Status Levels**:
- 0-40: Red "Needs Work"
- 41-70: Amber "Getting There"
- 71-100: Green "Strong Resume"

---

## Notes
- Server runs on http://localhost:3003
- All data saves to localStorage automatically
- No manual save button needed
- Changes appear instantly in preview
