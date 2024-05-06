import{src, dest, watch,series } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export function js(cb){
    src('src/js/app.js')
    .pipe(dest('build/js'))


    cb()
}

export function css(cb){
        src('src/scss/app.scss', {sourcemaps:true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css', {sourcemaps:true})) 


    cb()
}

export function dev(cb){
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)
    
    cb()
}

export default series(js, css, dev)