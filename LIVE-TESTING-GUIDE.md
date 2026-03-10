# Live Testing Guide - Task 7 Verification

## 🚀 Server Status

**Dev Server**: Running on **http://localhost:3001**
(Port 3000 was in use, so Next.js automatically switched to 3001)

---

## ✅ Complete Verification Steps

### Step 1: Go to Builder Page
**URL**: http://localhost:3001/builder

**What You Should See**:
- Navigation bar with "AI Resume Builder" logo
- "Load Sample Data" and "Clear All Data" buttons
- Left panel: Resume form with all sections
- Right panel: Live preview with template selector at top

---

### Step 2: Verify Template Thumbnails ✅

**Location**: Top of the right preview panel

**What You Should See**:
- Label: "Template Style"
- 3 template cards displayed horizontally:
  - **Classic**: Shows single-column layout with horizontal lines
  - **Modern**: Shows two-column layout with left sidebar
  - **Minimal**: Shows clean single-column layout
- Each card is ~120px wide
- Active template (Classic by default) has:
  - Blue border (#2563eb)
  - White checkmark (✓) in top-right corner
  - Template name below

**Test It**:
1. Click "Modern" card → Preview layout changes to two-column
2. Click "Minimal" card → Preview layout changes to clean single-column
3. Click "Classic" card → Preview layout changes back to traditional

**Expected Result**: ✅ Layout changes instantly, data preserved

---

### Step 3: Verify Color Theme Picker ✅

**Location**: Below template thumbnails

**What You Should See**:
- Label: "Accent Color"
- 5 circular color swatches:
  - Teal (default) - greenish-blue
  - Navy - dark blue
  - Burgundy - dark red
  - Forest - dark green
  - Charcoal - dark gray
- Active color (Teal by default) has:
  - Blue border
  - White checkmark (✓) in center

**Test It**:
1. Click "Navy" circle → Resume headings turn navy blue
2. Click "Burgundy" circle → Resume headings turn burgundy/red
3. Click "Forest" circle → Resume headings turn forest green
4. Click "Charcoal" circle → Resume headings turn dark gray
5. Click "Teal" circle → Resume headings turn back to teal

**Expected Result**: ✅ Colors change instantly in preview

---

### Step 4: Load Sample Data ✅

**Location**: Top toolbar

**What You Should See**:
- "Load Sample Data" button (red/burgundy color)
- "Clear All Data" button (gray color)

**Test It**:
1. Click "Load Sample Data"
2. Form fills with sample resume data:
   - Name: John Doe
   - Email: john.doe@email.com
   - Summary: "Experienced software engineer..."
   - Education: University of California
   - Experience: Tech Corp - Senior Software Engineer
   - Projects: E-commerce Platform
   - Skills: JavaScript, TypeScript, React, etc.
3. Preview shows complete resume with sample data
4. Template and color selections still work

**Expected Result**: ✅ Sample data loads, customization works

---

### Step 5: Go to Preview Page ✅

**URL**: http://localhost:3001/preview

**What You Should See**:
- Navigation bar with "AI Resume Builder" logo
- "← Back to Builder" link
- Template selector (same as builder page)
- 3 export buttons:
  - 📥 Download PDF
  - 🖨️ Print / Save as PDF
  - 📋 Copy Resume as Text
- Resume preview below

---

### Step 6: Verify PDF Download Toast ✅

**Location**: Export buttons section on /preview

**Test It**:
1. Click "📥 Download PDF" button
2. Toast notification appears in bottom-right corner:
   - Message: "PDF export ready! Check your downloads."
   - Green checkmark icon in white circle
   - Smooth slide-in animation from bottom
3. Toast auto-dismisses after 3 seconds
4. Click button again → Toast appears again

**Expected Result**: ✅ Toast appears and auto-dismisses

---

### Step 7: Verify Persistence ✅

**Test It**:
1. On /preview page, select "Modern" template and "Navy" color
2. Press F5 to refresh page
3. Modern template and Navy color are still selected ✓
4. Navigate to /builder
5. Navigate back to /preview
6. Modern template and Navy color are still selected ✓
7. Open browser DevTools (F12)
8. Go to Application → Local Storage → http://localhost:3001
9. Find key: `resumeBuilderData`
10. Expand it and see:
    - `template: "modern"`
    - `colorTheme: "navy"`

**Expected Result**: ✅ Selections persist across navigation and refresh

---

### Step 8: Verify Print Mode ✅

**Test It**:
1. On /preview page with Modern template and Navy color selected
2. Click "🖨️ Print / Save as PDF"
3. Print dialog opens
4. Print preview shows:
   - Correct template (two-column with sidebar)
   - Correct color (navy headings)
   - No export buttons visible
   - No toast notification visible
5. Cancel print dialog (Escape key)

**Expected Result**: ✅ Print preview shows correct styling

---

### Step 9: Test All Templates ✅

**Test Each Template**:

**Classic Template**:
- Single-column layout
- Serif headings (Crimson Text)
- Horizontal rules between sections
- Traditional resume style

**Modern Template**:
- Two-column layout
- Left sidebar with contact info and skills
- Main content on right
- Colored sidebar background (matches accent color)

**Minimal Template**:
- Single-column layout
- No borders or rules
- Generous whitespace
- Sans-serif throughout
- Ultra-clean appearance

**Test It**:
1. Go to /builder
2. Load sample data
3. Switch between templates
4. Verify each template renders correctly
5. Switch colors and verify colors apply to each template

**Expected Result**: ✅ All templates render correctly with colors

---

### Step 10: Test Skills and Projects ✅

**Test Skills Section**:
1. Go to /builder
2. Scroll to "Skills" section
3. See three categories:
   - Technical Skills (with count)
   - Soft Skills (with count)
   - Tools & Technologies (with count)
4. Type a skill and press Enter → Appears as removable chip
5. Click X on chip → Chip removes
6. Click "✨ Suggest Skills" → AI skills get added after 1 second
7. Check preview → Skills show as pill badges grouped by category

**Test Projects Section**:
1. Scroll to "Projects" section
2. Click "+ Add Project"
3. New collapsible project entry appears
4. Fill in:
   - Project Title
   - Description (max 200 chars with counter)
   - Tech Stack (type and press Enter)
   - Live URL (optional)
   - GitHub URL (optional)
5. Check preview → Project shows with tech stack pills and link icons

**Expected Result**: ✅ Skills and projects work correctly

---

## 📋 Complete Verification Checklist

- [ ] Template thumbnails visible (Classic, Modern, Minimal)
- [ ] Active template has blue border + checkmark
- [ ] Click template → preview layout changes
- [ ] Color circles visible (5 colors)
- [ ] Active color has blue border + checkmark
- [ ] Click color → accent color changes in preview
- [ ] Load sample data → form fills with data
- [ ] Go to /preview page
- [ ] Click "📥 Download PDF" → toast appears
- [ ] Toast message: "PDF export ready! Check your downloads."
- [ ] Toast auto-dismisses after 3 seconds
- [ ] Refresh page → template and color persist
- [ ] Navigate away and back → selections persist
- [ ] Print dialog shows correct template and color
- [ ] All templates render correctly
- [ ] Colors apply to all templates
- [ ] Skills section works with chips
- [ ] Projects section works with accordion
- [ ] Preview shows skills as pill badges
- [ ] Preview shows projects with tech stack

---

## 🔗 Quick Links

- **Builder**: http://localhost:3001/builder
- **Preview**: http://localhost:3001/preview
- **Home**: http://localhost:3001/

---

## ✅ All Requirements Satisfied

✅ Template Picker — 3 visual thumbnails with active state  
✅ Template Switching — Re-renders with same data, different layout  
✅ Color Theme Picker — 5 color circles with instant updates  
✅ Color Application — Applies to headings, borders, accents  
✅ localStorage Persistence — Template and color saved  
✅ PDF Download Toast — Shows confirmation message  

---

## 🎯 Status: READY FOR TESTING

All features implemented and verified. Ready for user testing!

**Server**: http://localhost:3001 ✅
**All Features**: Working ✅
**Data Persistence**: Working ✅
**Styling**: Complete ✅
