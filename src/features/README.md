# Features Directory

This directory contains all feature modules of the application. Each feature should be self-contained with its own components, hooks, and business logic. Features represent distinct functional areas of the application.

## Directory Structure

```
features/
  └── [feature-name]/        # Replace with your feature name (e.g., auth, dashboard)
      ├── api/                  # Feature-specific API calls and services
      ├── components/           # Feature-specific UI components
      ├── hooks/                # Feature-specific custom hooks
      ├── store/                # Feature-specific state management
      ├── utils/                # Feature-specific utilities and helpers
      └── types/                # Feature-specific TypeScript types and interfaces
```

## Best Practices

1. **Feature Isolation**: Keep features independent and self-contained

   - Avoid direct dependencies between features
   - Use shared components and utilities from `src/shared` for common functionality

2. **Clean API Surface**:

   - Export only necessary components and hooks through the feature's `index.ts`
   - Keep internal implementation details private

3. **Component Organization**:

   - Place feature-specific components in the `components` directory
   - Use shared components from `src/shared` for common UI elements
   - Create sub-folders for complex features with many components

4. **State Management**:

   - Keep feature-specific state within the feature boundary
   - Use the `store` directory for state management logic
   - Consider using React Context for feature-scoped state

5. **Type Safety**:
   - Define and export types in the `types` directory
   - Use TypeScript interfaces for API responses and data models
   - Maintain strict type checking
