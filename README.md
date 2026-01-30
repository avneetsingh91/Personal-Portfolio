# Modern Developer Portfolio

A premium, fully responsive personal portfolio built with **React 19**, **Tailwind CSS v4**, and **Vite**. Featuring a dark theme with glassmorphism, 3D depth effects, smooth animations, and accessibility-first design.

## ✨ Highlights

- 🌙 **Dark Theme**: Modern navy background with subtle gradients
- 🎨 **Glassmorphism**: Frosted glass effect on cards and overlays
- 3️⃣ **3D Effects**: Subtle tilt and floating animations on hover
- ✅ **Accessible**: Full keyboard navigation, focus rings, ARIA labels
- 📱 **Responsive**: Mobile-first design, scales beautifully from 320px to 1440px+
- ⚡ **Fast**: Vite-powered, builds in seconds
- 🎯 **Performance**: GPU-accelerated animations, optimized CSS

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build
```

### Configure EmailJS
1. Update `.env` with your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Test the contact form in the Contact section

## 📚 Design Documentation

See [DESIGN.md](./DESIGN.md) for:
- Complete design system
- Color palette & typography
- Component breakdown
- Accessibility details
- Responsive behavior
- Custom CSS utilities

## 🎯 Sections

| Component | Features |
|-----------|----------|
| **Hero** | Animated gradient headline, floating profile image, typing animation |
| **About** | Card layout, social links, profile overview |
| **Skills** | Responsive grid with tilt effects |
| **Projects** | 3D card hover, image zoom, CTAs |
| **Contact** | Glassmorphism form, EmailJS integration |
| **Footer** | Quick nav, social links, minimal design |

## 🛠️ Tech Stack

- **React 19** — Latest UI library
- **Tailwind CSS v4** — Utility-first styling
- **Vite 7** — Lightning-fast build tool
- **EmailJS** — Contact form service
- **ESLint** — Code quality

## 📱 Responsive Design

- **Mobile**: 320px (stacked layout, 2-col grid)
- **Tablet**: 640px+ (3-col grid, side-by-side)
- **Desktop**: 1024px+ (4-6 col grid, full flex)

All animations respect `prefers-reduced-motion` for accessibility.

## 📖 File Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Main.jsx (Hero)
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── Pages/
│   └── Home.jsx
├── assets/
│   ├── projects.json
│   ├── skills.json
│   └── mylogo.png
├── App.jsx
├── index.css (Global styles)
└── main.jsx
```

## 🎨 Customization

### Update Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent: #ff6bcb;           /* Primary accent */
  --accent-2: #7a4675;         /* Secondary accent */
  --muted: #9aa4bf;            /* Muted text */
  /* ... see DESIGN.md for all tokens */
}
```

### Update Content
- **Projects**: Edit `src/assets/projects.json`
- **Skills**: Edit `src/assets/skills.json`
- **About text**: Edit `src/components/About.jsx`
- **Contact info**: Edit `src/components/Contact.jsx`

### Add Animations
Use the custom CSS classes:
- `.float` — Floating animation
- `.tilt` — 3D tilt on hover
- `.btn-glow` — Button glow effect
- `.glass` — Glassmorphism effect

## ✅ Accessibility Features

- ✓ Full keyboard navigation (Tab, Enter, Escape)
- ✓ Focus-visible rings (purple outline)
- ✓ ARIA labels on all buttons/forms
- ✓ Semantic HTML (`<section>`, `<nav>`, `<form>`)
- ✓ Color contrast (WCAG AA+)
- ✓ Respects `prefers-reduced-motion`
- ✓ Minimum 44px touch targets

## 🔗 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop `dist/` folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push `dist/` to `gh-pages` branch
```

## 📝 License

MIT © 2025 Avneet Singh

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies.**
