# TVM Designs - Pages Guide

## Available Pages

This TVM Designs website includes 7 complete pages:

### Main Pages
1. **HomePage** (`/`) - Hero section, featured projects, View All button, about section
2. **ProjectsPage** (`/projects`) - Grid of all projects
3. **AboutPage** (`/about`) - Philosophy, expertise, process, experience
4. **ContactPage** (`/contact`) - Contact form and information

### Project Detail Pages
5. **NewMOAPage** (`/projects/new-moa`) - Museum of Aviation project with desktop, tablet, mobile mockups
6. **BreezeFlightStatusPage** (`/projects/breeze-flight-status`) - Flight tracking app with responsive mockups
7. **IntervalPage** (`/projects/interval`) - Interval timer app with responsive mockups

## How to Switch Between Pages

Edit `src/app/App.tsx` and change which component is returned:

```tsx
// Show HomePage (default)
return <HomePage />;

// Show Projects page
return <ProjectsPage />;

// Show specific project
return <NewMOAPage />;
return <BreezeFlightStatusPage />;
return <IntervalPage />;

// Show About or Contact
return <AboutPage />;
return <ContactPage />;
```

## Design System Updates

### Buttons
✅ **Rounded/Pill-Shaped** - All buttons use `rounded-full` for smooth, rounded corners
✅ **Rollover Effects** - Buttons include:
- `hover:scale-[1.02]` - Subtle scale on hover
- `hover:shadow-lg` - Shadow effect
- `active:scale-[0.98]` - Press down effect
- `transition-all duration-300` - Smooth 300ms transitions

### Button Variants
- **Primary (default)** - Solid fill with color
- **Outline** - Transparent with 2px border
- **Secondary** - Alternative solid style
- **Ghost** - Minimal style for subtle actions
- **Link** - Text-only with underline

### Button Sizes
- **sm** - Small (h-9, px-4)
- **default** - Medium (h-11, px-6)
- **lg** - Large (h-13, px-8)
- **icon** - Square icon button (11x11)

## Global Components

### Header
- Black background with white text
- TVM Designs branding
- Navigation: Projects, About, Contact
- Responsive mobile menu button

### Footer
- Dark background (neutral-950)
- TVM Designs name
- Links: Projects, About, Contact
- Copyright notice

### ProjectCard
- Rounded card with image
- Hover effects: scale, shadow, image zoom
- Title and description (no categories)
- Gradient overlay on hover

## Responsive Design

All pages are responsive with breakpoints:
- **Mobile**: 1 column, stacked layout
- **Tablet (md)**: 2 columns for grids
- **Desktop (lg)**: 3 columns for project grids

Each project detail page includes:
- Desktop mockup (full width)
- Tablet mockup (medium width)
- Mobile mockup (small width, centered)

## Colors

- **Background**: Black (#000000)
- **Cards**: Neutral-900
- **Text**: White primary, Neutral-400 secondary
- **Accents**:
  - Green (#22c55e) - Experience
  - Blue (#3b82f6) - Versatility
  - Purple - Development
  - Orange - Product Design

## Typography

The project uses the default font stack from theme.css with proper hierarchy:
- Hero: 5xl-7xl, bold
- H1: 5xl-6xl, bold
- H2: 3xl-4xl, bold
- H3: 2xl, semibold
- Body: Base-lg, regular
