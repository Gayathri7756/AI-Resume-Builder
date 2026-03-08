# Quick Start Guide

Get the AI Resume Builder running in 3 steps.

## 1. Install Dependencies

```bash
npm install
```

This installs:
- Next.js 14
- React 18
- TypeScript
- Zustand (state management)

## 2. Run Development Server

```bash
npm run dev
```

The app will start at [http://localhost:3000](http://localhost:3000)

## 3. Start Building

You'll be automatically redirected to `/rb/01-problem` - the first step.

---

## How It Works

### The 8-Step Journey

1. **Problem Definition** - Define what you're building
2. **Market Research** - Analyze competitors
3. **System Architecture** - Plan your tech stack
4. **High Level Design** - Map user flows
5. **Low Level Design** - Detail components
6. **Build Implementation** - Code the features
7. **Testing & QA** - Verify everything works
8. **Ship & Deploy** - Launch to production

### The Workflow

For each step:

1. **Read** the content in the main workspace (left side, 70%)
2. **Copy** the artifact from the Build Panel (right side, 30%)
3. **Build** in Lovable using the copied content
4. **Upload** a screenshot or proof of completion
5. **Proceed** to the next step (unlocked after upload)

### Gating System

- You cannot skip steps
- Each step requires an artifact upload
- The Next button is disabled until you upload
- If you try to jump ahead, you'll be redirected back

### Final Submission

After completing all 8 steps:

1. Visit `/rb/proof`
2. Verify all steps show ✓ complete
3. Add your Lovable project link
4. Add your GitHub repository link
5. Add your live deployment link
6. Click "Copy Final Submission"
7. Submit to your instructor

---

## Design System

The project follows strict design guidelines:

- **Background**: Off-white (#F7F6F3)
- **Accent**: Deep red (#8B0000)
- **Fonts**: Crimson Text (headings), Inter (body)
- **Spacing**: 8/16/24/40/64px scale
- **Colors**: Maximum 4 colors

---

## Troubleshooting

### Port Already in Use

```bash
# Kill the process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### State Not Persisting

The app uses Zustand with localStorage. If state isn't persisting:

1. Check browser console for errors
2. Clear localStorage: `localStorage.clear()`
3. Refresh the page

### Navigation Issues

If you're stuck or can't proceed:

1. Check if you uploaded an artifact for the current step
2. Look for the green "Artifact Uploaded" badge
3. The Next button should be enabled
4. If not, try uploading again

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run dev
```

---

## Project Structure

```
app/rb/
├── 01-problem/      → Step 1
├── 02-market/       → Step 2
├── 03-architecture/ → Step 3
├── 04-hld/          → Step 4
├── 05-lld/          → Step 5
├── 06-build/        → Step 6
├── 07-test/         → Step 7
├── 08-ship/         → Step 8
└── proof/           → Final submission
```

---

## Next Steps

1. Complete all 8 steps
2. Build the actual AI Resume Builder in Lovable
3. Deploy to Vercel or Netlify
4. Submit your proof page

Good luck! 🚀
