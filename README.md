# Base Template - Next.js Landing Page

A modern, fully-featured Next.js landing page template with beautiful design, smooth animations, and all the core components you need to get started quickly.

## Features

- 🎨 **Modern Design System** - Beautiful UI with consistent color scheme and typography
- ⚡ **Next.js 16** - Built with the latest Next.js features
- 🎭 **Framer Motion** - Smooth animations and transitions
- 📱 **Fully Responsive** - Works perfectly on all devices
- ♿ **Accessible** - Built with accessibility in mind
- 🎯 **TypeScript** - Fully typed for better developer experience
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- 🔧 **Ready to Customize** - Easy to adapt to your brand

## Core Components

### Landing Page Sections
- **Hero** - Eye-catching hero section with CTA buttons
- **Showcase** - Product tour and feature highlights
- **How It Works** - Step-by-step process explanation
- **Features** - Feature grid with icons and descriptions
- **Stats** - Animated statistics section
- **Testimonials** - Customer testimonials with ratings
- **FAQ** - Searchable FAQ section with categories
- **Footer** - Newsletter signup and links

### UI Components
- Button (multiple variants)
- Card
- Input
- Accordion
- Sheet (mobile menu)
- Skeleton (loading states)
- Scroll Progress Indicator

## 🚀 Quick Start - Using This Template

> 📖 **New to this template?** Check out [SETUP.md](./SETUP.md) for a detailed step-by-step guide!

### Option 1: Use as GitHub Template (Recommended)

1. **Create a new repository from this template:**
   - Click the **"Use this template"** button on GitHub
   - Or visit: `https://github.com/YOUR_USERNAME/base-template/generate`
   - Name your new repository (e.g., `my-landing-page`)

2. **Clone your new repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/my-landing-page.git
   cd my-landing-page
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Configure your site:**
   - Open `config/siteConfig.ts`
   - Update `siteName`, `logoText`, and all other settings
   - Replace `public/logo.svg` with your logo

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Option 2: Clone Directly

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/base-template.git my-project
   cd my-project
   ```

2. **Remove the existing git history (optional):**
   ```bash
   rm -rf .git
   git init
   git add .
   git commit -m "Initial commit from template"
   ```

3. **Follow steps 3-6 from Option 1**

### Prerequisites
- Node.js 18+ 
- npm or yarn

## ⚙️ Configuration

This template uses a **config-driven approach** with `config/siteConfig.ts` as the single source of truth. Update this file to customize:

- Site name and branding
- Navigation links
- Social media links
- Footer content
- Meta tags
- Contact CTA

All components automatically use values from `siteConfig.ts`, making customization quick and easy.

### First Steps After Cloning

1. **Update `config/siteConfig.ts`:**
   ```typescript
   export const siteConfig = {
     siteName: "Your Company Name",
     logoText: "Your Brand",
     tagline: "Your tagline here",
     // ... update other values
   }
   ```

2. **Replace the logo:**
   - Replace `public/logo.svg` with your logo file
   - Keep the same filename or update `components/Logo.tsx`

3. **Update content:**
   - Edit component files in `components/landing/` to update text and images
   - Update FAQ, testimonials, features, etc.

## Customization Guide

### 1. Branding

**Update Logo:**
- Replace `public/logo.svg` with your logo file
- The Logo component automatically uses `/logo.svg` from the public folder

**Update Brand Name:**
- Update `config/siteConfig.ts` - change `siteName` and `logoText`
- All components automatically use values from `siteConfig.ts`

### 2. Colors

**Primary Color:**
- The template uses `#2468FF` as the primary color
- To change it, update the CSS variables in `app/globals.css`:
  ```css
  --primary-cta: 220 100% 57%; /* Change HSL values */
  ```

### 3. Content

**Hero Section:**
- Edit `app/components/landing/Hero.tsx`
- Update headlines, descriptions, and CTAs

**Features:**
- Edit `app/components/landing/Features.tsx`
- Update the `features` array with your features

**Testimonials:**
- Edit `app/components/landing/Testimonials.tsx`
- Update the `testimonials` array with real testimonials

**FAQ:**
- Edit `app/components/landing/FAQ.tsx`
- Update the `faqs` array with your questions

### 4. Navigation

**Menu Items:**
- Edit `config/siteConfig.ts`
- Update the `navigationLinks` array to match your sections

### 5. Footer

**Links and Social Media:**
- Edit `app/components/landing/Footer.tsx`
- Update social media links
- Update footer navigation links
- Configure newsletter API endpoint (currently uses placeholder)

## Project Structure

```
base-template/
├── app/
│   ├── globals.css       # Global styles and design system
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── error-boundary.tsx # Error boundary wrapper
├── components/
│   ├── landing/          # Landing page sections
│   ├── ui/               # Reusable UI components
│   ├── Logo.tsx          # Logo component
│   ├── StructuredData.tsx # SEO structured data
│   ├── QueryProvider.tsx # React Query provider
│   └── ErrorFallback.tsx # Error fallback component
├── config/
│   └── siteConfig.ts     # Site configuration (single source of truth)
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static assets
│   └── logo.svg          # Logo file
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Design System

### Colors
- **Primary CTA**: `#2468FF` (hsl(220, 100%, 57%))
- **Secondary**: Orange/Yellow accent
- **Background**: White with gray-50 sections
- **Text**: Gray-900 for headings, Gray-600/700 for body

### Typography
- **Font**: Space Grotesk (Google Fonts)
- **Headings**: Normal weight (400)
- **Body**: Normal weight with relaxed leading

### Spacing
- Consistent spacing scale using Tailwind defaults
- Sections use `py-12 sm:py-16 md:py-24` pattern

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This template is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting**

For Vercel:
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

## Customization Tips

1. **Replace Placeholder Images**: Add your images to `/public/images/` and update image paths
2. **Add Analytics**: Add your analytics script to `app/layout.tsx`
3. **Configure SEO**: Update metadata in `app/layout.tsx` and add structured data
4. **Add Forms**: Integrate with your form service (e.g., Formspree, Netlify Forms)
5. **Add API Routes**: Create API routes in `app/api/` directory for backend functionality (create the folder if needed)

## Dependencies

### Core
- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety

### UI & Styling
- `tailwindcss` - CSS framework
- `framer-motion` - Animations
- `lucide-react` - Icons

### Components
- `@radix-ui/*` - Accessible component primitives
- `class-variance-authority` - Component variants
- `clsx` & `tailwind-merge` - Class name utilities

### Utilities
- `@tanstack/react-query` - Data fetching
- `sonner` - Toast notifications
- `zod` - Schema validation

## License

This template is provided as-is. Feel free to use it for your projects.

## 📚 Additional Resources

- **[SETUP.md](./SETUP.md)** - Detailed step-by-step setup guide
- **[.github/TEMPLATE_SETUP.md](./.github/TEMPLATE_SETUP.md)** - How to enable this as a GitHub template

## Support

For questions or issues, please refer to the Next.js documentation or create an issue in your repository.

---

**Happy Building! 🚀**

