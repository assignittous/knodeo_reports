
/*

 * Compile bin folder

`gulp compile-bin`


---
 */
var binPath, coffee, gulp, inject, plumber, targetPath, watchPath;

gulp = require("gulp");

coffee = require("gulp-coffee");

plumber = require("gulp-plumber");

inject = require("gulp-inject-string");

binPath = ["./src/cli.coffee"];

watchPath = ["./src/cli.coffee"];

targetPath = "./";

module.exports = function() {
  gulp.src(binPath).pipe(plumber()).pipe(coffee({
    bare: true
  })).pipe(inject.prepend("#!/usr/bin/env node\n")).pipe(gulp.dest(targetPath));
};

module.exports.watch = watchPath;
