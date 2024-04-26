import{src, dest, watch, } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);


export function css(cb){
        src('src/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css')) 


    cb()
}

export function dev(cb){
    watch('src/scss/**/*.scss', css)
    
    cb()
}