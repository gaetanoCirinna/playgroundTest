const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const sass = require("gulp-sass");

const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require("gulp-concat");

gulp.task("sass", () => {
  return gulp
    .src("app/styles/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist"))
    .pipe(gulp.dest("./app/assets/styles"))

    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("scripts", () => {
  return gulp
    .src("./app/scripts/**/*.js")
    .pipe(concat("scripts.js"))

    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
        plugins: ["@babel/plugin-proposal-class-properties"],
      })
    )
    .pipe(concat("scripts.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist"))
    .pipe(gulp.dest("./app/assets/scripts"));
});

gulp.task("watch", () => {
  //Browsersync setup
  browserSync.init({
    server: {
      baseDir: "./app",
    },
  });

  // Qui i watcher
  gulp //css
    .watch("./app/styles/**/*.scss", gulp.parallel(["sass"]))
    .on("change", () => {
      browserSync.reload();
    });

  gulp // JS
    .watch("./app/scripts/**/*.js", gulp.parallel(["scripts"]))
    .on("change", () => {
      browserSync.reload();
    });

  gulp //HTML
    .watch("./app/*.html")
    .on("change", () => {
      browserSync.reload();
    });
});

gulp.task("default", gulp.series(["watch"]));
