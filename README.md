# Pepagora Product Form

A modern, responsive product form built with React, TypeScript, and Tailwind CSS. This application provides a user-friendly interface for managing product information with a clean and intuitive design.

## 🚀 Features

- Responsive design that works on all devices
- Form validation and error handling
- Modern UI with Tailwind CSS
- Type-safe with TypeScript
- Built with Vite for fast development and builds

## 🛠️ Tech Stack & Libraries

### Core Technologies
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React 19](https://react.dev/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

### Key Dependencies
- **UI Components**
  - [@heroicons/react](https://heroicons.com/) - Beautiful hand-crafted SVG icons

### Development Tools
- **Code Quality**
  - [ESLint](https://eslint.org/) - JavaScript/TypeScript linter
- **CSS Processing**
  - [PostCSS](https://postcss.org/) - CSS processing
  - [Autoprefixer](https://github.com/postcss/autoprefixer) - Add vendor prefixes to CSS rules
- **Package Manager**: npm

## ⚡ Vite Setup

This project was bootstrapped with Vite. Here's how to set it up:

1. **Create a new Vite project** (already done for this project):
   ```bash
   npm create vite@latest pepagora-product-form -- --template react-ts
   cd pepagora-product-form
   ```

2. **Install additional dependencies** (already installed in this project):
   ```bash
   # Core dependencies
   npm install react react-dom
   
   # UI & Styling
   npm install -D tailwindcss postcss autoprefixer @heroicons/react
   
   # Development tools
   npm install -D @types/react @types/react-dom @vitejs/plugin-react
   ```

3. **Vite Configuration** (already configured in `vite.config.ts`):
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
   })
   ```

4. **PostCSS Configuration** (already configured in `postcss.config.js`):
   ```javascript
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```

5. **Tailwind CSS Setup** (already configured in `tailwind.config.js`):
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

6. **Import Tailwind in your CSS** (already done in `src/index.css`):
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pepagora-product-form.git
   cd pepagora-product-form
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
pepagora-product-form/
├── public/              # Static files
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components
│   ├── constants/       # Application constants
│   └── modules/         # Feature modules
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License



