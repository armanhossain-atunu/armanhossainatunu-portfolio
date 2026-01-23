# Arman Hossain Atunu Portfolio - React Version

A modern, responsive portfolio website built with React.js, featuring dark/light theme toggle, smooth animations, and a clean design.

## Features

- ✨ Modern React.js architecture with functional components and hooks
- 🎨 Tailwind CSS for styling with custom design system
- 🌙 Dark/Light theme toggle with persistent storage
- 📱 Fully responsive design
- 🎭 Smooth animations and hover effects
- 📧 Contact form with state management
- 🎯 Clean component structure and reusable code

## Tech Stack

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - State management for theme
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Outfit font family)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd arman-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── About.js          # About section component
│   ├── BackgroundElements.js # Background visual effects
│   ├── Contact.js        # Contact form and info
│   ├── Hero.js          # Hero/landing section
│   ├── Navbar.js        # Navigation component
│   ├── Projects.js      # Projects showcase
│   ├── Skills.js        # Technical skills grid
│   ├── SocialSidebar.js # Fixed social links sidebar
│   └── TechBanner.js    # Technology logos banner
├── contexts/
│   └── ThemeContext.js  # Theme management context
├── App.js               # Main app component
├── index.js            # React entry point
└── index.css           # Global styles and animations
```

## Customization

### Colors
The color scheme is defined in the Tailwind config within `public/index.html`. Main colors:
- Primary: `#C026D3` (Fuchsia)
- Accent Pink: `#EC4899`
- Accent Purple: `#A855F7`

### Content
Update the content in each component file:
- Personal info in `Hero.js` and `About.js`
- Skills in `Skills.js`
- Projects in `Projects.js`
- Contact info in `Contact.js`

### Images
Replace the image URLs in the components with your own images.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Deployment

Build the project for production:

```bash
npm run build
```

The build folder will contain the optimized production files ready for deployment.

## License

This project is open source and available under the [MIT License](LICENSE).