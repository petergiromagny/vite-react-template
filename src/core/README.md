# Core Directory

This directory contains core application setup and configuration.

## Directory Structure

```
core/
  ├── config/           # Application configuration
  │   ├── constants.ts    # Global constants
  │   └── env.ts          # Environment configuration
  ├── providers/        # Global providers
  │   ├── app.tsx         # Root app provider
  │   └── theme.tsx       # Theme provider
  ├── router/           # Routing configuration
  │   ├── routes.ts       # Route definitions
  │   └── index.ts        # Router setup
  ├── store/            # Global state management
  │   └── index.ts        # Store configuration
  └── types/            # Global TypeScript types
      └── index.ts        # Type definitions
```

## Best Practices

1. Keep configuration centralized and environment-aware
2. Implement proper error boundaries and fallbacks
3. Configure routing with code-splitting in mind
4. Maintain clean dependency injection
5. Document configuration options

## Example Usage

```typescript
// Importing core functionality
import { routes } from '@/core/router'
import { AppProvider } from '@/core/providers/app'
import { ENV } from '@/core/config/env'
```
