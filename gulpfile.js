let { src, dest, watch, task, series } = require("gulp");
let sass = require("gulp-sass")(require("sass"));
let purgecss = require("gulp-purgecss");

task("sassCompiling", function () {
  return src("src/sass/index.scss")
    .pipe(sass())
    .pipe(dest("src/css/compiledCss/"));
});
task("purgingCss", function () {
  return src("src/css/compiledCss/*.css")
    .pipe(
      purgecss({
        content: ["src/**/*.js"],
      })
    )
    .pipe(dest("src/css/purgeCss/"));
});

task("watchingSass", function () {
  watch(
    ["src/sass/*.scss", "src/**/*.js"],
    series("sassCompiling", "purgingCss")
  );
});
exports.default = series("sassCompiling", "purgingCss", "watchingSass");
