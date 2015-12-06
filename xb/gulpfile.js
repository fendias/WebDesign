'use strict';

var gulp = require('gulp'), 
browserify= require('gulp-browserify'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
 plumber = require('gulp-plumber'),
minifycss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  maps = require('gulp-sourcemaps');

//js
gulp.task("browserify", function(){
  return gulp.src("src/js/main.js")
      .pipe(plumber())
      .pipe(browserify())
      .pipe(concat('main.js'))
      .pipe(gulp.dest('public/js'));
});

//styles
gulp.task('styles', function() {
    return gulp.src(['src/sass/**/*.scss'])
        //.pipe(plumber())
        .pipe(compass({
            config_file: './config.rb',
            css: 'public/css',
            sass: 'src/sass',
            image: 'public/images'
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('public/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('public/css'));
});

gulp.task("copy",["styles"], function(){
    gulp.src(["src/images/**"])
        .pipe(gulp.dest('public/images'));
    return gulp.src(["src/fonts/**"])
        .pipe(gulp.dest('public/fonts'));
});

gulp.task("default", ["browserify", "styles", "copy"]);

gulp.task("watch", function(){
  gulp.watch(['src/**/*.*'], ['default']);
});

