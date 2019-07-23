//引入gulp
var gulp = require("gulp");
//静态服务器
var connect = require("gulp-connect");
//合并文件
var concat = require("gulp-concat");
//编译scss
var sass = require("gulp-sass");


//编译scss为css
gulp.task("scss", gulp.series([], function () {
  gulp.src("app/assets/style/*.scss")
    .pipe(concat('main.scss'))
    .pipe(sass())
    .pipe(gulp.dest("app/assets/style"));
}))
// gulp.task("default", ['scss', 'route-iaas', 'watch', 'connect-dev'], function () {
//   console.log('执行完成');
// })