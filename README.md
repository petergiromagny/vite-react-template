# 🚀 React Vite.js Starter Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC.svg)](https://tailwindcss.com/)

A robust and efficient **React + Vite.js** template designed to accelerate your project development with best practices
and modern tooling. 🚀

## 📑 Table of Contents

- [Getting Started](#-getting-started)
  - [Using the Template](#-using-the-template-feature)
  - [Installation](#-install-dependencies)
  - [Development](#-start-the-development-server)
- [Project Structure](#-project-structure)
- [Technologies](#-technologies-used)
- [Code Quality](#-code-quality)
- [License](#-license)

## 🚀 Getting Started

### 📥 Using the Template Feature

To create a new repository from this template:

1. Click the **"Use this template"** button at the top of the repository page.
2. Follow the prompts to create your new repository.

### 📦 Install Dependencies

Navigate to your project directory and install the dependencies using your preferred package manager:

```bash
  # Using npm
  npm install
```

```bash
  # Using Yarn
  yarn install
```

```bash
  # Using pnpm
  pnpm install
```

### ▶️ Start the Development Server

Launch the development server with:

```bash
  # Using npm
  npm run dev
```

```bash
  # Using Yarn
  yarn dev
```

```bash
  # Using pnpm
  pnpm dev
```

### 🌍 Access the Application

Open your browser and navigate to:

🔗 [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

The project follows a feature-based architecture for better scalability and maintainability:

```
src/
├── features/              # Feature modules
│   ├── [feature-sample]/  # Example feature structure
│   │   ├── components/    # Feature-specific components
│   │   ├── hooks/         # Feature-specific hooks
│   │   ├── services/      # API services and business logic
│   │   ├── store/         # Feature state management
│   │   ├── types/         # Feature-specific types
│   │   ├── utils/         # Feature-specific utilities
│   │   └── index.ts       # Public API exports
├── shared/                # Shared resources
│   ├── components/        # Reusable UI components (atoms, molecules, organisms)
│   ├── hooks/             # Common custom hooks
│   ├── utils/             # Utility functions
│   ├── styles/            # Global styles
│   └── types/             # Shared TypeScript types
└── core/                  # Core application setup
    ├── config/            # App configuration
    ├── providers/         # Global providers
    ├── router/            # Routing configuration
    ├── store/             # Global state management
    └── types/             # Global TypeScript types
```

Each major directory contains its own README.md with detailed documentation:

- [`src/features/README.md`](src/features/README.md): Guidelines for creating and organizing feature modules
- [`src/shared/README.md`](src/shared/README.md): Documentation for shared components and utilities
- [`src/core/README.md`](src/core/README.md): Core application setup and configuration details

### Key Architecture Principles

1. **Feature-First Organization**:

   - Each feature is self-contained with its own components, hooks, and business logic
   - Features are independent and can be developed in isolation
   - Clear boundaries between different parts of the application

2. **Shared Resources**:

   - Common components follow Atomic Design principles (atoms, molecules, organisms)
   - Reusable hooks and utilities
   - Consistent styling patterns

3. **Core Configuration**:
   - Centralized application setup
   - Global state management
   - Routing configuration
   - Environment-aware configuration

## 🛠️ Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite.js**: A fast build tool and development server.
- **TypeScript**: Ensures type safety and enhances developer experience.
- **Tailwind CSS**: Offers utility-first CSS for rapid UI development.

## 🛡️ Code Quality

This template is configured with tools to maintain high code quality:

- **Husky**: Manages Git hooks to enforce code quality checks before commits.
- **ESLint**: Lints JavaScript and TypeScript code to adhere to best practices.
- **Prettier**: Formats code consistently across the project.
- **GitHub Actions**: Automates continuous integration workflows, including build and lint checks.

### Husky Configuration

Husky is set up to run pre-commit hooks that execute linting and formatting tasks, ensuring that only quality code is
committed.

### ESLint Configuration

The ESLint setup extends recommended configurations for JavaScript, TypeScript, and React. It includes plugins for
import management, React hooks, and integration with Prettier for consistent code formatting.

### Prettier Configuration

Prettier is configured with the following preferences:

- **Semi-Colons**: Disabled (`semi: false`)
- **Tab Width**: 2 spaces
- **Print Width**: 120 characters
- **Trailing Commas**: Enabled (`trailingComma: 'all'`)
- **JSX Single Quote**: Enabled (`jsxSingleQuote: true`)
- **Bracket Spacing**: Enabled (`bracketSpacing: true`)
- **Bracket Same Line**: Disabled (`bracketSameLine: false`)

### Continuous Integration

A GitHub Actions workflow is included to automate the following on pull requests:

1. **Dependency Installation**: Installs dependencies using `pnpm`.
2. **Code Formatting Check**: Runs Prettier to ensure code is properly formatted.
3. **Linting**: Executes ESLint to catch code issues.
4. **Build**: Builds the Vite.js application to verify successful compilation.

This setup ensures that code quality is maintained throughout the development lifecycle.

## 📄 License

This project is licensed under the **MIT License**. Feel free to use and modify it as per your needs.

---

🚀 **Start building your React application with confidence using this comprehensive starter template!** 🚀
