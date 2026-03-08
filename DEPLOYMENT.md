# Deployment Guide

Deploy the AI Resume Builder to production.

## Option 1: Vercel (Recommended)

Vercel is built by the creators of Next.js and offers the best integration.

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: AI Resume Builder"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-resume-builder.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy"

**Done!** Your app will be live at `https://your-project.vercel.app`

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate auto-configured

---

## Option 2: Netlify

### Step 1: Build Settings

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select your repository
5. Build settings auto-detected
6. Click "Deploy"

**Done!** Live at `https://your-project.netlify.app`

---

## Option 3: Self-Hosted (VPS)

For AWS, DigitalOcean, or any VPS.

### Requirements
- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)

### Step 1: Build

```bash
npm run build
```

### Step 2: Start with PM2

```bash
npm install -g pm2
pm2 start npm --name "ai-resume-builder" -- start
pm2 save
pm2 startup
```

### Step 3: Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 4: SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## Environment Variables

If you add environment variables later:

### Vercel
1. Project Settings → Environment Variables
2. Add variables
3. Redeploy

### Netlify
1. Site Settings → Environment Variables
2. Add variables
3. Trigger redeploy

### Self-Hosted
Create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## Pre-Deployment Checklist

- [ ] All tests passing
- [ ] No console errors
- [ ] Build completes successfully (`npm run build`)
- [ ] Environment variables configured
- [ ] API keys secured (not in client code)
- [ ] Error tracking set up (optional)
- [ ] Analytics configured (optional)

---

## Post-Deployment Verification

### 1. Test All Routes
- [ ] Home redirects to Step 1
- [ ] All 8 steps load correctly
- [ ] Proof page accessible
- [ ] No 404 errors

### 2. Test Functionality
- [ ] Artifact upload works
- [ ] Next button enables after upload
- [ ] Navigation gating works
- [ ] State persists (localStorage)
- [ ] Copy buttons work

### 3. Test Performance
- [ ] Page load < 2 seconds
- [ ] No layout shift
- [ ] Images load properly
- [ ] Fonts load correctly

### 4. Test Mobile
- [ ] Responsive on phone
- [ ] Responsive on tablet
- [ ] Touch interactions work
- [ ] No horizontal scroll

---

## Monitoring (Optional)

### Error Tracking - Sentry

```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

### Analytics - Google Analytics

Add to `app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## Continuous Deployment

### Vercel
- Auto-deploys on push to main
- Preview deployments for PRs
- Rollback with one click

### Netlify
- Auto-deploys on push
- Deploy previews for branches
- Instant rollback

### GitHub Actions (Self-Hosted)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to VPS
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /var/www/ai-resume-builder
            git pull
            npm install
            npm run build
            pm2 restart ai-resume-builder
```

---

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### 404 on Refresh
- Vercel: Auto-configured
- Netlify: Add `_redirects` file:
  ```
  /*    /index.html   200
  ```
- Nginx: Already configured in example above

### State Not Persisting
- Check if localStorage is enabled
- Verify Zustand persist middleware
- Check browser console for errors

---

## Cost Estimates

### Vercel
- Hobby: Free (perfect for this project)
- Pro: $20/month (if you need more)

### Netlify
- Starter: Free (100GB bandwidth)
- Pro: $19/month

### Self-Hosted
- DigitalOcean Droplet: $6/month
- AWS Lightsail: $5/month
- Domain: $10-15/year

---

## Next Steps After Deployment

1. Test thoroughly in production
2. Share link with users
3. Gather feedback
4. Monitor errors and analytics
5. Iterate and improve

**Your AI Resume Builder is now live!** 🚀
