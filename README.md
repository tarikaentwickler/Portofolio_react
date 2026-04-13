
  # Portfolio Web App

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases the work and skills of Tarik Abaspahic, a full-stack developer specializing in modern web technologies.

## 🌟 Features

- **Multi-language Support**: Available in Bosnian (bs), English (en), and German (de)
- **Dark/Light Mode**: Automatic theme switching with user preference persistence
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI Components**: Built with ShadCN UI (Radix UI primitives)
- **Animated Background**: Dynamic particle animation effects
- **Contact Form**: Integrated EmailJS for direct contact functionality
- **Project Showcase**: Interactive project gallery with technology badges
- **Skills Section**: Visual representation of technical skills and technologies
- **Smooth Scrolling**: Enhanced navigation experience

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework with modern features
- **ShadCN UI** - High-quality React components built on Radix UI
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful, consistent icon library
- **React Icons** - Popular icon packs (Simple Icons, etc.)

### Animations & Interactions
- **Motion** - Powerful animation library for React
- **Canvas Confetti** - Celebration effects
- **TW Animate CSS** - Additional CSS animations

### Forms & Data
- **React Hook Form** - Performant forms with easy validation
- **EmailJS** - Client-side email sending service
- **Date-fns** - Modern JavaScript date utility library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ui/           # ShadCN UI components
│   │   ├── About.tsx     # About section
│   │   ├── AnimatedBackground.tsx
│   │   ├── Contact.tsx   # Contact form with EmailJS
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx      # Landing section
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx  # Project showcase
│   │   └── Skills.tsx    # Skills and technologies
│   ├── context/
│   │   ├── DarkModeContext.tsx
│   │   └── LanguageContext.tsx
│   ├── styles/
│   │   ├── fonts.css
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   ├── translations.ts   # Multi-language support
│   └── App.tsx
├── main.tsx              # Application entry point
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **pnpm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tarikaentwickler/Portofolio_react.git
   cd Portofolio_react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Setup** (for contact form functionality)
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Multi-Language Support

The application supports three languages:

- **Bosnian (bs)** - Default language
- **English (en)**
- **German (de)**

Language switching is available in the navigation menu and persists user preferences.

## 🎨 Design System

### Color Scheme
- **Light Mode**: Clean white backgrounds with dark text
- **Dark Mode**: Dark backgrounds with light text
- **Accent Colors**: Purple/blue theme with proper contrast ratios

### Typography
- **Primary Font**: System fonts for optimal performance
- **Font Sizes**: Responsive scaling from mobile to desktop
- **Font Weights**: Normal (400) and Medium (500)

### Components
- **Cards**: Clean, rounded containers with subtle shadows
- **Buttons**: Primary and secondary variants with hover states
- **Badges**: Technology tags with consistent styling
- **Forms**: Accessible form controls with validation

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Vite Configuration
- Path aliases: `@/` points to `src/`
- Asset handling: SVG and CSV files supported
- React and Tailwind plugins enabled

### Tailwind CSS v4
- Modern `@source` directive for content scanning
- Custom CSS properties for theming
- Dark mode support with CSS custom properties

## 📧 Contact Form

The contact form uses EmailJS for client-side email sending. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a service, email template, and get your credentials
3. Add the credentials to your `.env` file

## 🖼️ Assets

- **Profile Image**: Personal photo in `src/app/components/assets/`
- **Project Images**: Screenshots in `public/projects/`
- **Icons**: Lucide React and React Icons for consistent iconography

## 📄 Sections

### Hero Section
- Personal introduction with profile image
- Call-to-action buttons
- Social media links

### About Section
- Personal story and background
- Career goals and motivation
- Downloadable CV and cover letter

### Skills Section
- Frontend technologies (React, TypeScript, etc.)
- Backend technologies (Node.js, databases)
- Tools and operating systems
- Visual skill representation with icons

### Projects Section
- Featured projects with descriptions
- Technology stacks
- GitHub links and live demos
- Project screenshots

### Contact Section
- Contact information
- Functional contact form
- Social media links

## 🎯 Performance Features

- **Vite**: Fast development and optimized production builds
- **Code Splitting**: Automatic route-based code splitting
- **Asset Optimization**: Image and font optimization
- **CSS Optimization**: Tailwind's purging and minification

## 🔒 Security

- Client-side email sending (no server required)
- Environment variables for sensitive data
- No direct database connections
- Secure form validation

## 📚 Dependencies Overview

### Core Dependencies
- `react` & `react-dom`: UI framework
- `typescript`: Type safety
- `@radix-ui/*`: UI primitives
- `tailwindcss`: Styling
- `lucide-react`: Icons

### Additional Libraries
- `motion`: Animations
- `@emailjs/browser`: Email functionality
- `react-hook-form`: Form handling
- `date-fns`: Date utilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project includes components from:
- [ShadCN UI](https://ui.shadcn.com/) (MIT License)
- Photos from [Unsplash](https://unsplash.com) (Unsplash License)

## 🙏 Acknowledgments

- **Figma Design**: Original design from Figma community
- **ShadCN**: For the excellent UI component library
- **Vite Team**: For the amazing build tool
- **React Community**: For the powerful framework

## 📞 Contact

**Tarik Abaspahic**
- Email: direkt@t-abaspahic.de
- LinkedIn: https://www.linkedin.com/in/tarik-abaspahic-8a6520352
- GitHub: https://github.com/tarikaentwickler

---

*Built with ❤️ using modern web technologies*
  