# Portfolio Setup Guide

This guide will help you customize and deploy your personal portfolio website.

## 📝 Step-by-Step Customization

### 1. Update Personal Information

Open `src/data/resume.json` and update:

- **basics**: Name, email, phone, location, summary
- **profiles**: GitHub and LinkedIn URLs
- **work**: Your work experience and internships
- **education**: Your academic background
- **skills**: Your technical skills organized by category
- **projects**: Your featured projects with descriptions
- **publications**: Your research papers or articles

### 2. Add Your Profile Picture

Replace the placeholder in `src/components/Hero.tsx`:

1. Add your profile picture to the `public` folder (e.g., `public/profile.jpg`)
2. In `Hero.tsx`, replace the placeholder div with:

```tsx
<Image
  src="/profile.jpg"
  alt="Junaid Babar"
  fill
  className="object-cover"
  priority
/>
```

### 3. Customize Colors (Optional)

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: "#0ea5e9",      // Main accent color
  accent: "#0891b2",       // Secondary accent
  light: {
    bg: "#ffffff",         // Light mode background
    text: "#111827",       // Light mode text
  },
  dark: {
    bg: "#0b0f17",        // Dark mode background
    text: "#e5e7eb",      // Dark mode text
  },
}
```

### 4. Update Meta Tags for SEO

Edit `src/app/layout.tsx` metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your custom description",
  // ... update other fields
};
```

### 5. Configure Contact Form

To enable the contact form to send emails:

#### Option A: Using EmailJS

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create an email service and template
3. Get your Service ID, Template ID, and Public Key
4. Update `src/components/Contact.tsx`:

```typescript
import emailjs from "@emailjs/browser";

const onSubmit = async (data: FormData) => {
  try {
    await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      "YOUR_PUBLIC_KEY"
    );
    setIsSubmitted(true);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
```

#### Option B: Using Formspree

1. Sign up at [https://formspree.io/](https://formspree.io/)
2. Create a new form and get your form endpoint
3. Update the form in `src/components/Contact.tsx`:

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

### 6. Test Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) and check:

- [ ] All sections display correctly
- [ ] Dark mode toggle works
- [ ] Navigation links scroll smoothly
- [ ] Contact form validation works
- [ ] Mobile responsiveness looks good
- [ ] All external links work

### 7. Build and Deploy

#### Deploy to Vercel (Recommended)

1. **Push to GitHub**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Custom Domain** (Optional):
   - In Vercel project settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

#### Deploy to Netlify

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

## 🔍 SEO Checklist

After deployment:

- [ ] Submit sitemap to Google Search Console
- [ ] Verify Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Test Twitter Card with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Check mobile-friendliness with [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Test page speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Validate HTML with [W3C Validator](https://validator.w3.org/)

## 📊 Analytics (Optional)

### Add Google Analytics

1. Create a Google Analytics account
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `src/app/layout.tsx`:

```tsx
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## 🎨 Design Tips

1. **Keep it Simple**: Less is more. Focus on content over fancy effects
2. **Consistency**: Use the same spacing, colors, and typography throughout
3. **Hierarchy**: Make important information stand out
4. **Whitespace**: Give content room to breathe
5. **Performance**: Optimize images and use lazy loading
6. **Accessibility**: Ensure good color contrast and keyboard navigation

## 🐛 Common Issues

### Next.js Image Configuration Error

If you see an error about "hostname not configured under images":

1. Update `next.config.ts` to include external image domains:

   ```typescript
   const nextConfig: NextConfig = {
     images: {
       remotePatterns: [
         {
           protocol: "https",
           hostname: "picsum.photos", // or your image host
         },
       ],
     },
   };
   ```

2. Restart the development server: `npm run dev`

This allows Next.js to load images from external sources.

### Dark mode not working

- Clear browser cache and local storage
- Check that ThemeProvider is wrapped around the app

### Animations choppy

- Check browser DevTools performance tab
- Reduce animation complexity if needed

### Build errors

- Run `npm run build` locally to catch errors
- Check all imports and file paths are correct
- Ensure all TypeScript types are satisfied

### Contact form not sending

- Check browser console for errors
- Verify EmailJS/Formspree credentials
- Test with a simple console.log first

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Vercel Deployment Docs](https://vercel.com/docs)

## 💡 Pro Tips

1. **Update Regularly**: Keep your portfolio current with new projects and skills
2. **A/B Test**: Try different headlines and CTAs to see what works
3. **Get Feedback**: Ask friends/colleagues to review before making public
4. **Monitor Performance**: Use Vercel Analytics to track visitor behavior
5. **SEO**: Update content regularly and build backlinks to improve ranking

## 🆘 Need Help?

- Check existing issues on GitHub
- Open a new issue with detailed description
- Join Next.js Discord community
- Stack Overflow with the `nextjs` tag

---

Good luck with your portfolio! 🚀
