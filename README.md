# Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and shadcn/ui components. This portfolio showcases professional skills, projects, and experience with smooth animations and excellent user experience.

## ✨ Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **TypeScript**: Built with TypeScript for better type safety
- **shadcn/ui**: Beautiful and accessible UI components
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: CSS animations and Intersection Observer API
- **Icons**: Emoji icons and SVG icons

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects section
│   └── Contact.tsx          # Contact section
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Sections

### Header

- Fixed navigation with smooth scrolling
- Active section highlighting
- Mobile-responsive hamburger menu
- Smooth transitions and hover effects

### Hero

- Eye-catching introduction with animations
- Call-to-action buttons
- Statistics display
- Floating tech stack icons
- Gradient text effects

### About

- Personal story and background
- Professional experience timeline
- Education details
- Hover effects on cards

### Skills

- Categorized skill display
- Animated progress bars
- Interactive skill badges
- Currently learning section

### Projects

- Featured projects showcase
- Project cards with hover effects
- Technology badges
- Live demo and code links

### Contact

- Contact information cards
- Social media links
- Interactive contact form
- Form validation and submission

## 🎭 Animations

- **Scroll Animations**: Elements animate in as they come into view
- **Hover Effects**: Interactive elements respond to user interaction
- **Floating Elements**: Subtle floating animations for visual interest
- **Progress Bars**: Animated skill progress indicators
- **Button Interactions**: Scale and color transitions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx` - Name, title, and description
- `src/components/About.tsx` - Personal story and experience
- `src/components/Skills.tsx` - Skills and proficiency levels
- `src/components/Projects.tsx` - Project details and links
- `src/components/Contact.tsx` - Contact information and social links

### Styling

- Colors: Update CSS variables in `src/app/globals.css`
- Animations: Modify animation classes and keyframes
- Layout: Adjust grid layouts and spacing in component files

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/app/page.tsx`
3. Update navigation in `src/components/Header.tsx`

## 🎨 Design System

### Colors

- Primary: Blue gradient (#3B82F6)
- Secondary: Gray tones
- Background: Light/Dark theme support
- Text: High contrast for accessibility

### Typography

- Font: Inter (Google Fonts)
- Headings: Bold weights for hierarchy
- Body: Regular weight for readability

### Spacing

- Consistent spacing using Tailwind's spacing scale
- Responsive padding and margins
- Grid gaps for layout structure

## 📱 Responsive Design

- **Mobile**: Single column layout, collapsible navigation
- **Tablet**: Two-column layouts where appropriate
- **Desktop**: Full multi-column layouts with hover effects

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript strict mode enabled
- ESLint configuration for code quality
- Prettier for code formatting
- Component-based architecture

## 🌟 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by pages
- **Lazy Loading**: Components load as needed
- **Minification**: Production builds are minified
- **Caching**: Static assets are cached

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js, TypeScript, and shadcn/ui
