# Portfolio Setup Guide

Your engineering portfolio project has been successfully scaffolded! Follow these steps to get it running.

## Step 1: Install Node.js

Your portfolio requires Node.js to run. Here's how to install it:

### Option A: Windows Package Manager (Recommended)
```powershell
winget install OpenJS.NodeJS --silent --accept-source-agreements
```

After installation, **restart PowerShell or VS Code** to pick up the PATH changes.

### Option B: Manual Download
Visit [nodejs.org](https://nodejs.org) and download the LTS version, then run the installer.

### Option C: Using Microsoft Store
Search for "Node.js" in the Microsoft Store app and install it.

### Verify Installation
```powershell
node --version
npm --version
```

## Step 2: Install Dependencies

Once Node.js is installed, open a terminal in your project directory and run:

```bash
npm install
```

This will install all required packages (React, Next.js, Tailwind CSS, etc.).

## Step 3: Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:3000`

## VS Code Tasks (Easier Way)

Once npm is installed, you can use VS Code's built-in task runner:

1. Press `Ctrl + Shift + B` to see build tasks
2. Select "Dev Server" to start the development server
3. The server runs in the background and automatically reloads

**Available tasks:**
- **Install Dependencies**: Install npm packages
- **Dev Server** (default): Start development server with hot reload
- **Build**: Create production build
- **Lint**: Check code quality

## Project Structure

```
Portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Navigation.tsx       # Navigation bar
│   ├── HeroSection.tsx      # Hero section
│   ├── ProjectsSection.tsx  # Projects showcase
│   ├── AboutSection.tsx     # About me
│   ├── ContactSection.tsx   # Contact form
│   └── Footer.tsx           # Footer
├── public/                  # Static files (images, etc)
├── .vscode/
│   └── tasks.json          # VS Code tasks
└── README.md               # Full documentation
```

## Customization Checklist

After installation, customize your portfolio:

- [ ] **Projects**: Edit `components/ProjectsSection.tsx` with your actual projects
- [ ] **About**: Update `components/AboutSection.tsx` with your bio and skills
- [ ] **Contact**: Replace email and social links in `components/ContactSection.tsx`
- [ ] **Metadata**: Update site title/description in `app/layout.tsx`
- [ ] **Styling**: Customize colors in `tailwind.config.ts`

## Common Issues

### npm commands not recognized
- Make sure Node.js is installed: `node --version`
- Restart VS Code/PowerShell after installation
- Check PATH: `$env:PATH` should include Node.js directory

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```
Changes port to 3001

### Type errors in components
```bash
npm run build
```
Check if there are actual build errors

## Building for Production

```bash
npm run build
npm start
```

Production build will be optimized and ready to deploy.

## Deployment

### Vercel (Recommended for Next.js)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy automatically

### Other Services
- Netlify (static export)
- GitHub Pages (static export)
- Docker (containerized)

## Next Steps

1. ✅ Install Node.js
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. ✅ Customize your projects
5. ✅ Test locally
6. ✅ Deploy to production

**Need help?** Check [README.md](README.md) for detailed documentation.

Good luck with your portfolio! 🚀
