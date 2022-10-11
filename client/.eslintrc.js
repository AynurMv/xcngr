module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-restricted-exports': 0,
    'react/prop-types': 0,
    'no-console': 0,
    'react/jsx-no-constructed-context-values': 0,
    'default-param-last': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/jsx-props-no-spreading': 0,
    'eslint-disable-next-line': 0,
    'max-len': 0,
    'no-restricted-syntax': 0,
    'tguard-for-in': 0,
    'no-unused-expressions': 0,
    eqeqeq: 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-undef': 0,
  },
};
