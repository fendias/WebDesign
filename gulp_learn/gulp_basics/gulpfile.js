'use strict'; //使用严格的编译方法

var gulp = require('gulp'), 
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
     del = require('del');

//定义task，第一个参数是任务名
gulp.task("concatScripts", function(){
  //gulp.src可以接受数组和单独的字符串，注意js文件的顺序
  //pipe类似unix中管道的概念，前面的输出作为后面的输入，这里gulp.src的输出作为concat()的输入
  //concat()接受的字符串参数是合并后的文件名
  //gulp.dest()指定文件夹
  return gulp.src([
    'js/jquery.js',
    'js/sticky/jquery.sticky.js',
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

gulp.task("compileSass", function(){
  return gulp.src('scss/application.scss')
    .pipe(maps.init()) //初始化maps
    .pipe(sass())
    .pipe(maps.write('./')) //输出source maps文件路径是相对于输出的css文件路径的，这里让source maps也在css文件夹内
    .pipe(gulp.dest('css'));
});

gulp.task("watchFiles", function(){
  gulp.watch(['scss/**/*.scss'], ['compileSass']);
  gulp.watch('js/main.js', ['concatScripts']);
});

gulp.task("clean", function(){
  del(['dist', 'css/application.css*', 'js/app*.js*']);
});

gulp.task("build", ["minifyScripts", "compileSass"], function(){
  return gulp.src(["css/application.css", "js/app.min.js",
                  "index.html", "img/**", "fonts/**"], {base: './'})
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);

//默认task，第二个参数是依赖任务，依赖任务会在当前任务之前执行
gulp.task("default", ["clean"], function(){
  gulp.start('build');
});