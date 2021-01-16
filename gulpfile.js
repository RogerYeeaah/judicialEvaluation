var gulp = require('gulp'),
    gulpPug = require('gulp-pug'),
    autoprefixer = require('gulp-autoprefixer'),
    gulpSass = require('gulp-sass'),
    cached = require('gulp-cached'),
    watch = require("gulp-watch");

gulp.task('watch', function (callback) {
    watch('original/sass/*.sass', gulp.series('styles'));
    watch('CC-BackendV3/original/sass/**/*.sass', gulp.series('backendStyles'));
    watch('original/views/*.pug', gulp.series('pug'));
    callback();
})

gulp.task('styles', function (callback) {
    gulp.src('original/sass/*.sass')    // 指定要處理的 Scss 檔案目錄
        .pipe(cached('css'))
        .pipe(gulpSass({          // 編譯 Scss
            outputStyle: ''
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('styles'))
    callback();
});


gulp.task('backendStyles', function (callback) {
    gulp.src('CC-BackendV3/original/**/*.sass')    // 指定要處理的 Scss 檔案目錄
        .pipe(cached('css'))
        .pipe(gulpSass({          // 編譯 Scss
            outputStyle: ''
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('CC-BackendV3/css'))
    callback();
});

gulp.task('pug', async function () {
    gulp.src('original/views/*.pug')
        .pipe(gulpPug({ pretty: true }))
        .pipe(gulp.dest("./"));
});