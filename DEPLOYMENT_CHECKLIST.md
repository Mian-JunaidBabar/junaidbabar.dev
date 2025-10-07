# Pre-Deployment Checklist

Use this checklist before deploying your portfolio to production.

## ✅ Content Review

- [ ] Personal information is accurate in `src/data/resume.json`
- [ ] All project links work correctly
- [ ] GitHub and LinkedIn URLs are correct
- [ ] Email address is valid
- [ ] Phone number is correct (if included)
- [ ] Bio/summary is well-written and error-free
- [ ] All dates are accurate (education, experience)

## ✅ Visual Check

- [ ] Profile picture is added (or placeholder looks good)
- [ ] All images load correctly
- [ ] Color scheme is consistent
- [ ] Typography is readable on all devices
- [ ] Dark mode works properly
- [ ] Light mode works properly
- [ ] No layout shifts on page load
- [ ] Animations are smooth

## ✅ Functionality

- [ ] Navigation menu works
- [ ] Smooth scroll to sections works
- [ ] Dark mode toggle functions correctly
- [ ] Contact form validation works
- [ ] All external links open in new tabs
- [ ] Mobile menu opens and closes
- [ ] Hover effects work on desktop
- [ ] No console errors in browser DevTools

## ✅ Responsiveness

- [ ] Mobile (320px - 640px) looks good
- [ ] Tablet (640px - 1024px) looks good
- [ ] Desktop (1024px+) looks good
- [ ] Ultra-wide screens (1920px+) look good
- [ ] Test on actual mobile device
- [ ] Test on actual tablet
- [ ] Landscape orientation works

## ✅ SEO & Performance

- [ ] Page title is set correctly
- [ ] Meta description is compelling
- [ ] Open Graph tags are configured
- [ ] Twitter Card tags are set
- [ ] robots.txt is properly configured
- [ ] All images have alt text
- [ ] Page loads in under 3 seconds
- [ ] Lighthouse score > 90
- [ ] No broken links

## ✅ Accessibility

- [ ] All interactive elements are keyboard accessible
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG AA standards
- [ ] Screen reader can navigate the site
- [ ] All images have descriptive alt text
- [ ] Form inputs have proper labels
- [ ] ARIA labels are used where appropriate

## ✅ Cross-Browser Testing

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile Safari (iPhone)
- [ ] Chrome Mobile (Android)

## ✅ Technical

- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] `npm run build` completes successfully
- [ ] No unused dependencies
- [ ] Environment variables configured (if any)
- [ ] Contact form backend is set up (EmailJS/Formspree)

## ✅ Security

- [ ] No API keys in code
- [ ] No sensitive data exposed
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Forms have CSRF protection (if applicable)

## ✅ Analytics & Monitoring (Optional)

- [ ] Google Analytics set up
- [ ] Vercel Analytics enabled
- [ ] Error tracking configured (Sentry, etc.)
- [ ] Uptime monitoring enabled

## ✅ Final Steps

- [ ] Create Git repository
- [ ] Initial commit with all files
- [ ] Push to GitHub
- [ ] Deploy to Vercel/Netlify
- [ ] Test deployed version thoroughly
- [ ] Set up custom domain (optional)
- [ ] Configure DNS records
- [ ] SSL certificate is active
- [ ] Submit to search engines

## ✅ Post-Deployment

- [ ] Test all functionality on live site
- [ ] Check social media previews
- [ ] Submit sitemap to Google Search Console
- [ ] Share portfolio link on LinkedIn
- [ ] Share portfolio link on GitHub profile
- [ ] Add portfolio link to resume
- [ ] Monitor analytics for issues

## 🎉 Launch!

Once all items are checked, your portfolio is ready to go live!

**Remember**: Your portfolio is never truly "finished". Keep updating it with new projects, skills, and achievements.

---

### Quick Deploy Commands

```bash
# Test build locally
npm run build
npm run start

# Deploy to Vercel (if using Vercel CLI)
vercel --prod

# Or push to GitHub and deploy via Vercel Dashboard
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Troubleshooting

If something goes wrong:

1. Check the deployment logs
2. Verify environment variables
3. Clear cache and rebuild
4. Test locally with production build
5. Check browser console for errors
6. Review Vercel/Netlify documentation

### Need Help?

- Vercel Support: [https://vercel.com/support](https://vercel.com/support)
- Next.js Discord: [https://nextjs.org/discord](https://nextjs.org/discord)
- Stack Overflow: Tag with `nextjs`, `tailwindcss`, `vercel`

Good luck! 🚀
