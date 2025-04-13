# Shared Directory

This directory contains all shared resources that can be used across different features.

## Directory Structure

```
shared/
  ├── components/         # Reusable UI components
  │   ├── atoms/            # Basic building blocks (Button, Input, etc.)
  │   ├── molecules/        # Combinations of atoms
  │   └── organisms/        # Complex components
  ├── hooks/              # Common custom hooks
  ├── utils/              # Utility functions
  ├── styles/             # Global styles and theme
  └── types/              # Common TypeScript types
```

## Best Practices

1. Keep components as generic and reusable as possible
2. Follow atomic design principles for component organization
3. Document component props and usage
4. Maintain consistent styling patterns
5. Write comprehensive tests for shared components

## Example Usage

```typescript
// Importing shared components
import { Button } from '@/shared/components/atoms/Button'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
import { formatDate } from '@/shared/utils/date'
```
