# AI Resume Builder - KodNest Premium Build System

Project 3 of the Build Track - A structured 8-step journey to build an AI-powered resume builder.

## Design System

This project follows the KodNest Premium design guidelines:

- **Background**: Off-white (#F7F6F3)
- **Accent**: Deep red (#8B0000)
- **Typography**: Crimson Text (serif) for headings, Inter (sans-serif) for body
- **Spacing Scale**: 8/16/24/40/64px
- **Color Palette**: Maximum 4 colors (background, accent, text primary, text secondary)

## Project Structure

```
/rb/01-problem      - Problem Definition
/rb/02-market       - Market Research
/rb/03-architecture - System Architecture
/rb/04-hld          - High Level Design
/rb/05-lld          - Low Level Design
/rb/06-build        - Build Implementation
/rb/07-test         - Testing & QA
/rb/08-ship         - Ship & Deploy
/rb/proof           - Final Submission
```

## Features

- **Gated Navigation**: Each step must be completed before proceeding
- **Artifact System**: Upload proof of work for each step
- **Build Panel**: Copy content to Lovable for implementation
- **Premium Layout**: 70/30 split with workspace and build panel
- **Progress Tracking**: Visual step completion status

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Workflow

1. Read the step content in the main workspace (70%)
2. Copy the artifact content from the Build Panel (30%)
3. Paste into Lovable and build the feature
4. Upload a screenshot or artifact
5. Proceed to the next step (unlocked after upload)

## Final Submission

Complete all 8 steps, then visit `/rb/proof` to:
- Review step completion status
- Add Lovable, GitHub, and deployment links
- Copy final submission text

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Zustand (State Management)
- CSS Modules

## Design Verification Checklist

- [ ] Background is off-white (#F7F6F3)
- [ ] Headings use Crimson Text serif font
- [ ] Accent color is deep red (#8B0000)
- [ ] Spacing follows 8/16/24/40/64px scale
- [ ] Maximum 4 colors used throughout
