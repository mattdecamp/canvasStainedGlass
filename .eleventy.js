const CleanCSS = require("clean-css");
const svgSprite = require("eleventy-plugin-svg-sprite");

module.exports = function (eleventyConfig) {
  // Shh!
  eleventyConfig.setQuietMode(true);
  // Passthroughs
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");
  // TRANSFORMS //
  // minify HTML
  const htmlMinTransform = require("./src/transforms/html-min.js");
  const isProduction = process.env.ELEVENTY_ENV === "production";
  // html min only in production
  if (isProduction) {
    eleventyConfig.addTransform("htmlmin", htmlMinTransform);
  }
  // FILTERS //
  // Clean CSS and minify
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // PLUGINS //
  // SVG Sprite
    eleventyConfig.addPlugin(svgSprite, {
      path: "./src/assets/svg", // relative path to SVG directory
      // (MUST be defined when initialising plugin)
    });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      data: "data",
    },
    templateFormats: ["html", "njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
