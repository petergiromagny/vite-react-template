// @ts-check

import { fixupPluginRules } from '@eslint/compat'
import globals from 'globals'
import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const patchedReactHooksPlugin = fixupPluginRules(eslintPluginReactHooks)

const __dirname = dirname(fileURLToPath(import.meta.url))

const baseConfig = {
  name: 'base',
  extends: [eslint.configs.recommended],
  plugins: {
    prettier: prettierPlugin,
  },
  languageOptions: {
    globals: {
      ...globals.builtin,
      ...globals.browser,
      ...globals.es2025,
    },

    parser: tsParser,
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
  },

  rules: {
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-undef': 'off',
  },
}

const typescriptConfig = {
  name: 'typescript',
  extends: [...tsEslint.configs.stylisticTypeChecked, ...tsEslint.configs.recommendedTypeChecked],
  plugins: {
    import: importPlugin,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    '@typescript-eslint/no-empty-function': 'off',

    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'off',
    'import/export': 'error',

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
}

const reactConfig = {
  name: 'react',
  extends: [eslintPluginReact.configs.flat['jsx-runtime']],
  plugins: {
    'react-hooks': patchedReactHooksPlugin,
    'react-refresh': eslintPluginReactRefresh,
  },

  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}

const eslintConfig = tsEslint.config(baseConfig, typescriptConfig, reactConfig)

eslintConfig.map((config) => {
  config.files = ['src/**/*.{ts,tsx}']
})

export default eslintConfig
