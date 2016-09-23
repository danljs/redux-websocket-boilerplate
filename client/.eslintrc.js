module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
  ],
  "rules": {
    "camelcase": 0,
    "strict": 0,
    "semi": 0,
    "no-console": "off",
    "react/require-extension": "off",
    "react/prop-types": 0,
    "max-len": [2, 140, 4],
  },
 "globals": {
    "window": true,
    "WebSocket": true,
    "URL": true,
    "btoa": true,
    "fetch": true,
    "document": true,
  },
};