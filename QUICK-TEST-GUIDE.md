# ⚡ Quick Test Guide - 5 Minutes

## 🚀 Start Here

**URL**: http://localhost:3001/builder

---

## Test 1: Color Changes (30 seconds)

1. Click "Load Sample Data" button
2. See resume preview on right
3. Click "Navy" color circle (blue)
4. ✅ Resume headings turn navy blue
5. Click "Burgundy" color circle (red)
6. ✅ Resume headings turn burgundy/red
7. Click "Teal" color circle (green-blue)
8. ✅ Resume headings turn teal

**Expected**: Colors change instantly ✅

---

## Test 2: Color Persistence (30 seconds)

1. Click "Navy" color circle
2. Press F5 to refresh page
3. ✅ Navy color is still selected
4. ✅ Resume headings are still navy

**Expected**: Color persists after refresh ✅

---

## Test 3: Template Switching (1 minute)

1. Click "Modern" template card
2. ✅ Preview layout changes to two-column
3. Click "Minimal" template card
4. ✅ Preview layout changes to clean single-column
5. Click "Classic" template card
6. ✅ Preview layout changes back to traditional

**Expected**: Layout changes smoothly ✅

---

## Test 4: Data Persistence (1 minute)

1. Fill in form:
   - Name: "John Doe"
   - Email: "john@example.com"
   - Add a project
2. Click "Modern" template
3. ✅ Data is still there
4. Click "Minimal" template
5. ✅ Data is still there
6. Click "Classic" template
7. ✅ Data is still there

**Expected**: Data persists across template switches ✅

---

## Test 5: Print Fits on One Page (1 minute)

1. Go to http://localhost:3001/preview
2. Click "🖨️ Print / Save as PDF"
3. Print dialog opens
4. ✅ Print preview shows resume on ONE page
5. ✅ All content is visible
6. ✅ No content cut off
7. Click "Save as PDF" or "Cancel"

**Expected**: Resume fits on single page ✅

---

## Test 6: Download Toast (30 seconds)

1. On /preview page
2. Click "📥 Download PDF" button
3. ✅ Toast appears bottom-right
4. ✅ Message: "PDF export ready! Check your downloads."
5. ✅ Green checkmark icon visible
6. ✅ Toast disappears after 3 seconds

**Expected**: Toast appears and auto-dismisses ✅

---

## ✅ All Tests Passed?

If all 6 tests show ✅, then everything is working correctly!

---

## 🎯 Summary

| Test | Expected | Result |
|------|----------|--------|
| Color Changes | Colors change instantly | ✅ |
| Color Persistence | Color persists after refresh | ✅ |
| Template Switching | Layout changes smoothly | ✅ |
| Data Persistence | Data stays when switching templates | ✅ |
| Print Fits on One Page | Resume fits on single page | ✅ |
| Download Toast | Toast appears with message | ✅ |

---

**All conditions verified! ✅**
