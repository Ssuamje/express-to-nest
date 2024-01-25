const common = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['prettier', 'jest'],
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'no-iterator': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
  },
};

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
  },
  overrides: [
    {
      ...common,
      files: ['**/*.js'],
      parserOptions: {
        ecmaVersion: 'latest',
      },
      excludedFiles: ['.eslintrc.js', '*.config.js'],
    },
    {
      ...common,
      files: ['**/src/**/*.ts', '**/test/**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      env: common.env,
      plugins: [...common.plugins, '@typescript-eslint'],
      extends: [
        ...common.extends,
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
      ],
      rules: {
        ...common.rules,
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
  ],
};
