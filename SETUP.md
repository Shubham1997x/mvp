# 🚀 Quick Setup Guide

This guide will help you quickly set up a new website using this template.

## Step 1: Create Repository from Template

### On GitHub:

1. Go to the template repository
2. Click the green **"Use this template"** button
3. Select **"Create a new repository"**
4. Name your repository (e.g., `my-awesome-website`)
5. Choose public or private
6. Click **"Create repository from template"**

### Or via Command Line:

```bash
# Clone the template
git clone https://github.com/YOUR_USERNAME/base-template.git my-new-website
cd my-new-website

# Remove old git history
rm -rf .git

# Initialize new repository
git init
git add .
git commit -m "Initial commit from template"

# Add your remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/my-new-website.git
git branch -M main
git push -u origin main
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Configure Your Site

### Update `config/siteConfig.ts`:

```typescript
export const siteConfig = {
  // Update these values
  siteName: "Your Company Name",
  logoText: "Your Brand",
  tagline: "Your amazing tagline",
  
  // Update navigation
  navigationLinks: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    // ... add your links
  ],
  
  // Update social links
  socialLinks: {
    twitter: "https://twitter.com/yourhandle",
    facebook: "https://facebook.com/yourpage",
    github: "https://github.com/yourusername",
  },
  
  // Update meta tags
  meta: {
    title: "Your Site Title",
    description: "Your site description for SEO",
    url: "https://yourwebsite.com",
  },
}
```

### Replace Logo:

1. Replace `public/logo.svg` with your logo
2. Or update `components/Logo.tsx` if using a different format

## Step 4: Customize Content

### Update Landing Page Sections:

- **Hero** (`components/landing/Hero.tsx`) - Main headline and CTA
- **Features** (`components/landing/Features.tsx`) - Your features list
- **Testimonials** (`components/landing/Testimonials.tsx`) - Customer reviews
- **FAQ** (`components/landing/FAQ.tsx`) - Frequently asked questions
- **Footer** (`components/landing/Footer.tsx`) - Footer content

### Update Colors (Optional):

Edit `app/globals.css` to change the primary color:

```css
--primary-cta: 220 100% 57%; /* Change HSL values */
```

## Step 5: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site!

## Step 6: Deploy

### Deploy to Vercel (Recommended):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Build your Next.js app
- Deploy it to a live URL
- Set up automatic deployments on every push

### Deploy to Other Platforms:

- **Netlify**: Connect GitHub repo, build command: `npm run build`, publish directory: `.next`
- **Railway**: Connect GitHub repo, auto-detects Next.js
- **Any Node.js hosting**: Build with `npm run build` and serve with `npm start`

## 🎉 You're Done!

Your website is now live! Continue customizing by:

- Updating content in component files
- Adding new sections
- Customizing styles
- Adding your own images

## Need Help?

- Check the main [README.md](./README.md) for detailed documentation
- Review component files for customization options
- All components use `siteConfig.ts` for easy configuration

