const {
  src,
  dest,
  task,
  series,
  watch,
  parallel
} = require("gulp");
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const gulpif = require('gulp-if');

const {SRC_PATH ,DIST_PATH ,STYLES_LIBS ,JS_LIBS} = require('./gulp.config')

const env = process.env.NODE_ENV;


sass.compiler = require('node-sass');

task('clean', () => {
  return src(`${DIST_PATH}/**/*`, {
    read: false
  }).pipe(rm())
})

task('copy:html', () => {
    return src(`${SRC_PATH}/*.html`)
    .pipe(dest(`${DIST_PATH}`))
    .pipe(reload({ stream: true }));
});

task('copy:fonts', () => {
    return src(`${SRC_PATH}/fonts/*`)
    .pipe(dest(`${DIST_PATH}/fonts`))
    .pipe(reload({ stream: true }));
});

task('copy:png', () => {
    return src(`${SRC_PATH}/img/*.png`)
    .pipe(dest(`${DIST_PATH}/img`))
    .pipe(reload({ stream: true }));
});

task('copy:jpg', () => {
    return src(`${SRC_PATH}/img/*.jpg`)
    .pipe(dest(`${DIST_PATH}/img`))
    .pipe(reload({ stream: true }));
});

task('copy:mp4', () => {
  return src(`${SRC_PATH}/img/*.mp4`)
  .pipe(dest(`${DIST_PATH}/img`))
  .pipe(reload({ stream: true }));
});

// const styles = [
//   "node_modules/normalize.css/normalize.css",
  
// ];

task('styles', () => {
    return src([...STYLES_LIBS, `${SRC_PATH}/css/main.scss`])
    .pipe(gulpif(env == 'dev', sourcemaps.init()))
    .pipe(concat('main.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    // .pipe(px2rem())
    .pipe(gulpif(env == 'dev', autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  })))
    .pipe(gulpif(env == 'prod', gcmq())) 
    .pipe(gulpif(env == 'prod', cleanCSS()))
    .pipe(gulpif(env == 'dev', sourcemaps.write()))
    .pipe(dest(`${DIST_PATH}/css`))
    .pipe(reload({stream: true}));
 });

// const libs = [
//   'node_modules/jquery/dist/jquery.js',
//   'node_modules/jquery-touchswipe/jquery.touchSwipe.min.js',
  
// ]

 task('scripts', () => {
    return src([...JS_LIBS, `${SRC_PATH}/JS/*.js`])
     .pipe(gulpif(env == 'dev', sourcemaps.init()))
     .pipe(concat('index.js', {newLine: ';'}))
    // .pipe(babel({
    //   presets: ['@babel/env']
    // })
    // )
     //.pipe(gulpif(env == 'dev', uglify()))
     .pipe(gulpif(env == 'dev', sourcemaps.write()))
    .pipe(dest(`${DIST_PATH}/JS`))
    .pipe(reload({stream: true}));
 })

 task('icons', () => {
   return src(`${SRC_PATH}/img/icons/*.svg`)
   .pipe(svgo({
     plugins: [{
      removeAttrs: {
        attrs: '(fill|stroke|style|width|height|data.*)'
      }
     }  
     ]
   })
   )
   .pipe(svgSprite({
     mode: {
       symbol: {
         sprite: '../sprite.svg'
       }
     }
   }))
   .pipe(dest(`${DIST_PATH}/img/icons`));
 })

 task('server', () => {
  browserSync.init({
      server: {
          baseDir: `./${DIST_PATH}`
      },
      open: false
  });
});


task('watch', () => {
  watch(`./${SRC_PATH}/css/**/*.scss`, series('styles'));
  watch(`./${SRC_PATH}/*.html`, series('copy:html'));
  watch(`./${SRC_PATH}/JS/*.js`, series('scripts'));
  watch(`./${SRC_PATH}/img/icons/*.svg`, series('icons'));
});

   
////default
task('default', series(
  'clean',
   parallel('copy:html','copy:fonts', 'copy:jpg', 'copy:png','copy:mp4', 'styles', 'scripts', 'icons'),
   parallel ('watch', 'server')
  )
);


task('build', series(
  'clean',
   parallel('copy:html','copy:fonts', 'copy:jpg', 'copy:png','copy:mp4', 'styles', 'scripts', 'icons'))
   );