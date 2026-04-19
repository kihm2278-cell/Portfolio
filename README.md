# Engineering Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase your engineering projects and expertise.

## Features

- **Modern Design**: Clean, professional interface with dark mode support
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Fast Performance**: Built with Next.js for optimal speed and SEO
- **Type Safe**: Full TypeScript support for reliability
- **Easy to Customize**: Well-organized components for quick personalization
- **Smooth Animations**: CSS animations for engaging user experience

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Google Fonts (Inter)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
   or
   ```bash
   bun install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
   or
   ```bash
   bun run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Guide

### 1. Update Your Information

Edit `components/ContactSection.tsx` to add your actual contact information:
- Replace email placeholder with your email
- Add your social media links (GitHub, LinkedIn, Twitter)

### 2. Add Your Projects

Edit `components/ProjectsSection.tsx`:
- Replace the `projects` array with your actual projects
- Add project titles, descriptions, technologies, and links
- Include links to GitHub repositories and live demos

### 3. Customize About Section

Edit `components/AboutSection.tsx`:
- Update the bio/introduction text
- Add your core skills
- Personalize the skills list

### 4. Modify Navigation

Edit `components/Navigation.tsx`:
- Add or remove navigation links as needed
- Customize the brand name/logo

### 5. Update Metadata

Edit `app/layout.tsx`:
- Change the site title and description
- Update open graph meta tags for social sharing

### 6. Customize Styling

#### Colors & Theme
Edit `tailwind.config.ts` to customize:
- Color schemes
- Animations
- Font sizes
- Spacing

#### Global Styles
Edit `app/globals.css` to modify:
- Global CSS classes
- Button styles
- Card styles
- Animations

## File Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── HeroSection.tsx      # Hero/Welcome section
│   ├── ProjectsSection.tsx  # Projects showcase
│   ├── AboutSection.tsx     # About me section
│   ├── ContactSection.tsx   # Contact form
│   └── Footer.tsx           # Footer
├── public/                  # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind CSS config
├── next.config.ts          # Next.js config
└── README.md               # This file
```

## Building for Production

```bash
npm run build
npm start
```

## Environment Variables (Optional)

Create a `.env.local` file if you need to add environment variables:
```
# Example
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and configure everything
5. Deploy!

### Other Platforms

- **Netlify**: Export as static site
- **GitHub Pages**: Configure for static export
- **Docker**: Create a Dockerfile for containerization

## Tips for Job Applications

1. **Keep it Up to Date**: Regularly update your projects and achievements
2. **High-Quality Projects**: Showcase 3-5 of your best projects
3. **Clear Descriptions**: Write clear, concise project descriptions
4. **Technical Depth**: Mention technologies, architecture decisions, and challenges
5. **Links**: Include working links to live demos and GitHub repositories
6. **Contact Info**: Make it easy for recruiters to reach you

## Performance Optimization

- Image optimization via Next.js Image component (when needed)
- CSS-in-JS with Tailwind for minimal CSS
- Code splitting for faster page loads
- Smooth scrolling with native browser features

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork, customize, and make this portfolio your own!

## Support

For questions or issues, please refer to the [Next.js documentation](https://nextjs.org/docs).

---

**Ready to showcase your engineering expertise? Update the content, add your projects, and start applying!**
