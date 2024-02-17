const gulp = require('gulp');

const paths = {
    sass: './_assets/scss',
    sassFiles: './_assets/scss/*.scss',
    css: './assets/css',
    cssFiles: './_assets/css/*.css',
    jekyll: '.',
}

gulp.task('build:sass', () => {
    const sass = require('gulp-sass')(require('sass'));

    return gulp.src(paths.sassFiles)
        .pipe(sass())
        .pipe(gulp.dest(paths.css));
})

gulp.task('autoprefixer', () => {
    const autoprefixer = require('autoprefixer');
    const sourcemaps = require('gulp-sourcemaps');
    const postcss = require('gulp-postcss');

    return gulp.src(paths.cssFiles)
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.css));
})
