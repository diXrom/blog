module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-param-reassign': ['off'] /* 
    'react/jsx-uses-react': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
    'react/no-unescaped-entities': ['off'],
     */,
    'no-underscore-dangle': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/function-component-definition': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react/require-default-props': ['off'],
    'react/state-in-constructor': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        arrowParens: 'always',
        singleQuote: true,
        printWidth: 100,
        jsxBracketSameLine: false,
        trailingComma: 'es5',
      },
    ],
  },
};
