var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var rimraf = require('gulp-rimraf');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();


gulp.task('serve', ['build'], function(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    });
    
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('pages/**/*.html', browserSync.reload);
    gulp.watch('assets/**/*.css', browserSync.reload);
    gulp.watch('lib/**/*.js', ['build-js', browserSync.reload]);
});

gulp.task('build', ['build-js']);

gulp.task('clean-js', function(){
    return gulp.src('dist/**/*')
        .pipe(rimraf());
});

gulp.task('build-js', ['clean-js'], function(){
    return gulp.src('lib/**/*.js')
        .pipe(babel())
        // .pipe(sourcemaps.init())
        .pipe(concat('everything.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        // .pipe(sourcemaps.write())
        .pipe(rename('everything.min.js'))
        .pipe(gulp.dest('dist'));
});
