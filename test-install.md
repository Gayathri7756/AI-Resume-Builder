# Installation Test

Follow these steps to verify the project is working correctly.

## Step 1: Install Dependencies

```bash
npm install
```

Expected output:
- No errors
- Packages installed: next, react, react-dom, zustand, typescript

## Step 2: Start Development Server

```bash
npm run dev
```

Expected output:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in Xms
```

## Step 3: Test Routes

Open your browser and test each route:

### ✓ Home Page
- URL: `http://localhost:3000`
- Expected: Redirects to `/rb/01-problem`

### ✓ Step 1 - Problem
- URL: `http://localhost:3000/rb/01-problem`
- Expected: 
  - Top bar shows "AI Resume Builder"
  - Center shows "Project 3 — Step 1 of 8"
  - Main content shows "Define the Problem"
  - Build panel on right with textarea
  - Next button is DISABLED

### ✓ Upload Test
- Click "Add Screenshot" in Build Panel
- Select any image file
- Expected:
  - Button changes to "✓ It Worked"
  - Green badge shows "Artifact Uploaded"
  - Next button becomes ENABLED

### ✓ Navigation Test
- Click Next button
- Expected: Navigate to `/rb/02-market`
- Try clicking browser back
- Try manually going to `/rb/03-architecture`
- Expected: Redirected back to `/rb/02-market` (gating works)

### ✓ Step 2 - Market
- Upload artifact
- Click Next
- Expected: Navigate to `/rb/03-architecture`

### ✓ Complete All Steps
- Continue through steps 3-8
- Upload artifact at each step
- Verify Next button enables after upload

### ✓ Proof Page
- URL: `http://localhost:3000/rb/proof`
- Expected:
  - All 8 steps show green checkmarks
  - Input fields for 3 links
  - Copy button is DISABLED until links added
  - Add all 3 links
  - Copy button becomes ENABLED
  - Click copy and verify clipboard

## Step 4: Design Verification

Open DevTools (F12) and verify:

### Colors
- Body background: `#F7F6F3` (off-white)
- Accent buttons: `#8B0000` (deep red)
- Text: `#1A1A1A` (dark gray)

### Typography
- Headings: `Crimson Text, serif`
- Body: `Inter, sans-serif`

### Spacing
- Check padding values: 8px, 16px, 24px, 40px, or 64px
- No arbitrary values like 15px or 37px

### Layout
- Top bar height: 64px
- Footer height: 64px
- Workspace width: 70%
- Build panel width: 30%

## Step 5: State Persistence

1. Upload artifact on Step 1
2. Close browser tab
3. Reopen `http://localhost:3000/rb/01-problem`
4. Expected: Artifact still shows as uploaded (green badge)

This verifies Zustand + localStorage is working.

## Step 6: Build for Production

```bash
npm run build
```

Expected output:
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

No errors should appear.

## Common Issues

### Issue: Port 3000 in use
**Solution**: 
```bash
npx kill-port 3000
# or
npm run dev -- -p 3001
```

### Issue: Module not found
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: State not persisting
**Solution**:
```bash
# Open browser console
localStorage.clear()
# Refresh page
```

### Issue: TypeScript errors
**Solution**:
```bash
rm -rf .next
npm run dev
```

## Success Checklist

- [ ] npm install completes without errors
- [ ] npm run dev starts server
- [ ] Home redirects to Step 1
- [ ] All 8 step routes load
- [ ] Upload enables Next button
- [ ] Gating prevents skipping
- [ ] Proof page shows completion
- [ ] State persists after refresh
- [ ] npm run build succeeds
- [ ] Design matches specifications

If all items are checked, the installation is successful! ✅
