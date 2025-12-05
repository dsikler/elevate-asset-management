# Push to GitHub - Quick Guide

## Option 1: Personal Access Token (Easiest)

### Step 1: Create a Personal Access Token

1. Go to GitHub.com and sign in
2. Click your profile picture (top right) → **Settings**
3. Scroll down to **Developer settings** (bottom left)
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **Generate new token** → **Generate new token (classic)**
6. Give it a name: `elevate-asset-management`
7. Select scopes: Check **`repo`** (this gives full repository access)
8. Click **Generate token** at the bottom
9. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Push to GitHub

Run this command (it will prompt for your username and password):

```bash
cd "/Users/dsikler/Desktop/Coding Files/Elevate Asset Management"
git push -u origin main
```

When prompted:
- **Username:** Your GitHub username (`dsikler`)
- **Password:** Paste your Personal Access Token (NOT your GitHub password)

---

## Option 2: Use SSH (Alternative)

If you prefer SSH:

1. Check if you have SSH keys:
```bash
ls -la ~/.ssh
```

2. If you don't have keys, generate one:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

3. Add your SSH key to GitHub:
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to GitHub → Settings → SSH and GPG keys → New SSH key
   - Paste and save

4. Change remote to SSH:
```bash
cd "/Users/dsikler/Desktop/Coding Files/Elevate Asset Management"
git remote set-url origin git@github.com:dsikler/elevate-asset-management.git
git push -u origin main
```

---

## After Pushing

Once pushed, your code will be at:
**https://github.com/dsikler/elevate-asset-management**

Then proceed to Netlify deployment!

