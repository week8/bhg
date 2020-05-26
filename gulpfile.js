var gulp = require('gulp');
var fileinclude = require('gulp-file-include'),
    less = require('gulp-less');
 
gulp.task('fileinclude', function () {
    // 适配page中所有文件夹下的所有html，排除page下的include文件夹中html
    gulp.src(['src/page/**/*.html', '!src/page/include/**.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('src/page/**/*.html', ['fileinclude']);
});

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/assets/css/**/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('dist/assets/css/**')); //将会在src/css下生成index.css
});

gulp.task('default',['testLess']); //定义默认任务