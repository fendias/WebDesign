'use strict';

var gulp = require('gulp'), 
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  maps = require('gulp-sourcemaps'),
     del = require('del'),
 connect = require("gulp-connect"), //Runs a local dev server
    open = require("gulp-open"); //Open a URL in a web browser

var config = {
    port: 9000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        images: './src/images/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
};

//Start a local development server
gulp.task("connect", function(){
    connect.server({
        root: ['.'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

//Open url in web browser
gulp.task('open', ['connect'], function () {
    gulp.src('index.html')
        //.pipe(open({ uri: config.devBaseUrl+':'+config.port+'/', app: 'Google Chrome'}));
        .pipe(open({ uri: config.devBaseUrl+':'+config.port+'/'}));
});

gulp.task("concatScripts", function(){
  return gulp.src([
    'js/jquery-1.11.3.min.js',
    'js/jquery.sequenceEqual.js',
    'js/jquery.easyui.min.js',
    //'js/ejs_production.js',
    'js/artTemplate.js',
    'js/bootstrap.js',
    'js/scrollbar.js',
    'js/tabs.js',
    'js/main.js'])
  .pipe(maps.init())
  .pipe(concat("app.js"))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", ["concatScripts"], function(){
  return gulp.src("js/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task("watchFiles", function(){
  gulp.watch(['js/main.js', 'js/scrollbar.js', 'js/tabs.js'], ['concatScripts']);
});

gulp.task("clean", function(){
  del(['dist', 'js/app*.js*']);
});

gulp.task("build", ["minifyScripts"], function(){
  return gulp.src(["css/**", "js/app.min.js", "js/html5shiv.min.js", "js/respond.min.js", "js/modernizr-2.8.3.js",
                  "index.html", "img/**", "fonts/**"], {base: './'})
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);

gulp.task("default", ["clean"], function(){
  gulp.start('build');
});
