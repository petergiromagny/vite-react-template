# Features Directory

This directory contains all feature modules of the application. Each feature should be self-contained with its own components, hooks, and business logic.

## Directory Structure

```
features/
  └── [feature-name]/         # Replace with your feature name (e.g., auth, products)
      ├── api/                  # Feature-specific API calls
      ├── components/           # Feature-specific components
      ├── hooks/                # Feature-specific custom hooks
      ├── store/                # Feature-specific state management
      ├── utils/                # Feature-specific utilities
      ├── types/                # Feature-specific TypeScript types
      └── index.ts              # Public API exports
```

## Best Practices

1. Keep features isolated and independent
2. Export only what's necessary through the feature's `index.ts`
3. Use shared components from `src/shared` for common UI elements
4. Keep feature-specific logic within the feature boundary
5. Follow TypeScript best practices for type safety
6. Write tests for your feature's components and logic

## Example Usage

```typescript
// Importing from a feature
import { useAuth } from '@/features/auth'
import { ProductList } from '@/features/products/components'
```
