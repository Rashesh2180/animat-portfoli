# Animated Portfolio - Next.js

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Full Animation Hero Section** - Animated background with yellow-themed colors
- 📝 **Animated Text** - Linear walk animation left to right (continuous)
- 🌓 **Dark/Light Mode** - Toggle with smooth transitions and persistence
- 🌀 **Scroll Indicator** - Circular element in bottom left that rotates clockwise/anticlockwise based on scroll direction
- 👋 **Say Hello Button** - Hover animation where text jumps from top to bottom one by one
- 🍔 **Full Screen Menu** - Opens from right-top to left-bottom with smooth X/Y expand animation
- 📱 **Responsive Design** - Works beautifully on all devices
- ⚡ **Static Site Generation** - Optimized for static hosting

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

Build a static export:

```bash
npm run build
```

This will generate an `out` directory with your static site ready to deploy.

## Project Structure

```
├── app/
│   ├── contexts/          # Theme context provider
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── Header.tsx         # Header with logo, theme toggle, buttons
│   ├── Hero.tsx           # Hero section with animations
│   ├── Menu.tsx           # Full-screen menu
│   ├── SayHelloButton.tsx # Animated "Say Hello" button
│   └── ScrollIndicator.tsx # Circular scroll indicator
├── next.config.js         # Next.js configuration (static export)
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React Context** - Theme management

## License

MIT



