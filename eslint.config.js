// @ts-check

import react from '@eslint-react/eslint-plugin'
import js from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import pluginRouter from '@tanstack/eslint-plugin-router'
import * as tsParser from '@typescript-eslint/parser'
import love from 'eslint-config-love'
import eslintConfigPrettier from 'eslint-config-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import ts_eslint from 'typescript-eslint'

export default ts_eslint.config(
  { ignores: ['dist', 'src/client/routeTree.gen.ts'] },
  {
    extends: [
      js.configs.recommended,
      ...ts_eslint.configs.recommendedTypeChecked,
      ...pluginQuery.configs['flat/recommended'],
      ...pluginRouter.configs['flat/recommended'],
      eslintConfigPrettier,
      {
        ...love,
        files: ['**/*.js', '**/*.ts']
      },
      {
        files: ['**/*.{ts,tsx}'],
        ...react.configs['recommended-type-checked'] // <-- Requires type information
      }
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/only-throw-error': 'off',
      complexity: 'off'
    }
  }
)
