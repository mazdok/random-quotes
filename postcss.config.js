// postcss.config.js
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./src/**/*.html", "./src/**/*.vue"],
  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});
module.exports = {
  rules: {
    test: /\.css$/,
    use: [
      "vue-style-loader",
      {
        loader: "css-loader",
        options: { importLoaders: 1 },
      },
      "postcss-loader",
    ],
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
