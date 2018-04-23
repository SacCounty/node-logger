let gulp = require("gulp");

let paths = {
    js: [
        "gulpfile.js",
        "logger.js"
    ]
};

let eslint = require("gulp-eslint");

gulp.task("eslint", function() {
    gulp.src(paths.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
