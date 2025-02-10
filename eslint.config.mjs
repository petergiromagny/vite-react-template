// @ts-check

import globals from 'globals'
import eslint from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import tsEslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const compat = new FlatCompat()

const __dirname = dirname(fileURLToPath(import.meta.url))

export default tsEslint.config(
  pluginReact.configs.flat.recommended,
  eslint.configs.recommended,
  tsEslint.configs.stylisticTypeChecked,
  tsEslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
  },
  ...compat.extends('plugin:react-hooks/recommended'),
  ...compat.extends('plugin:import/recommended'),
  ...compat.extends('prettier'),
  {
    ignores: [
      './node_modules/**',
      '.idea/**',
      '.vscode/**',
      '.git/**',
      './dist/**',
      '**/*.js',
      '**/*.mjs',
      'eslint.config.mjs',
      'postcss.config.cjs',
      'tailwind.config.cjs',
      'tsconfig.tsbuildinfo',
    ],
  },
  { files: ['**/*.{ts,tsx}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },

    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      'react/react-in-jsx-scope': 'off',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/default': 'off',
      'import/export': 'error',
      'no-undef': 'off',

      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],

          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      'sort-imports': [
        'warn',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],
    },
  },
)
