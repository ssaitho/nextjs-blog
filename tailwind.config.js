const kebabcase = require('lodash.kebabcase');
const tokens = require('./javascript/tokens');

const colors = Object.fromEntries(Object
  .values(tokens.color)
  .map(({ attributes, value }) => [
    kebabcase(attributes.type), value
  ])
);

console.log(colors);

const fontSize = Object.fromEntries(Object
  .values(tokens.size)
  .map(({ attributes, value }) => [
    kebabcase(attributes.type), value
  ])
);

console.log(fontSize);

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
      fontSize,
    },
  },
  plugins: [],
}
