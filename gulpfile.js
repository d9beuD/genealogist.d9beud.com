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
        .pipe(gulp.dest(paths.postCss));
})

gulp.task('default', gulp.series('build:sass', 'autoprefixer'));

gulp.task('watch', gulp.series('default', () => {
    gulp.watch(paths.sassFiles, gulp.series('default'));
}))