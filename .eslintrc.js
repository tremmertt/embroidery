module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["react-app", "prettier"],
  plugins: ["react", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  rules: {
    "jsx-a11y/anchor-is-valid": [
      "off",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        trailingComma: "es5",
        semi: true,
        tabWidth: 2,
        jsxSingleQuote: false,
        singleQuote: false,
        useTabs: false,
      },
    ],
  },
};
