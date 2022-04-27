const kebabcase = require('lodash.kebabcase');
const tokens = require('./javascript/tokens');

const colors = Object.fromEntries(Object
  .values(tokens.color)
  .map(({ attributes, value }) => [
    kebabcase(attributes.type), value
  ])
);


module.exports = {
  mode: "jit",
  purge: [
      "pages/*.{js,ts,jsx,tsx}",
      "pages/**/*.{js,ts,jsx,tsx}",
      "components/*.{js,ts,jsx,tsx}",
      "components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}
