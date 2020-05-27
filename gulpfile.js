var gulp = require('gulp');
var fileinclude = require('gulp-file-include'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css');
 
gulp.task('fileinclude', function () {
    // 适配page中所有文件夹下的所有html，排除page下的include文件夹中html
    gulp.src(['src/page/**/*.html', '!src/page/include/**.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'));
});

//定义一个less任务（自定义任务名称）
gulp.task('less', function () {
    gulp.src(['src/assets/css/*.less', '!src/assets/css/**/{reset,test}.less']) //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(cssmin()) //该任务调用的模块
        .pipe(gulp.dest('dist/assets/css')); //将会在src/css下生成index.css
    //gulp.watch('src/assets/css/*.less', ['less']); //定义默认任务
});

// gulp.task('watch', function () {
//     gulp.watch('src/page/**/*.html', ['fileinclude']);
//     gulp.watch('src/assets/css/*.less', ['less']);
// });

//gulp.task('default',['less']); //定义默认任务

