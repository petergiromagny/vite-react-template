# 🚀 React Vite.js Starter Template

A robust and efficient **React + Vite.js** template designed to accelerate your project development with best practices
and modern tooling. 🚀

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