/**
 * Configuração sem React e JSX. Para instalar dependências use o seguinte comando e atualizar o comando de lintar:
 * @example npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier
 * @example "lint": "eslint --fix --ext .ts,.js ./src/",
 */
module.exports = {
    root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,  // Permite uso do ECMAScript moderno
    sourceType: 'module',  // Permite o uso de imports
    ecmaFeatures: { jsx: true },
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier',
  ],
  plugins: ['prettier', 'react', 'react-hooks'],
  rules: {
    "prettier/prettier": ["error", {
      "semi": false,
      "singleQuote": true,
      "trailingComma": "all",
    }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/interface-name-prefix': [2, 'always'],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': ["error", {
      "ignoreRestSiblings": true
    }],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};