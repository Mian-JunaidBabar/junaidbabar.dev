# Services Architecture

## Overview

The Services section showcases 6 key service domains with professional design, hover animations, and dynamic routing to individual service pages.

## File Structure

```
src/
├── components/
│   └── Services.tsx              # Main services grid component
├── app/
│   └── services/
│       └── [slug]/
│           ├── page.tsx          # Dynamic service detail page
│           └── not-found.tsx     # Custom 404 for services
└── data/
    └── services.ts               # Centralized service data & types
```

## Components

### 1. Services Component (`/components/Services.tsx`)

Main landing section displaying all 6 services in a responsive grid.

**Features:**

- 6 service cards with icons, descriptions, and tech tags
- Hover effects with scale and elevation
- Animated on scroll with Framer Motion
- Links to individual service pages
- Responsive grid layout (1 → 2 → 3 columns)

**Usage:**

```tsx
import Services from "@/components/Services";

<Services />;
```

### 2. Service Detail Page (`/app/services/[slug]/page.tsx`)

Dynamic route showing comprehensive information about each service.

**Features:**

- Hero section with service icon and full description
- "What I Offer" skills list with checkmarks
- Related projects filtered from resume.json
- CTA section with contact links
- Responsive design matching portfolio theme

**Routes:**

- `/services/web-development`
- `/services/ai-machine-learning`
- `/services/automation-integrations`
- `/services/wordpress-development`
- `/services/cloud-infrastructure`
- `/services/creative-design`

## Service Data Structure

Located in `src/data/services.ts`:

```typescript
interface Service {
  title: string; // Display name
  slug: string; // URL slug
  icon: LucideIcon; // Icon component
  shortDesc: string; // Brief description (for cards)
  fullDesc: string; // Detailed description (for detail page)
  tags: string[]; // Tech stack tags
  skills: string[]; // List of offered skills
  relatedProjects: string[]; // Keywords to match projects
}
```

## Services List

| Service                   | Slug                      | Icon    | Key Technologies                        |
| ------------------------- | ------------------------- | ------- | --------------------------------------- |
| Web Development           | `web-development`         | Code    | Next.js, Node.js, Tailwind, MySQL       |
| AI & Machine Learning     | `ai-machine-learning`     | Brain   | Python, TensorFlow, PyTorch, Gemini API |
| Automation & Integrations | `automation-integrations` | Zap     | REST, Firebase, Streamlit, Zapier       |
| WordPress Development     | `wordpress-development`   | Globe   | WordPress, Elementor, PHP, MySQL        |
| Cloud & Infrastructure    | `cloud-infrastructure`    | Cloud   | AWS, Oracle Cloud, Docker               |
| Creative & Digital Design | `creative-design`         | Palette | Illustrator, Photoshop, Meta Ads        |

## Related Projects Matching

Projects are automatically filtered based on keywords:

```typescript
relatedProjects: ["Next.js", "React", "web"];
```

This matches any project in `resume.json` with keywords containing these terms (case-insensitive).

## Design Features

### Cards (Services Grid)

- **Hover Effects:**
  - Scale: 1.03
  - Translate Y: -4px
  - Shadow elevation
  - Icon background color change
- **Animations:**
  - Fade in on scroll
  - Staggered entrance (0.1s delay per card)
- **Colors:**
  - Light mode: White cards on gray-50 background
  - Dark mode: gray-800 cards on dark-bg background
  - Primary accent on hover

### Service Detail Pages

- **Layout Sections:**
  1. Hero (gradient background with icon)
  2. Full description & tech tags
  3. Skills grid with checkmarks
  4. Related projects cards
  5. CTA with contact buttons

## Customization

### Adding a New Service

1. Add service object to `services` array in `src/data/services.ts`:

```typescript
{
  title: "Your Service",
  slug: "your-service",
  icon: YourIcon,
  shortDesc: "Brief description",
  fullDesc: "Detailed description",
  tags: ["Tech1", "Tech2"],
  skills: [
    "Skill 1",
    "Skill 2",
  ],
  relatedProjects: ["keyword1", "keyword2"],
}
```

2. Import the Lucide icon at the top of the file
3. The route `/services/your-service` will automatically work

### Updating Project Matching

Edit the `relatedProjects` array to change which projects appear on each service page. Keywords are matched against `project.keywords` in `resume.json`.

## SEO & Performance

- **Static Generation:** All service pages are statically generated at build time via `generateStaticParams()`
- **Performance:** Framer Motion animations use GPU-accelerated transforms
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation

## Integration

The Services component is integrated into the main page at `src/app/page.tsx`:

```tsx
import Services from "@/components/Services";

<Services />;
```

It replaces the previous Skills section and appears after the About section.

## Navigation

- **Main Page:** Scroll to `#services` or navigate to `/#services`
- **Individual Pages:** Click "Learn More →" on any service card
- **Back Navigation:** "Back to Services" link on detail pages
- **404 Handling:** Custom not-found page for invalid service slugs

## Dependencies

- **Framer Motion:** Animations and scroll effects
- **Lucide React:** Icon components
- **Next.js 14+:** App router, dynamic routes, static generation
- **Tailwind CSS:** Styling and responsive design

## Future Enhancements

Possible additions:

- Blog posts per service
- Client testimonials per service
- Pricing/packages section
- Service comparison table
- Case studies per service
- Service-specific contact forms
