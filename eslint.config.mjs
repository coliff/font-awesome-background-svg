import js from '@eslint/js';

export default [
  {
    ignores: ['*.min.js', '**/node_modules/*'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2016,
      sourceType: 'script',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        // Node globals
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
      },
    },
    rules: {
      'no-const': 'off',
    },
  },
];
