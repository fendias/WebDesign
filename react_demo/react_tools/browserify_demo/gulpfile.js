var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream'); //把browserify的输出转化为gulp可接受的输入
var reactify = require('reactify');

gulp.task('jsx', function() {
	browserify({
		entries: ['./app.jsx'],
		transform: [reactify]
	})
		.bundle() //多个文件输出一个文件
		.pipe(source('app.js')) //先用source处理为gulp可以接受的输入
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['jsx']);