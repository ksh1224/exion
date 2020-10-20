module.exports = {
  root: true,
  extends: ['airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  "ecmaFeatures": {
    "jsx": true,
  },
  rules: {
    "no-undef": "off",
    "react/jsx-props-no-spreading": "off",
    "max-len": "off",
    "consistent-return": "off",
    "import/prefer-default-export": "off",
    "no-return-await": "off",
    // "class-methods-use-this": "off",
    // "@typescript-eslint/no-unused-vars": ["warn"],
    // "@typescript-eslint/quotes": "off",
    // "max-len": "off",
    // "@typescript-eslint/no-unused-vars": "off",
    // "arrow-parens": "off",
    // "@typescript-eslint/naming-convention": "off",
    // "import/no-useless-path-segments": "off",
    // "import/no-cycle": "off",
    // "no-nested-ternary": "off",
    // "prefer-destructuring": "off",
  },
  settings: { 
    "import/resolver": { 
      "node": { 
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
       }
     }
   }
};
