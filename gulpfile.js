const gulp = require('gulp');

const paths = {
    sass: './_assets/scss',
    sassFiles: './_assets/scss/**/*.scss',
    preCss: './_assets/css',
    preCssFiles: './_assets/css/**/*.css',
    postCss: './assets/css',
    jekyll: '.',
}

gulp.task('build:sass', () => {
    const sass = require('gulp-sass')(require('sass'));

    return gulp.src(paths.sassFiles)
        .pipe(sass())
        .pipe(gulp.dest(paths.preCss));
})

gulp.task('autoprefixer', () => {
    const autoprefixer = require('autoprefixer');
    const sourcemaps = require('gulp-sourcemaps');
    const postcss = require('gulp-postcss');

    return gulp.src(paths.preCssFiles)
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.preCss));
})

gulp.task('minify-css', () => {
    const cleanCSS = require('gulp-clean-css');

    return gulp.src(paths.preCssFiles)
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(paths.postCss));
});

gulp.task('build:css', gulp.series('build:sass', 'autoprefixer', 'minify-css'));

gulp.task('default', gulp.series('build:css'));

gulp.task('watch', gulp.series('default', () => {
    gulp.watch(paths.sassFiles, gulp.series('default'));
}))