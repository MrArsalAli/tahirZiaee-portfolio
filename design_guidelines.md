# Design Guidelines: Dark Ultra-Modern Designer Portfolio

## Design Approach
**Theme**: Dark Futuristic - A cinematic, story-driven portfolio experience that emphasizes motion, creativity, and intelligence through every scroll. Each section flows seamlessly like a narrative, not just blocks of content.

## Color Palette

**Primary Colors:**
- Electric Cyan-Blue: `#0DA2E7` (primary brand color, used for glows and accents)
- Deep Matte Black: `#0A0A0A` (main background)

**Secondary Colors:**
- Soft Neon Glow: `#00D1FF` (highlights and interactive elements)
- Accent Violet: `#B500F1` (depth and variation)
- White: Text on dark backgrounds with electric blue glow effects

**Dark Mode Implementation:**
All sections use pitch black base with strategic cyan/blue glow effects for depth and energy.

## Typography

**Font Families:**
- Primary Heading Font: "Neue Machina Bold" (futuristic, AI-meets-design energy)
- Body Font: "Satoshi Regular" (clean, readable)
- Fallbacks: "Satoshi Variable" or "Inter Tight" for lighter weight needs

**Hierarchy:**
- Hero Title: Large, bold, white text with electric blue glow effect
- Section Headings: Neue Machina Bold with cyan gradients
- Body Text: Satoshi Regular in light gray (#E0E0E0)
- Accent Text: Bright cyan (#0DA2E7) for CTAs and highlights

## Layout System

**Spacing Primitives:**
Use Tailwind units: 4, 8, 12, 16, 24, 32 for consistent rhythm

**Section Heights:**
- Hero: Full 100vh viewport
- About: ~80vh split layout
- Showcase: ~90vh grid layout
- Interactive Parallax: ~70vh
- Footer: Auto-height with gradient

**Grid Systems:**
- Showcase Grid: 3-column layout on desktop
- About Section: 50/50 split (image left, content right)

## Component Library

### Hero Section - "The Creative Pulse"
- Full viewport pitch black background
- Centered designer name with white text + electric blue glow
- Subheading fade-in below: "Design is not what it looks like — it's how it feels to move through it."
- Animated blue neon lines moving slowly behind text (digital energy waves)
- Custom cursor trail effect with electric sparks
- Smooth scroll trigger with parallax depth

### About Section - "The Mind Behind the Interface"
- Split layout: Left (abstract portrait with grain texture), Right (content)
- Soft cyan gradient behind text (low opacity ~20%)
- Text slides in with Framer Motion on scroll
- Sample text: "I'm a UI/UX designer obsessed with clarity and creative depth. From clean app layouts to bold product stories — I turn pixels into emotions."
- Skill highlight blocks fade in sequentially (Skills, Tools, Experience)

### Showcase Grid - "Work That Speaks"
- 3-column full-width grid layout
- **Glassmorphic Cards**: `backdrop-filter: blur(10px)`, glowing cyan borders
- Hover interactions:
  - Slight scale transform (1.05)
  - Title and tags appear from bottom
  - Blue glow border animation around edges
- **Vertical Dividers**: Thin neon lines between columns
  - `background: linear-gradient(to bottom, transparent, #0DA2E7, transparent)`
  - `width: 1px`
- Mock project placeholders with creative design work representations

### Interactive Parallax Section - "The Creative Experience"
- Floating SVG elements: brush strokes, geometric shapes, design tool icons
- Elements move slowly on scroll (different speeds for depth)
- Optional subtle mouse-based tilt effect
- Text: "Design is alive when you can feel its rhythm. Every scroll is a frame — every frame tells a story."

### Footer - "Let's Create the Future"
- Full-width gradient: `from deep black (#0A0A0A) → electric blue (#0DA2E7)`
- Center-aligned content
- "Ready to collaborate?" in light gray
- Email link in bright cyan with animated underline on hover
- Bottom tagline: "© 2025 Crafted and Built by AA." in muted gray
- Floating glowing line animation looping in background

## Animations & Micro-Interactions

**Scroll Animations:**
- Framer Motion fade + slide for each section reveal
- Smooth parallax depth transitions between sections
- Cinematic scroll snapping (not abrupt)

**Hover Effects:**
- Text shimmer with brief pulse glow
- Card scale transforms (subtle, 1.05x)
- Glow border animations on interactive elements
- Email link underline animation

**Background Motion:**
- Slow neon line animations in hero
- Floating SVG parallax in interactive section
- Looping glow animations in footer

**Performance Notes:**
- Use Framer Motion and GSAP ScrollTrigger only
- No heavy UI libraries
- Keep animations smooth, GPU-accelerated
- Modular, lightweight components

## Images

**About Section Portrait:**
- Placeholder abstract portrait with grain texture overlay
- Left side of split layout
- Dimensions: Square or portrait orientation, ~600x800px
- Style: High contrast, artistic treatment

**Showcase Projects:**
- 6 mock project thumbnails (2 rows × 3 columns)
- Mix of UI/UX work: app interfaces, branding, web designs
- High-quality, modern design examples
- Aspect ratio: 16:9 or 4:3 for consistency

**No large hero image** - Hero relies on animated typography and neon line effects with pitch black background.

## Visual Effects

- **Glow Effects**: CSS box-shadow with cyan/blue colors for depth
- **Glassmorphism**: Backdrop blur (10px) with semi-transparent borders
- **Grain Texture**: Subtle noise overlay on portrait image
- **Gradient Overlays**: Low opacity cyan gradients for visual interest
- **Cursor Trail**: Custom electric spark effect following mouse movement