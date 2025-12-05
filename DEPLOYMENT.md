# Deployment Guide - GitHub & Netlify

This guide will walk you through deploying your Elevate Asset Management website to GitHub and Netlify.

## Step 1: Initialize Git Repository

1. Open terminal and navigate to your project:
```bash
cd "/Users/dsikler/Desktop/Coding Files/Elevate Asset Management"
```

2. Initialize git (if not already done):
```bash
git init
```

3. Add all files:
```bash
git add .
```

4. Create your first commit:
```bash
git commit -m "Initial commit - Elevate Asset Management website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `elevate-asset-management` (or any name you prefer)
4. Description: "Property management website for Elevate Asset Management"
5. Choose **Public** or **Private** (your choice)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

## Step 3: Connect Local Repository to GitHub

After creating the GitHub repo, you'll see instructions. Run these commands:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/elevate-asset-management.git

# Rename default branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** If you're using SSH instead of HTTPS:
```bash
git remote add origin git@github.com:YOUR_USERNAME/elevate-asset-management.git
```

## Step 4: Deploy to Netlify

### Option A: Deploy via Netlify Dashboard (Recommended)

1. Go to [Netlify.com](https://www.netlify.com) and sign in (or create account)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account
5. Select your repository: `elevate-asset-management`
6. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Base directory:** (leave empty)
7. Click **"Deploy site"**

### Option B: Deploy via Netlify CLI

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Navigate to your project:
```bash
cd "/Users/dsikler/Desktop/Coding Files/Elevate Asset Management"
```

4. Initialize Netlify:
```bash
netlify init
```
   - Choose "Create & configure a new site"
   - Give it a name (or press Enter for auto-generated)
   - Build command: `npm run build`
   - Directory to publish: `dist`

5. Deploy:
```bash
netlify deploy --prod
```

## Step 5: Configure Custom Domain (Optional)

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow Netlify's DNS configuration instructions

## Step 6: Set Up Continuous Deployment

Your site is already set up for continuous deployment! Every time you push to GitHub:

1. Make changes to your code
2. Commit and push:
```bash
git add .
git commit -m "Your commit message"
git push
```

3. Netlify will automatically rebuild and deploy your site

## Troubleshooting

### Build Fails on Netlify

- Check build logs in Netlify dashboard
- Ensure Node.js version is compatible (Netlify uses Node 18 by default)
- Verify all dependencies are in `package.json`

### Images Not Loading

- Make sure all images are in the `public/` folder
- Image paths should start with `/` (e.g., `/image.jpg`)

### Environment Variables

If you need environment variables:
1. Go to Netlify dashboard → **Site settings** → **Environment variables**
2. Add your variables
3. Redeploy

## Quick Reference Commands

```bash
# Make changes and push to GitHub
git add .
git commit -m "Description of changes"
git push

# Build locally to test
npm run build
npm run preview

# Deploy to Netlify (if using CLI)
netlify deploy --prod
```

## Your Site URL

After deployment, Netlify will provide you with a URL like:
- `https://your-site-name.netlify.app`

You can customize this in **Site settings** → **Domain management** → **Change site name**

