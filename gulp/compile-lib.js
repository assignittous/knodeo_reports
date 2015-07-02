
/*

 * Compile lib folder

`gulp compile-lib`


---
 */
var coffee, del, gulp, plumber, sourcePath, targetPath;

del = require("del");

gulp = require("gulp");

coffee = require("gulp-coffee");

plumber = require("gulp-plumber");

sourcePath = ["./src/**/*.coffee", "!./src/cli.coffee"];

targetPath = "./";

module.exports = function() {
  gulp.src(sourcePath).pipe(plumber()).pipe(coffee({
    bare: true
  })).pipe(gulp.dest(targetPath));
};

module.exports.watch = sourcePath;
