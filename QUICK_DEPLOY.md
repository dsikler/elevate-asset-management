# Quick Deploy Guide - GitHub & Netlify

## 🚀 Quick Steps

### 1. Push to GitHub

```bash
cd "/Users/dsikler/Desktop/Coding Files/Elevate Asset Management"

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Elevate Asset Management website"

# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/elevate-asset-management.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

### 2. Deploy to Netlify

1. Go to [netlify.com](https://www.netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. Authorize Netlify (if needed)
5. Select your `elevate-asset-management` repository
6. Netlify will auto-detect the build settings (they're already configured!)
7. Click **"Deploy site"**

**That's it!** Your site will be live in ~2 minutes.

### 3. Your Site URL

Netlify will give you a URL like: `https://your-site-name.netlify.app`

You can customize the name in: **Site settings** → **Domain management** → **Change site name**

---

## 📝 Future Updates

Whenever you make changes:

```bash
git add .
git commit -m "Your update message"
git push
```

Netlify will automatically rebuild and deploy! ✨

---

## ⚙️ Build Settings (Already Configured)

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18

These are already set in `netlify.toml` - no configuration needed!

