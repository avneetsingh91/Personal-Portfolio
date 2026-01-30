# Modern Developer Portfolio

A premium, responsive React + Tailwind CSS portfolio featuring a dark theme with glassmorphism, 3D depth, smooth animations, and accessibility-first design.

## 🎨 Design System

### Color Palette
- **Primary**: Deep navy background (`#0b1020`)
- **Accent**: Gradient pink-to-purple (`#ff6bcb` → `#7a4675`)
- **Glass**: Semi-transparent white overlays with backdrop blur
- **Text**: Light gray (`#e6eef8`), muted (`#9aa4bf`)

### Typography
- **Font Family**: Inter / System UI
- **Headings**: Extra bold (800), gradient or solid accent colors
- **Body**: Semibold (600) for section titles, medium (500) for labels
- **Text**: Line height 1.4 for readability

### Spacing & Layout
- **Max Width**: 6xl (1152px) for main content
- **Padding**: Mobile-first; scales from 4px to 10+ rem
- **Gaps**: 6-8px for tight layouts, 8-12px for section spacing
- **Radii**: 16px for cards, 8px for buttons, 999px for badges

## ✨ Key Features

### 1. Hero Section (`Main.jsx`)
- Animated gradient headline
- Floating profile image with 6s ease-in-out loop
- 3D tilt effect on hover (perspective: 800px)
- Primary CTA with soft glow on hover
- Typing animation for role/skills

### 2. About Section (`About.jsx`)
- Card-based glass layout
- Compact logo thumbnail with tilt effect
- Better typography hierarchy
- Social links with focus rings and hover states
- Responsive flex grid layout

### 3. Skills Section (`Skills.jsx`)
- Grid of tilt-effect cards (2–6 columns)
- Semi-transparent panel backgrounds
- Optional skill level badges
- Responsive mobile-first breakpoints

### 4. Projects Section (`Projects.jsx`)
- 3D tilt card hover effect
- Image gradient overlay with smooth zoom
- Clear CTA buttons (Preview, Repo)
- 1–3 column responsive grid
- Line-clamped descriptions

### 5. Contact Section (`Contact.jsx`)
- Glassmorphism form and info cards
- Focus-visible accessible inputs
- Transparent borders with subtle hover states
- EmailJS integration preserved
- Responsive 2-column layout (stacks on mobile)

### 6. Footer (`Footer.jsx`)
- Minimal, clean design
- Quick navigation links
- Social media icon links (SVG)
- Copyright and branding
- Accessible link focus states

### 7. Navigation (`Navbar.jsx`)
- Fixed glass navbar with backdrop blur
- Dark theme with muted text
- Mobile hamburger menu with aria attributes
- Active link highlighting with accent color
- Focus-visible states for keyboard nav

## 🚀 Performance & Accessibility

### Animations
- **Floaty**: Subtle Y-axis bounce for hero image
- **Tilt**: 3D perspective on card hover (low-cost CPU)
- **Fade In**: Staggered section load animations
- **Glow**: Box-shadow glow on button hover

### Accessibility
- Full keyboard navigation (Tab, Enter, Escape)
- Focus-visible rings on all interactive elements (4px purple outline)
- ARIA labels: `aria-label`, `aria-expanded`, `aria-hidden`
- Color contrast: White text (WCAG AA+) on dark backgrounds
- Respects `prefers-reduced-motion` media query
- Semantic HTML: `<section>`, `<nav>`, `<form>`, `<aside>`, `<footer>`

### Responsive Design
- **Mobile First**: 320px base, scales cleanly to 1440px+
- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Grid**: 2–6 columns depending on viewport
- **Typography**: Scales from 16px (mobile) to 56px (desktop headings)
- **Touch Targets**: Minimum 44px for interactive elements

## 📦 Tech Stack

- **React 19**: Latest with hooks
- **Tailwind CSS v4**: Utility-first styling with custom utilities
- **Vite**: Fast builds and dev server
- **EmailJS**: Contact form integration
- **React DOM**: for client-side rendering

## 🛠️ Custom CSS Classes

### Utilities (defined in `index.css`)
- `.glass`: Glassmorphism effect (blur + gradient border)
- `.card`: Semi-transparent panel with depth shadow
- `.focus-ring`: Accessible focus outline (purple glow)
- `.float`: Floating animation (6s loop)
- `.tilt`: 3D perspective hover effect
- `.btn-accent`: Gradient button with soft shadow
- `.btn-glow`: Enhanced glow on button hover
- `.text-muted`: Muted gray text color
- `.line-clamp-3`: Limit text to 3 lines with ellipsis

### CSS Variables
```css
--bg: #0b1020              /* Main background */
--accent: #ff6bcb          /* Primary gradient start */
--accent-2: #7a4675        /* Primary gradient end */
--muted: #9aa4bf           /* Secondary text */
--focus: purple glow       /* Focus state shadow */
--card-shadow: depth shadow /* Card layering */
```

## 🎯 Design Principles Applied

1. **Subtlety**: No excessive animations; purpose-driven micro-interactions
2. **Hierarchy**: Clear visual distinction between sections and content
3. **Consistency**: Unified color palette and spacing throughout
4. **Contrast**: High text/background contrast for readability
5. **Performance**: GPU-accelerated transforms, lazy loading ready
6. **Accessibility**: Full keyboard nav, screen reader friendly, reduced motion support

## 📱 Responsive Breakpoints

| Device | Width | Grid Cols | Hero Layout |
|--------|-------|-----------|-------------|
| Mobile | 320–640px | 2–3 | Stack (column-reverse) |
| Tablet | 640–1024px | 3–4 | Side-by-side |
| Desktop | 1024px+ | 4–6 | Full flex row |

## 🔧 Installation & Usage

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
npm install
```

### Development
```bash
npm run dev
# Opens at http://localhost:5173
```

### Production Build
```bash
npm run build
npm run preview
```

### Environment Variables
Create a `.env` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📝 File Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed nav with mobile menu
│   ├── Main.jsx          # Hero section with typing
│   ├── About.jsx         # About card layout
│   ├── Skills.jsx        # Skills grid
│   ├── Projects.jsx      # Projects cards
│   ├── Contact.jsx       # Contact form (EmailJS)
│   └── Footer.jsx        # Footer with socials
├── Pages/
│   └── Home.jsx          # Main page composition
├── assets/
│   ├── projects.json     # Project data
│   ├── skills.json       # Skills data
│   └── mylogo.png        # Logo image
├── App.jsx               # Root component
├── App.css               # Nav active state + focus
├── index.css             # Global styles & utilities
└── main.jsx              # React entry point
```

## 🎯 Future Enhancements

- Add Framer Motion for advanced scroll animations
- Implement dark/light mode toggle
- Add project filtering by category
- Blog integration
- Newsletter signup
- Analytics integration
- i18n for multi-language support

## 📄 License

MIT © 2025 Avneet Singh

---

Built with ❤️ using React, Tailwind CSS, and modern web technologies.
