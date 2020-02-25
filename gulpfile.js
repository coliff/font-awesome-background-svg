const gulp = require("gulp");
const postcss = require("gulp-postcss");
const concatCss = require("gulp-concat-css");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

gulp.task("combine", function() {
  return gulp
    .src("src/**/*.css")
    .pipe(concatCss("fa.css"))
    .pipe(gulp.dest("dist/"));
});

gulp.task("postcss", done => {
  gulp
    .src("dist/fa.css")
    .pipe(postcss())
    .pipe(gulp.dest("dist/"));
  done();
});

gulp.task("rename", done => {
  gulp
    .src(["dist/fa.css"])
    .pipe(rename("fa.min.css"))
    .pipe(gulp.dest("dist/"));
  done();
});

gulp.task("minify", done => {
  gulp
    .src("dist/fa.min.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/"));
  done();
});

gulp.task("default", gulp.series("postcss"));
