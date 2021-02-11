
const { series, src, dest, watch, parallel, gulp } = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const clean = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const bsync = require('browser-sync').create();

var paths = {
	out: './dist/',

	styles: {
		src: './src/scss/style.scss'
	}
}

function css_comp(cb) {
  return src(paths.styles.src)
  .pipe(sass())
  .pipe(dest(paths.out))
  .pipe(bsync.stream())
  cb()
}

function minify(cb) {
  return src(paths.out + 'style.css')
  .pipe(autoprefixer())
  .pipe(clean())
  .pipe(dest(paths.out))
  cb()
}

function pugReloader(cb) {
  return src('src/*.pug')
  .pipe(pug())
  .pipe(dest(paths.out))
  .pipe(bsync.stream())
  cb()
}

function scripts(cb) {
	return src(['src/scripts/jquery.js', 'src/scripts/main.js'])
	.pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(dest(paths.out))
}

function imageOpti(cb) {
  return src(['./src/img/**/*.png', './src/img/**/*.jpg', './src/img/**/*.jpeg'])
  .pipe(imagemin())
  .pipe(dest(paths.out + 'img'))
  cb()
}

function serve(cb) {

  bsync.init({
    server: {
    	baseDir: './dist/'
    },
    port: 3000
  })

  watch('./src/**/*.pug', series('pugReloader'))
  watch('./src/**/*.js', series('scripts'))
  watch('./src/**/*.s[ac]ss', series('css_comp'))

  cb()
}

exports.default = serve;
exports.scripts = scripts;
exports.imageOpti = imageOpti;
exports.pugReloader = pugReloader;
exports.css_comp = css_comp;
exports.minify = minify;



exports.build = series(css_comp, parallel(minify, imageOpti));
