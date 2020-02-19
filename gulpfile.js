const gulp = require("gulp");
const postcss = require("gulp-postcss");

gulp.task("postcss", done => {
  gulp
    .src("fa.css")
    .pipe(postcss())
    .pipe(gulp.dest("dist/css/"));
  done();
});

gulp.task("default", gulp.series("postcss"));
