var rootDestPath = "dist/";
var jsSrcPath = "lib/";
var jsDestPath = rootDestPath + "lib/";
var cssSrcPath = "assets/";
var cssDestPath = rootDestPath + "assets/";

var gulp = require("gulp");
var del = require("del");
var vinylpaths = require("vinyl-paths");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var cssnano = require("gulp-cssnano");
var htmlreplace = require("gulp-html-replace")
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


gulp.task("default", ["build"]);
gulp.task("build", ["build-js", "build-html-templates", "build-css", "build-index-html"]);
gulp.task("clean", function(){
    return del("dist/*");
});


gulp.task("build-js", ["clean-js"], function(){
    return gulp.src(jsSrcPath + "**/*.js")
        .pipe(sourcemaps.init())
        .pipe(concat("app.js"))
        .pipe(babel())
        .pipe(gulp.dest(jsDestPath))
        .pipe(uglify())
        .pipe(rename("app.min.js"))
        .pipe(sourcemaps.write(".", { includeContent: false, sourceRoot: "../../lib"}))
        .pipe(gulp.dest(jsDestPath));
});

gulp.task("clean-js", function(){
    return del([jsDestPath + "app.js", jsDestPath + "app.min.js", jsDestPath + "app.min.js.map"]);
});


gulp.task("build-html-templates", ["clean-html-templates"], function(){
    return gulp.src(jsSrcPath + "**/*.html")
        .pipe(gulp.dest(jsDestPath));
});

gulp.task("clean-html-templates", function(){
    return del([jsDestPath + "**/*", "!**/*.js"]);
});


gulp.task("build-css", ["clean-css"], function(){
    return gulp.src(cssSrcPath + "**/*.css")
        .pipe(concat("styles.css"))
        .pipe(gulp.dest(cssDestPath))
        .pipe(sourcemaps.init())
        .pipe(cssnano({safe: true}))
        .pipe(rename("styles.min.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(cssDestPath));
});

gulp.task("clean-css", function(){
    return del([cssDestPath]);
});


gulp.task("build-index-html", ["clean-index-html"], function(){
    return gulp.src("*.html")
        .pipe(htmlreplace({
            js: [jsDestPath + "app.min.js"],
            css: [cssDestPath + "styles.min.css"]
        }))
        .pipe(gulp.dest(rootDestPath));
});

gulp.task("clean-index-html", function(){
    return del([rootDestPath + "*.html"]);
});


