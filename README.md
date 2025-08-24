# 🚀 Nishant Khandhar - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, showcasing my skills, experience, and projects as a Computer Science graduate student.

![Portfolio Preview](./public/images/profile2.png)

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Seamless theme switching with system preference support
- **Smooth Animations**: Enhanced user experience with GSAP and Lenis
- **Glass Morphism**: Modern UI with backdrop blur effects

### 🌙 **Advanced Theme System**
- **No Theme Flash**: Instant theme application on page load
- **Persistent Preferences**: Theme choice saved in localStorage
- **Default Dark Mode**: Professional dark theme as default
- **Smooth Transitions**: Fluid theme switching animations

### 📱 **Sections**
- **Hero Section**: Professional introduction with availability status
- **About**: Personal introduction and key statistics
- **Education**: Academic background with detailed coursework
- **Work Experience**: Professional experience with achievements
- **Skills**: Technical skills with visual indicators
- **Projects**: Portfolio of 10+ projects with live demos
- **Contact**: Multiple ways to get in touch

### 🛠️ **Technical Features**
- **Smooth Scrolling**: Lenis for buttery smooth scroll experience
- **Interactive Navigation**: Active section highlighting
- **Horizontal Scroll**: Projects section with custom scroll controls
- **Form Validation**: Contact form with proper validation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Lazy loading and optimized images

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **Lenis** - Smooth scrolling library

### **UI/UX**
- **Material Symbols** - Google's icon library
- **Custom Components** - Reusable UI components
- **Responsive Grid** - CSS Grid and Flexbox
- **Glass Morphism** - Modern design effects

### **Development Tools**
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **Tailwind Scrollbar** - Custom scrollbar styling

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nishant-k02/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── files/
│   │   └── resume.pdf          # Downloadable resume
│   └── images/                 # Project images and icons
├── src/
│   ├── components/
│   │   ├── About.jsx           # About section
│   │   ├── Button.jsx          # Reusable button components
│   │   ├── Contact.jsx         # Contact form and info
│   │   ├── Education.jsx       # Education timeline
│   │   ├── EducationCard.jsx   # Individual education card
│   │   ├── Experience.jsx      # Work experience section
│   │   ├── ExperienceCard.jsx  # Individual experience card
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Landing section
│   │   ├── Navbar.jsx          # Navigation menu
│   │   ├── ProjectCard.jsx     # Individual project card
│   │   ├── SkillCard.jsx       # Individual skill card
│   │   ├── Skills.jsx          # Skills showcase
│   │   ├── ThemeToggle.jsx     # Theme switch button
│   │   └── Work.jsx            # Projects section
│   ├── contexts/
│   │   └── ThemeContext.jsx    # Theme state management
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles
│   └── main.jsx                # App entry point
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

## 🎨 Theme System

### **How It Works**
1. **HTML Script**: Applies theme immediately on page load
2. **React Context**: Manages theme state across components
3. **localStorage**: Persists user preference
4. **CSS Classes**: Tailwind's dark mode implementation

### **Theme Features**
- ✅ No flash of wrong theme on refresh
- ✅ Instant theme switching
- ✅ System preference detection
- ✅ Persistent user choice
- ✅ Default dark mode

## 🌟 Key Components

### **ThemeProvider**
```jsx
// Global theme state management
<ThemeProvider>
  <App />
</ThemeProvider>
```

### **Education & Experience Cards**
- Interactive cards with hover effects
- Tech stack tags
- Detailed information display
- Responsive grid layout

### **Project Showcase**
- Horizontal scrolling gallery
- Live project links
- Technology tags
- Responsive design

### **Skills Display**
- Visual skill indicators
- Categorized technologies
- Interactive hover effects

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm, md, lg, xl responsive breakpoints
- **Touch Friendly**: Mobile-optimized interactions
- **Performance**: Optimized images and lazy loading

## 🔧 Customization

### **Adding New Projects**
Edit `src/components/Work.jsx`:
```jsx
const works = [
  {
    imgSrc: "/images/your-project.jpg",
    title: "Your Project Title",
    tags: ["React", "Node.js", "MongoDB"],
    projectLink: "https://your-project-link.com",
  },
  // ... other projects
];
```

### **Updating Skills**
Edit `src/components/Skills.jsx`:
```jsx
const skillItem = [
  {
    imgSrc: '/images/your-skill.svg',
    label: 'Your Skill',
    desc: 'Description'
  },
  // ... other skills
];
```

### **Theme Colors**
Customize colors in `tailwind.config.js` and `src/index.css`.

⭐ **Star this repository** if you found it helpful!

Built with ❤️ by [Nishant Khandhar](https://github.com/nishant-k02)