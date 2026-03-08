# Design Verification Checklist

Use this checklist to verify the Premium Build System design is correctly implemented.

## ✓ Color Verification

- [ ] Background color is off-white (#F7F6F3), NOT pure white
- [ ] Accent color is deep red (#8B0000)
- [ ] Only 4 colors used: #F7F6F3, #FFFFFF, #8B0000, #1A1A1A (+ #666666 for secondary text)
- [ ] Accent color used sparingly (buttons, highlights, headings)

## ✓ Typography Verification

- [ ] Headings use serif font (Crimson Text)
- [ ] Body text uses sans-serif font (Inter)
- [ ] Generous spacing between headings and content
- [ ] Letter spacing on headings (0.02em)
- [ ] Uppercase labels have letter spacing (0.05em)

## ✓ Spacing Verification

- [ ] All spacing uses the scale: 8px, 16px, 24px, 40px, 64px
- [ ] No arbitrary spacing values
- [ ] Consistent padding in components
- [ ] Generous whitespace between sections

## ✓ Layout Verification

- [ ] Top bar is 64px height
- [ ] Main workspace is 70% width
- [ ] Build panel is 30% width
- [ ] Footer is 64px height
- [ ] Context header has proper padding (40px)

## ✓ Component Verification

- [ ] Top bar shows: Project name | Step X of 8 | Status badge
- [ ] Build panel has: Textarea | Copy button | Lovable link | Upload
- [ ] Footer has: Previous | Step X/8 | Next
- [ ] Next button disabled until artifact uploaded

## ✓ Functionality Verification

- [ ] Cannot skip steps (gating works)
- [ ] Artifact upload enables Next button
- [ ] Navigation redirects if previous step incomplete
- [ ] Zustand store persists in localStorage
- [ ] Copy button works and shows feedback
- [ ] All 8 steps accessible in sequence
- [ ] Proof page shows completion status

## ✓ Responsive Design

- [ ] Layout works on desktop (1920px)
- [ ] Layout works on laptop (1440px)
- [ ] Layout works on tablet (768px)
- [ ] Mobile view adjusts appropriately

## ✓ User Experience

- [ ] Clear instructions on each step
- [ ] Visual feedback on interactions
- [ ] Loading states where appropriate
- [ ] Error states handled gracefully
- [ ] Success states clearly indicated

## Testing Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Manual Testing Flow

1. Start at `/rb/01-problem`
2. Try to navigate to step 2 without uploading - should be blocked
3. Upload an artifact
4. Next button should enable
5. Navigate to step 2
6. Repeat for all 8 steps
7. Visit `/rb/proof` and verify all steps show as complete
8. Add all three links (Lovable, GitHub, Deploy)
9. Copy final submission
10. Verify submission text includes all information

## Design System Compliance

Run through each page and verify:
- Background is #F7F6F3 (use browser DevTools color picker)
- Headings are Crimson Text (check computed styles)
- Accent is #8B0000 (check buttons and highlights)
- Spacing matches scale (measure with DevTools)
- Maximum 4 colors used (audit color usage)
