# AI Resume Builder - Project Structure

## Route System

All routes follow the `/rb/` prefix pattern:

| Route | Step | Description | Gating |
|-------|------|-------------|--------|
| `/rb/01-problem` | 1 | Problem Definition | None (entry point) |
| `/rb/02-market` | 2 | Market Research | Requires Step 1 artifact |
| `/rb/03-architecture` | 3 | System Architecture | Requires Step 2 artifact |
| `/rb/04-hld` | 4 | High Level Design | Requires Step 3 artifact |
| `/rb/05-lld` | 5 | Low Level Design | Requires Step 4 artifact |
| `/rb/06-build` | 6 | Build Implementation | Requires Step 5 artifact |
| `/rb/07-test` | 7 | Testing & QA | Requires Step 6 artifact |
| `/rb/08-ship` | 8 | Ship & Deploy | Requires Step 7 artifact |
| `/rb/proof` | - | Final Submission | Requires all 8 artifacts |

## Component Architecture

### Layout Components
- `PremiumLayout.tsx` - Main layout wrapper with top bar, context header, workspace, build panel, and footer
- `BuildPanel.tsx` - Right sidebar (30%) with copy functionality and artifact upload

### State Management
- `lib/store.ts` - Zustand store managing:
  - Artifact uploads per step
  - Project links (Lovable, GitHub, Deploy)
  - Step completion status

### Page Structure
Each step page (`/rb/XX-name/page.tsx`) includes:
- Step-specific content in main workspace
- Artifact content for Lovable
- Upload functionality
- Navigation with gating logic

## Design System Implementation

### Colors
```css
--bg-primary: #F7F6F3 (off-white background)
--bg-secondary: #FFFFFF (white cards/panels)
--accent: #8B0000 (deep red for CTAs)
--text-primary: #1A1A1A (main text)
--text-secondary: #666666 (secondary text)
--border: #E0DED8 (subtle borders)
```

### Typography
```css
--font-serif: 'Crimson Text' (headings)
--font-sans: 'Inter' (body text)
```

### Spacing Scale
```css
--spacing-xs: 8px
--spacing-sm: 16px
--spacing-md: 24px
--spacing-lg: 40px
--spacing-xl: 64px
```

## Key Features

1. **Step Gating**: Users cannot skip steps - must upload artifact to proceed
2. **Artifact Tracking**: Zustand persists upload status in localStorage
3. **Build Panel**: Fixed 30% width panel with copy-to-clipboard functionality
4. **Premium Layout**: Consistent header, footer, and content structure
5. **Proof Page**: Final submission with all links and completion status

## Data Flow

1. User completes step content
2. Copies artifact to Lovable
3. Uploads proof (screenshot/file)
4. Store updates with artifact
5. Next button becomes enabled
6. Navigation to next step allowed
7. Repeat until all 8 steps complete
8. Submit final proof with all links

## File Organization

```
app/
├── layout.tsx              # Root layout
├── globals.css             # Global styles
├── page.tsx                # Home redirect
└── rb/
    ├── step.module.css     # Shared step styles
    ├── 01-problem/
    ├── 02-market/
    ├── 03-architecture/
    ├── 04-hld/
    ├── 05-lld/
    ├── 06-build/
    ├── 07-test/
    ├── 08-ship/
    └── proof/
        ├── page.tsx
        └── proof.module.css

components/
├── PremiumLayout.tsx
├── PremiumLayout.module.css
├── BuildPanel.tsx
└── BuildPanel.module.css

lib/
└── store.ts                # Zustand state management
```

## Navigation Logic

Each step page includes:
```typescript
useEffect(() => {
  if (!hasArtifact(previousStepNumber)) {
    router.push('/rb/previous-step')
  }
}, [hasArtifact, router])
```

This ensures users follow the linear path and cannot skip ahead.
